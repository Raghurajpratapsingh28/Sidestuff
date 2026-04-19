"use client";
import { motion } from "framer-motion";

const steps = [
	{
		title: "A founder creates a startup",
		desc: "Not a listing. A live project with defined roles, goals, and a team structure. The startup exists to be built — not to collect followers.",
	},
	{
		title: "Contributors apply by role",
		desc: "Developers, marketers, analysts, designers, and business contributors request to join based on what the startup actually needs. Every role counts.",
	},
	{
		title: "Work happens in the open",
		desc: "Milestones are tracked. Contributions are logged. Execution builds each startup's visibility — not follower counts or pitch scores.",
	},
	{
		title: "Investors see what's real",
		desc: "Deal flow surfaces through activity. Investors watch teams execute, assess team depth, and reach out when the signal is right.",
	},
];

const fade = {
	hidden: { opacity: 0, y: 14 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.35, delay: i * 0.04, ease: [0.25, 0.1, 0.25, 1] },
	}),
};

export default function HowItWorks() {
	return (
		<section id="how-it-works" className="w-full bg-white">
			<div className="padding-x padding-y">

				{/* Header */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					custom={0}
					variants={fade}
					className="mb-20 sm:mb-14 xm:mb-10"
				>
					<p className="uppercase tracking-[0.25em] text-[11px] xm:text-[10px] font-NeueMontreal font-medium mb-6 sm:mb-5 xm:mb-4" style={{ color: "#102c26" }}>
						How it works
					</p>
					<h2 className="font-NeueMontreal font-medium text-[#212121] tracking-tight text-[40px] sm:text-[30px] xm:text-[26px] md:text-[50px] lg:text-[3.5vw] xl:text-[3.5vw] leading-[1.1]">
						Four steps.
					</h2>
					<h2 className="font-NeueMontreal font-medium text-[#212121]/20 tracking-tight text-[40px] sm:text-[30px] xm:text-[26px] md:text-[50px] lg:text-[3.5vw] xl:text-[3.5vw] leading-[1.1]">
						One ecosystem.
					</h2>
				</motion.div>

				{/* Steps */}
				<div className="flex flex-col">
					{steps.map((step, i) => (
						<motion.div
							key={i}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							custom={i + 1}
							variants={fade}
							className="flex gap-8 md:gap-6 sm:gap-5 xm:gap-4 relative"
						>
							{/* Left — number column with vertical line */}
							<div className="flex flex-col items-center flex-shrink-0 w-[80px] sm:w-[56px] xm:w-[48px]">
								{/* Number circle */}
								<div
									className="w-[64px] h-[64px] sm:w-[48px] sm:h-[48px] xm:w-[40px] xm:h-[40px] rounded-full flex items-center justify-center flex-shrink-0"
									style={{ backgroundColor: "#102c26" }}
								>
									<span className="font-NeueMontreal font-medium text-white text-[22px] sm:text-[18px] xm:text-[16px]">
										{String(i + 1).padStart(2, "0")}
									</span>
								</div>

								{/* Vertical connector line */}
								{i < steps.length - 1 && (
									<div className="w-[1px] flex-1 min-h-[40px]" style={{ backgroundColor: "#102c26", opacity: 0.15 }} />
								)}
							</div>

							{/* Right — content */}
							<div className="pb-16 sm:pb-12 xm:pb-10 pt-3 sm:pt-1 xm:pt-0 flex-1 max-w-[600px]">
								<h3 className="font-NeueMontreal font-medium text-[#212121] text-[26px] sm:text-[22px] xm:text-[20px] leading-[1.25] mb-4 sm:mb-3 xm:mb-2">
									{step.title}
								</h3>
								<p className="font-NeueMontreal text-[#212121]/65 text-[18px] sm:text-[16px] xm:text-[15px] leading-[1.7]">
									{step.desc}
								</p>
							</div>
						</motion.div>
					))}
				</div>

			</div>
		</section>
	);
}
