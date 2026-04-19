"use client";
import { motion } from "framer-motion";

const features = [
	{
		text: "Role-based team structure for every startup",
		keyword: "Team structure",
	},
	{
		text: "Contribution tracking tied to real milestones",
		keyword: "Milestones",
	},
	{
		text: "Startup visibility earned through execution",
		keyword: "Earned visibility",
	},
	{
		text: "Investor access based on team activity signals",
		keyword: "Investor signals",
	},
	{
		text: "Cross-functional profiles for all contributor types",
		keyword: "All roles",
	},
	{
		text: "No passive listings — only live, active projects",
		keyword: "Active only",
	},
	{
		text: "Milestone-driven progress visible to the ecosystem",
		keyword: "Transparency",
	},
	{
		text: "Curated access — quality over volume",
		keyword: "Curated",
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

export default function PlatformFeatures() {
	return (
		<section className="w-full bg-[#F1F1F1]">
			<div className="padding-x padding-y">

				{/* Header — centered */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					custom={0}
					variants={fade}
					className="text-center mb-20 sm:mb-14 xm:mb-10"
				>
					<p className="uppercase tracking-[0.25em] text-[11px] xm:text-[10px] font-NeueMontreal font-medium mb-6 sm:mb-5 xm:mb-4" style={{ color: "#102c26" }}>
						Platform features
					</p>
					<h2 className="font-NeueMontreal font-medium text-[#212121] tracking-tight text-[40px] sm:text-[30px] xm:text-[26px] md:text-[50px] lg:text-[3.5vw] xl:text-[3.5vw] leading-[1.1]">
						Built for builders.
					</h2>
					<h2 className="font-NeueMontreal font-medium text-[#212121]/20 tracking-tight text-[40px] sm:text-[30px] xm:text-[26px] md:text-[50px] lg:text-[3.5vw] xl:text-[3.5vw] leading-[1.1]">
						Not for browsers.
					</h2>
				</motion.div>

				{/* 4×2 Feature grid */}
				<div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 border-t border-l border-[#212121]/[0.08] sm:border-l-0 xm:border-l-0">
					{features.map((feature, i) => (
						<motion.div
							key={i}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.15 }}
							custom={i + 1}
							variants={fade}
							className="border-b border-r border-[#212121]/[0.08] sm:border-r-0 xm:border-r-0 p-8 lg:p-7 sm:p-6 xm:p-5 flex flex-col justify-between min-h-[200px] sm:min-h-0 xm:min-h-0 group"
						>
							{/* Top — number + keyword */}
							<div>
								<span className="font-NeueMontreal text-[15px] xm:text-[12px] tabular-nums block mb-2" style={{ color: "#102c26" }}>
									{String(i + 1).padStart(2, "0")}
								</span>
								<h3 className="font-NeueMontreal font-medium text-[#212121] text-[28px] sm:text-[24px] xm:text-[22px] leading-[1.2]">
									{feature.keyword}
								</h3>
							</div>

							{/* Bottom — description */}
							<p className="font-NeueMontreal text-[#212121]/65 text-[18px] sm:text-[16px] xm:text-[15px] leading-[1.65] mt-6 sm:mt-4 xm:mt-3">
								{feature.text}
							</p>
						</motion.div>
					))}
				</div>

			</div>
		</section>
	);
}
