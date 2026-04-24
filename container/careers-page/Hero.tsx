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
					We are building the live startup ecosystem where founders, contributors, and investors connect through real execution. If you are driven by building products that matter, we want to hear from you.
				</p>
			</div>
		</section>
	);
}
