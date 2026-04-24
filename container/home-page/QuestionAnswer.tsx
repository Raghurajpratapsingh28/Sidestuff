"use client";
import { useState } from "react";
import { homeFaqItems } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function QuestionAnswer() {
	const [activeAccordion, setActiveAccordion] = useState(null);
	const toggleAccordion = (itemId: any) => {
		setActiveAccordion((prev) => (prev === itemId ? null : itemId));
	};

	return (
		<section className="w-full padding-y bg-[#F1F1F1]">
			<div className="padding-x pb-12 border-b border-[#21212133]">
				<p className="uppercase tracking-[0.25em] text-[11px] xm:text-[10px] font-NeueMontreal font-medium mb-8 sm:mb-6 xm:mb-5" style={{ color: "#102c26" }}>
					FAQ
				</p>
				<h2 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[4vw] leading-none font-NeueMontreal text-[#212121] tracking-tight">
					Questions people <span className="text-[#212121]/25">actually ask.</span>
				</h2>
			</div>
			<div className="w-full flex flex-col">
				{homeFaqItems.map((item) => (
					<div
						key={item.id}
						className="w-full flex flex-col border-b border-[#21212133] transition-colors duration-300 hover:bg-white/50"
					>
						<div 
							className="w-full flex items-center justify-between py-8 padding-x cursor-pointer group"
							onClick={() => toggleAccordion(item.id)}
						>
							<div className="w-[50%] flex items-center">
								<div  className="w-[40%] sm:w-auto xm:w-auto">
									<p className="text-lg md:text-xl font-NeueMontreal text-[#212121] group-hover:underline decoration-1 underline-offset-4 transition-all">
										{item.category}
									</p>
								</div>
								<div className="w-auto sm:hidden xm:hidden">
									<motion.span
										className={`text-lg font-NeueMontreal text-[#212121] ${
											activeAccordion === item.id ? "opacity-100" : "opacity-0"
										} transition-opacity duration-300`}
									>
										Question:
									</motion.span>
								</div>
							</div>
							<div className="w-[50%] flex items-center justify-between">
								<div className="w-[40%] sm:w-full xm:w-full">
									<h3 className="text-lg md:text-xl font-NeueMontreal text-[#212121]">
										{item.question}
									</h3>
								</div>
								<div className="w-[10%] sm:w-auto xm:w-auto flex items-end justify-end">
									<div
										className={`w-12 h-12 rounded-full border border-[#212121] flex items-center justify-center transition-all duration-300 ${
											activeAccordion === item.id
												? "bg-[#212121] text-white"
												: "text-[#212121] group-hover:bg-[#212121] group-hover:text-white"
										}`}
									>
										<span className="uppercase text-xs font-bold font-NeueMontreal">
											{activeAccordion === item.id ? 	"Read" : "Read"}
										</span>	
									</div>
								</div>
							</div>
						</div>

						<AnimatePresence>
							{activeAccordion === item.id && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: "auto", opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
									className="overflow-hidden"
								>
									<div className="w-full flex justify-between padding-x pb-8 sm:flex-col xm:flex-col gap-10">
										<div className="w-[20%] sm:hidden xm:hidden" />
										
								<div className="w-[30%] sm:w-full xm:w-full flex flex-col gap-4">
										<p className="font-NeueMontreal text-sm uppercase opacity-50">Topic:</p>
											<span className="px-4 py-2 border border-[#212121] w-fit rounded-full text-sm uppercase font-NeueMontreal hover:bg-[#212121] hover:text-white transition-colors duration-300 cursor-default">
												{item.category}
											</span>
										</div>

								<div className="w-[40%] sm:w-full xm:w-full flex flex-col gap-6">
										<p className="font-NeueMontreal text-sm uppercase opacity-50">Answer:</p>
											<p className="font-NeueMontreal text-xl leading-relaxed text-[#212121]">
												{item.answer}
											</p>
										</div>
										
										<div className="w-[10%] sm:hidden xm:hidden" />
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				))}
			</div>
		</section>
	);
}
