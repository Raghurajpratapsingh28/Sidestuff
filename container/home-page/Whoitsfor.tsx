"use client";
import { motion } from "framer-motion";

const roles = [
	{
		role: "Founders",
		desc: "Build your entire team — not just engineers. Get contributors who are invested in the outcome.",
	},
	{
		role: "Developers",
		desc: "Work on products that matter. Earn contribution history that speaks for itself.",
	},
	{
		role: "Marketers",
		desc: "Own growth at an early stage. Build the kind of experience no traditional role can provide.",
	},
	{
		role: "Analysts",
		desc: "Bring structure to early-stage chaos. Shape decisions with data when it matters most.",
	},
	{
		role: "Designers",
		desc: "Shape products from zero. Your work defines what the startup looks and feels like to the world.",
	},
	{
		role: "Biz Dev & Ops",
		desc: "Build the machine behind the product. Partnerships, operations, and strategy — startups need you early.",
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

export default function Whoitsfor() {
	return (
		<section className="w-full bg-white rounded-t-[20px]">
			<div className="padding-x padding-y">

				{/* Header — centered */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					custom={0}
					variants={fade}
					className="text-center mb-6 sm:mb-5 xm:mb-4"
				>
					<p className="uppercase tracking-[0.25em] text-[11px] xm:text-[10px] font-NeueMontreal font-medium mb-6 sm:mb-5 xm:mb-4" style={{ color: "#102c26" }}>
						Who it&apos;s for
					</p>
					<h2 className="text-[40px] sm:text-[30px] xm:text-[26px] md:text-[50px] lg:text-[3.5vw] xl:text-[3.5vw] leading-[1.1] font-NeueMontreal font-medium text-[#212121] tracking-tight">
						Every role a startup needs.
					</h2>
					<h2 className="text-[40px] sm:text-[30px] xm:text-[26px] md:text-[50px] lg:text-[3.5vw] xl:text-[3.5vw] leading-[1.1] font-NeueMontreal font-medium text-[#212121]/20 tracking-tight">
						Finally in one place.
					</h2>
				</motion.div>

				<motion.p
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					custom={1}
					variants={fade}
					className="text-center text-[#212121]/65 font-NeueMontreal text-[15px] sm:text-[14px] xm:text-[13px] leading-[1.7] max-w-[480px] mx-auto mb-16 sm:mb-12 xm:mb-10"
				>
					This is not a developer platform with a &ldquo;non-tech&rdquo; afterthought. Every function is a first-class citizen on Sidestuff.
				</motion.p>

				{/* 3×2 Role grid */}
				<div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xm:grid-cols-1 border-t border-l border-[#212121]/[0.08] sm:border-l-0 xm:border-l-0">
					{roles.map((item, i) => (
						<motion.div
							key={item.role}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.15 }}
							custom={i + 2}
							variants={fade}
							className="border-b border-r border-[#212121]/[0.08] sm:border-r-0 xm:border-r-0 p-10 lg:p-9 md:p-8 sm:p-7 xm:p-6 group"
						>
							<div className="flex items-baseline gap-4 mb-5 sm:mb-4 xm:mb-3">
								<span className="font-NeueMontreal text-[15px] sm:text-[13px] xm:text-[12px] tabular-nums" style={{ color: "#102c26" }}>
									{String(i + 1).padStart(2, "0")}
								</span>
								<h3 className="text-[28px] sm:text-[22px] xm:text-[20px] md:text-[26px] lg:text-[28px] font-NeueMontreal font-medium text-[#212121] leading-[1.2]">
									{item.role}
								</h3>
							</div>
							<p className="font-NeueMontreal text-[#212121]/65 text-[17px] sm:text-[15px] xm:text-[14px] leading-[1.7]">
								{item.desc}
							</p>
						</motion.div>
					))}
				</div>

			</div>
		</section>
	);
}
