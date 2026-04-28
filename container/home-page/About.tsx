"use client";
import { motion } from "framer-motion";

const fade = {
	hidden: { opacity: 0, y: 14 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.35, delay: i * 0.04, ease: [0.25, 0.1, 0.25, 1] },
	}),
};

const painPoints = [
	{
		role: "Founders",
		desc: "You list your startup on every platform. Nothing moves. Finding people willing to actually build with you is nearly impossible.",
	},
	{
		role: "Developers",
		desc: "You want real startup experience. All you get are side projects that go nowhere and job boards for companies you didn't help build.",
	},
	{
		role: "Non-tech roles",
		desc: "Marketers, analysts, ops people — you're told startups only need engineers. Your skills have no real home in the early-stage world.",
	},
	{
		role: "Investors",
		desc: "You review hundreds of cold pitch decks. You have no way to see what's actually being built before a warm intro lands in your inbox.",
	},
];

const solutions = [
	{
		label: "For founders",
		headline: "Build a full cross-functional team around your startup.",
		desc: "Not interns. Not freelancers. Contributors who are invested in building with you.",
	},
	{
		label: "For contributors",
		headline: "Work on live startups across every role.",
		desc: "Product, marketing, ops, finance, design. Build a portfolio of real outcomes, not fake projects.",
	},
	{
		label: "For investors",
		headline: "See startups in motion.",
		desc: "Evaluate team depth, contribution history, and execution pace — before anyone asks for a meeting.",
	},
];

export default function About() {
	return (
		<section className="w-full relative z-20 mt-[-15px]">

			{/* ─── THE PROBLEM ─── */}
			<div className="bg-[#102c26] rounded-t-[20px]">
				<div className="padding-x padding-y">

					{/* Top: Label + Headline + Cards in a split layout */}
					<div className="flex flex-col xl:flex-row lg:flex-row gap-16 sm:gap-10 xm:gap-8">

						{/* Left column — headline (sticky on desktop) */}
						<div className="xl:w-[45%] lg:w-[45%] xl:sticky lg:sticky xl:top-[120px] lg:top-[120px] xl:self-start lg:self-start">
							<motion.p
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.5 }}
								custom={0}
								variants={fade}
								className="uppercase tracking-[0.25em] text-[11px] xm:text-[10px] font-NeueMontreal text-white/30 mb-8 sm:mb-6 xm:mb-5"
							>
								The problem
							</motion.p>

							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								custom={1}
								variants={fade}
							>
								<h2 className="font-NeueMontreal font-medium text-white/65 tracking-tight text-[42px] sm:text-[30px] xm:text-[26px] md:text-[48px] lg:text-[3vw] xl:text-[3.2vw] leading-[1.1]">
									The current system rewards ideas.
								</h2>
								<h2 className="font-NeueMontreal font-medium text-white tracking-tight text-[42px] sm:text-[30px] xm:text-[26px] md:text-[48px] lg:text-[3vw] xl:text-[3.2vw] leading-[1.1] mt-2">
									Katagoge rewards execution.
								</h2>
								<p className="text-white/55 font-NeueMontreal text-[17px] sm:text-[15px] xm:text-[14px] leading-[1.75] mt-8 sm:mt-6 xm:mt-5 max-w-[460px]">
									Every piece of the startup ecosystem is broken in the same way — signal is missing, and noise fills the gap.
								</p>
							</motion.div>
						</div>

						{/* Right column — 2×2 numbered cards */}
						<div className="xl:w-[55%] lg:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-3 xm:gap-3">
							{painPoints.map((point, i) => (
								<motion.div
									key={point.role}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.2 }}
									custom={i + 2}
									variants={fade}
									className="group border border-white/[0.07] rounded-2xl p-7 sm:p-5 xm:p-5 hover:border-white/[0.14] transition-colors duration-500"
								>
									{/* Number */}
									<span className="font-NeueMontreal font-medium text-[44px] sm:text-[34px] xm:text-[30px] leading-none text-white/[0.07] block mb-5 sm:mb-4 xm:mb-3">
										{String(i + 1).padStart(2, "0")}
									</span>

									{/* Role */}
									<h4 className="font-NeueMontreal font-medium text-white text-[24px] sm:text-[20px] xm:text-[18px] mb-3 sm:mb-2 xm:mb-2">
										{point.role}
									</h4>

									{/* Description */}
									<p className="font-NeueMontreal text-white/60 text-[18px] sm:text-[15px] xm:text-[14px] leading-[1.7]">
										{point.desc}
									</p>
								</motion.div>
							))}
						</div>

					</div>
				</div>
			</div>

			{/* ─── THE SOLUTION ─── */}
			<div className="bg-[#faf9f7]">
				<div className="padding-x padding-y">

					{/* Split layout matching Problem section */}
					<div className="flex flex-col xl:flex-row lg:flex-row gap-16 sm:gap-10 xm:gap-8">

						{/* Left column — headline + quote */}
						<div className="xl:w-[45%] lg:w-[45%] xl:sticky lg:sticky xl:top-[120px] lg:top-[120px] xl:self-start lg:self-start">
							<motion.p
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.5 }}
								custom={0}
								variants={fade}
								className="uppercase tracking-[0.25em] text-[11px] xm:text-[10px] font-NeueMontreal text-[#212121]/25 mb-8 sm:mb-6 xm:mb-5"
							>
								The solution
							</motion.p>

							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								custom={1}
								variants={fade}
							>
								<h2 className="font-NeueMontreal font-medium tracking-tight text-[42px] sm:text-[30px] xm:text-[26px] md:text-[48px] lg:text-[3vw] xl:text-[3.2vw] leading-[1.1]" style={{ color: "#102c26" }}>
									A live startup ecosystem.
								</h2>
								<h2 className="font-NeueMontreal font-medium text-[#212121]/25 tracking-tight text-[42px] sm:text-[30px] xm:text-[26px] md:text-[48px] lg:text-[3vw] xl:text-[3.2vw] leading-[1.1] mt-2">
									Built on contribution.
								</h2>
								<p className="text-[#212121]/65 font-NeueMontreal text-[17px] sm:text-[15px] xm:text-[14px] leading-[1.75] mt-8 sm:mt-6 xm:mt-5 max-w-[460px]">
									Katagoge connects every role that startups actually need — and gives visibility to those who show up and do the work.
								</p>

								{/* Quote */}
								<div className="mt-10 sm:mt-8 xm:mt-6 pl-6 sm:pl-5 xm:pl-4 border-l-[2px]" style={{ borderColor: "#102c26" }}>
									<p className="font-NeueMontreal font-medium text-[#212121] text-[24px] sm:text-[19px] xm:text-[17px] leading-[1.35] tracking-tight">
										Investors discover execution,{" "}
										<span className="text-[#212121]/25">not ideas.</span>
									</p>
								</div>
							</motion.div>
						</div>

						{/* Right column — numbered cards */}
						<div className="xl:w-[55%] lg:w-[55%] flex flex-col gap-4 sm:gap-3 xm:gap-3">
							{solutions.map((sol, i) => (
								<motion.div
									key={sol.label}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.2 }}
									custom={i + 2}
									variants={fade}
									className="group border border-[#212121]/[0.07] rounded-2xl p-7 sm:p-5 xm:p-5 hover:border-[#212121]/[0.14] transition-colors duration-500"
								>
									{/* Number */}
									<span className="font-NeueMontreal font-medium text-[44px] sm:text-[34px] xm:text-[30px] leading-none text-[#212121]/[0.06] block mb-5 sm:mb-4 xm:mb-3">
										{String(i + 1).padStart(2, "0")}
									</span>

									{/* Label */}
									<span className="font-NeueMontreal font-medium text-[13px] xm:text-[12px] uppercase tracking-[0.2em] mb-3 sm:mb-2 xm:mb-2 block" style={{ color: "#102c26" }}>
										{sol.label}
									</span>

									{/* Headline */}
									<h3 className="font-NeueMontreal font-medium text-[#212121] text-[22px] sm:text-[18px] xm:text-[17px] leading-[1.3] mb-3 sm:mb-2 xm:mb-2">
										{sol.headline}
									</h3>

									{/* Description */}
									<p className="font-NeueMontreal text-[#212121]/65 text-[18px] sm:text-[15px] xm:text-[14px] leading-[1.7]">
										{sol.desc}
									</p>
								</motion.div>
							))}
						</div>

					</div>
				</div>
			</div>
		</section>
	);
}
