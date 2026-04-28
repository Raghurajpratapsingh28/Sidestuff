# Katagoge

Marketing + waitlist site. Next.js 14 (Pages Router) + Prisma + PostgreSQL, with SMTP-based email OTP.

## Architecture

```
        ┌────────────────────────┐
        │       Browser          │
        └───────────┬────────────┘
                    │ HTTP
                    ▼
   ┌──────────────────────────────────┐
   │  Next.js (pages/)                │
   │  - marketing UI                  │
   │  - /waitlist multi-step form     │
   │  - pages/api/*  (server routes)  │
   └──────┬───────────────────┬───────┘
          │ Prisma Client     │ Nodemailer (SMTP)
          ▼                   ▼
   ┌──────────────┐      ┌──────────────┐
   │  PostgreSQL  │      │  SMTP server │
   │  (Prisma)    │      │  (OTP mails) │
   └──────────────┘      └──────────────┘
```

- **Frontend**: `pages/`, `components/`, `container/`, `styles/`, Tailwind, Framer Motion, GSAP, Three.js.
- **Backend**: `pages/api/*` handlers; Prisma models in `prisma/schema.prisma` (`OtpVerification`, `WaitlistEntry`).
- **DB access**: `lib/` (Prisma client), `@prisma/adapter-pg` over `pg`.
- **Migrations**: `prisma/migrations/` — applied via `prisma migrate deploy` during build/container start.

## Run locally (Docker — fastest)

Requires Docker Desktop.

**Dev (hot reload, recommended while coding):**

```bash
cp .env.example .env
docker compose -f docker-compose.dev.yml up --build
```

Source is bind-mounted; saving a file triggers Next's HMR — no rebuild, no container restart. Only rerun with `--build` if you change `package.json` or `prisma/schema.prisma`.

**Prod-like (built image):**

```bash
docker compose up --build   # web on http://localhost:3000, Postgres on :5432
```

Both compose files spin up Postgres and override `DATABASE_URL` to point at it — you don't need to change `.env` for the DB. Migrations run automatically on container start.

## Run locally (Node, without Docker)

Requires Node 20+ and a running PostgreSQL.

```bash
cp .env.example .env            # set DATABASE_URL + SMTP_*
npm install                     # runs prisma generate via postinstall
npx prisma migrate deploy       # or `prisma migrate dev` for new migrations
npm run dev                     # http://localhost:3000
```

## Scripts

| Command         | What it does                                   |
| --------------- | ---------------------------------------------- |
| `npm run dev`   | Next dev server                                |
| `npm run build` | `prisma migrate deploy` + `next build`         |
| `npm start`     | Run the built app                              |
| `npm run lint`  | ESLint (next/core-web-vitals)                  |

## Environment

See `.env.example`. Required:

- `DATABASE_URL` — Postgres connection string
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` — outbound mail for OTP

## CI / CD

- `.github/workflows/ci.yml` — on PR + push to `main`: install, `prisma generate`, lint, typecheck, build (with a Postgres service).
- `.github/workflows/cd.yml` — on push to `main` and `v*.*.*` tags: build and push multi-tag Docker image to GHCR (`ghcr.io/<owner>/<repo>`).

## Contributing

1. Branch off `main`: `git checkout -b feat/<short-name>`
2. Run `npm run lint` and `npx tsc --noEmit` before pushing.
3. Add a migration for any schema change: `npx prisma migrate dev --name <change>`.
4. Open a PR — CI must pass before merge.
