"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
	return (
		<section className="w-full min-h-screen relative overflow-hidden bg-[#faf9f7]">
			{/* Gradient blobs */}
			<div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] sm:w-[300px] sm:h-[300px] xm:w-[220px] xm:h-[220px] rounded-full bg-[#f3e8ff] opacity-60 blur-[100px] sm:blur-[70px] xm:blur-[60px] pointer-events-none" />
			<div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] sm:w-[300px] sm:h-[300px] xm:w-[200px] xm:h-[200px] rounded-full bg-[#fce7f3] opacity-50 blur-[120px] sm:blur-[70px] xm:blur-[60px] pointer-events-none" />
			<div className="absolute bottom-[30%] left-[20%] w-[400px] h-[400px] sm:w-[200px] sm:h-[200px] xm:w-[160px] xm:h-[160px] rounded-full bg-[#e0e7ff] opacity-40 blur-[100px] sm:blur-[60px] xm:blur-[50px] pointer-events-none" />

			{/* Content wrapper */}
			<div className="relative z-10 flex flex-col items-center justify-start pt-[160px] lg:pt-[140px] md:pt-[120px] sm:pt-[90px] xm:pt-[80px] px-[24px] sm:px-[20px] xm:px-[16px] pb-0">

				{/* Pre-launch badge */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
					className="mb-[28px] sm:mb-[20px] xm:mb-[16px]"
				>
					<span className="inline-flex items-center gap-[8px] px-[16px] py-[8px] sm:px-[14px] sm:py-[7px] xm:px-[12px] xm:py-[6px] rounded-full bg-[#212121]/6 border border-[#212121]/10 text-[13px] sm:text-[12px] xm:text-[11px] font-NeueMontreal tracking-wide text-[#212121]/65 whitespace-nowrap">
						<span className="w-[7px] h-[7px] sm:w-[6px] sm:h-[6px] xm:w-[5px] xm:h-[5px] rounded-full bg-[#22c55e] animate-pulse flex-shrink-0" />
						Pre-launch — Limited access
					</span>
				</motion.div>

				{/* Headline */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
					className="text-center w-full max-w-[820px] mb-[20px] sm:mb-[16px] xm:mb-[14px]"
				>
					<h1 className="font-NeueMontreal font-semibold text-[#212121] tracking-[-2.5px] sm:tracking-[-1.5px] xm:tracking-[-1px] text-[76px] leading-[1] lg:text-[64px] md:text-[52px] sm:text-[40px] xm:text-[32px]">
						Startups are built here.
						<br />
						<span className="text-[#212121]/35">Not listed.</span>
					</h1>
				</motion.div>

				{/* Description */}
				<motion.p
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
					className="text-center font-NeueMontreal text-[#212121]/70 mb-[36px] sm:mb-[28px] xm:mb-[24px] text-[18px] leading-[28px] lg:text-[17px] lg:leading-[27px] md:text-[16px] md:leading-[26px] sm:text-[15px] sm:leading-[24px] xm:text-[14px] xm:leading-[22px] max-w-[580px] sm:max-w-[90%] xm:max-w-[100%]"
				>
					Crossgaze is a live ecosystem where startups are actively built by real teams. We connect founders, contributors, and investors through execution, collaboration, and real work — not pitch decks.
				</motion.p>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
					className="mb-[48px] sm:mb-[36px] xm:mb-[28px]"
				>
					<Link
						href="/waitlist"
						className="group inline-flex items-center gap-[10px] sm:gap-[8px] xm:gap-[6px] px-[32px] py-[16px] sm:px-[26px] sm:py-[13px] xm:px-[22px] xm:py-[12px] bg-[#212121] text-white font-NeueMontreal font-medium rounded-full transition-all duration-300 ease-out hover:bg-[#333] hover:shadow-[0_8px_32px_rgba(0,0,0,0.22)] hover:scale-[1.03] active:scale-[0.97] text-[16px] sm:text-[15px] xm:text-[14px]"
					>
						Request early access
						<ArrowRight
							size={18}
							className="transition-transform duration-300 group-hover:translate-x-[4px] sm:w-4 sm:h-4 xm:w-[14px] xm:h-[14px]"
						/>
					</Link>
				</motion.div>

				{/* Dashboard preview */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
					className="w-full max-w-[1100px] relative"
				>
					{/* Ambient glow */}
					<div className="absolute inset-x-0 top-[-20px] h-[80px] sm:h-[40px] xm:h-[30px] bg-[#d8b4fe]/20 blur-[40px] pointer-events-none" />

					{/* Image container — 16:9 desktop, 4:3 tablet+, tall crop mobile */}
					<div
						className="relative overflow-hidden rounded-t-[20px] sm:rounded-t-[14px] xm:rounded-t-[12px] border border-[#e4e4e7]/70 border-b-0 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_-8px_40px_rgba(0,0,0,0.07)]"
						style={{ aspectRatio: "16 / 9" }}
					>
						<Image
							src="/dashboard-preview.png"
							alt="Crossgaze platform dashboard preview"
							fill
							sizes="(max-width: 400px) 100vw, (max-width: 768px) 100vw, 1100px"
							className="object-cover object-top"
							priority
						/>
						{/* Bottom fade out */}
						<div className="absolute bottom-0 left-0 right-0 h-[160px] sm:h-[100px] xm:h-[70px] bg-gradient-to-t from-[#faf9f7] via-[#faf9f7]/70 to-transparent pointer-events-none" />
					</div>
				</motion.div>

			</div>
		</section>
	);
}
