"use client";
import Link from "next/link";
import { useRef } from "react";
import { TextMask } from "@/animation";
import { ArrowUpRight } from "lucide-react";
import { RoundButton, Rounded } from "@/components";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Ready() {
	const container = useRef(null);
	const phrase = ["Ready", "to build", "what's next?"];

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	const mq = useTransform(scrollYProgress, [0, 1], [0, -700]);

	return (
		<section
			id="waitlist"
			className="w-full relative z-30 min-h-screen sm:h-screen xm:h-screen bg-[#102c26] padding-y rounded-t-[20px] mt-[-20px]"
			ref={container}>
			<div className="w-full h-full flex justify-center gap-[50px] items-center flex-col">
				<div className="flex flex-col gap-[10px]">
					<h1 className="text-[290px] leading-[230px] lg:text-[220px] lg:leading-[170px] md:text-[180px] md:leading-[140px] sm:text-[120px] sm:leading-[90px] xm:text-[80px] xm:leading-[60px] tracking-[-2.5px] text-center font-bold font-FoundersGrotesk text-white uppercase pointer-events-none">
						<TextMask>{phrase}</TextMask>
					</h1>
				</div>
				<div className="flex flex-col  items-center gap-[10px]">
					<div className="flex items-center justify-between bg-white cursor-pointer rounded-full group">
						<RoundButton
							href="mailto:hello@Snypyr.io"
							title="Join waitlist"
							className="bg-white text-black"
							bgcolor="#f1f1f1"
							style={{ color: "#000" }}
						/>
					</div>
					<p className="text-[20px] font-NeueMontreal text-white/50">OR</p>
					<div className="flex items-center justify-between bg-transparent cursor-pointer rounded-full group border border-white/20">
						<Link
							className="xl:text-[18px] xl:leading-[28px] text-[14px] leading-[24px] uppercase font-normal font-NeueMontreal"
							href="mailto:hello@Snypyr.io">
							<Rounded
								className="py-[6px]"
								backgroundColor="#f1f1f1">
								<p className="z-10 px-[10px] ml-[15px] py-[6px] group-hover:text-black text-white">
									hello@Snypyr.io
								</p>
								<div className="bg-white group-hover:bg-[#102c26] text-black group-hover:text-white p-[10px] rounded-full scale-[0.3] mr-[10px] group-hover:scale-[0.9] transition-all z-10 transform duration-[0.3s] ease-[.215,.61,.355,1]">
									<ArrowUpRight
										strokeWidth={1.5}
										size={30}
										className="scale-[0] group-hover:scale-[1]"
									/>
								</div>
							</Rounded>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
