"use client";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section className="w-full h-[60vh] flex items-center justify-center bg-background py-[100px] padding-x">
			<div className="w-full flex flex-col justify-center items-center text-center">
				<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
					Join Our <br /> Mission
				</h1>
				<p className="sub-paragraph font-NeueMontreal text-secondry mt-[30px] max-w-[600px]">
					We are always looking for visionary engineers, designers, and innovators to build the future of Web, Blockchain, and AI.
				</p>
			</div>
		</section>
	);
}
