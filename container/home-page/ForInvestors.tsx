"use client";
import { motion } from "framer-motion";

const signals = [
	{
		label: "Live teams",
		desc: "See team roles filled in real time.",
	},
	{
		label: "Execution history",
		desc: "Track milestones, not promises.",
	},
	{
		label: "Warm signal",
		desc: "Reach out when conviction is earned.",
	},
];

const fade = {
	hidden: { opacity: 0, y: 14 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.35, delay: i * 0.03, ease: [0.25, 0.1, 0.25, 1] },
	}),
};

export default function ForInvestors() {
	return (
		<section className="w-full bg-[#102c26] rounded-t-[20px] relative overflow-hidden">
			<div className="padding-x padding-y">

				{/* Top label */}
				<motion.h2
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					custom={0}
					variants={fade}
					className="font-NeueMontreal font-medium text-white text-[40px] sm:text-[30px] xm:text-[26px] md:text-[50px] lg:text-[3.5vw] xl:text-[3.5vw] leading-[1.1] tracking-tight mb-12 sm:mb-10 xm:mb-8"
				>
					For investors
				</motion.h2>

				{/* Quote block */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					custom={1}
					variants={fade}
					className="max-w-[900px] mb-12 sm:mb-10 xm:mb-8"
				>
					<p className="font-NeueMontreal font-medium text-white text-[32px] sm:text-[24px] xm:text-[22px] md:text-[36px] lg:text-[2.4vw] xl:text-[2.6vw] leading-[1.2] tracking-tight">
						&ldquo;Most platforms give you a vague pitch and a prayer.{" "}
						<span className="text-white/35">
							Snypyr gives you a window into the work.&rdquo;
						</span>
					</p>
				</motion.div>

				{/* Divider */}
				<div className="w-full h-[1px] bg-white/[0.08] mb-12 sm:mb-10 xm:mb-8" />

				{/* Body text — two column */}
				<div className="flex flex-col lg:flex-row xl:flex-row gap-12 sm:gap-8 xm:gap-6 mb-20 sm:mb-14 xm:mb-10">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						custom={2}
						variants={fade}
						className="lg:w-[50%] xl:w-[50%]"
					>
						<p className="font-NeueMontreal text-white/65 text-[18px] sm:text-[16px] xm:text-[15px] leading-[1.75] max-w-[520px]">
							Stop evaluating startups on narrative alone. On Snypyr, you see team composition, contribution depth, execution velocity, and milestone progress — all before a single email is sent.
						</p>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						custom={3}
						variants={fade}
						className="lg:w-[50%] xl:w-[50%]"
					>
						<p className="font-NeueMontreal text-white/50 text-[18px] sm:text-[16px] xm:text-[15px] leading-[1.75] max-w-[520px]">
							Early-stage deal flow based on signal, not noise.
						</p>
					</motion.div>
				</div>

				{/* Signal cards — 3 column */}
				<div className="grid grid-cols-3 sm:grid-cols-1 xm:grid-cols-1 gap-0">
					{signals.map((signal, i) => (
						<motion.div
							key={signal.label}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							custom={i + 4}
							variants={fade}
							className="border-t border-white/[0.08] pt-8 sm:pt-6 xm:pt-5 pb-4 pr-10 sm:pr-0 xm:pr-0"
						>
							{/* Number */}
							<span className="font-NeueMontreal text-[14px] xm:text-[12px] text-white/15 tabular-nums block mb-6 sm:mb-4 xm:mb-4">
								{String(i + 1).padStart(2, "0")}
							</span>

							{/* Label */}
							<h3 className="font-NeueMontreal font-medium text-white text-[24px] sm:text-[22px] xm:text-[20px] leading-[1.2] mb-3 sm:mb-2 xm:mb-2">
								{signal.label}
							</h3>

							{/* Description */}
							<p className="font-NeueMontreal text-white/60 text-[17px] sm:text-[15px] xm:text-[14px] leading-[1.6]">
								{signal.desc}
							</p>
						</motion.div>
					))}
				</div>

			</div>
		</section>
	);
}
