"use client";
import Link from "next/link";
import { useState } from "react";
import { navVariants } from "@/motion";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import MobileNav from "./MobileNav";

export default function Navbar() {
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (previous && latest > previous) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
		e.preventDefault();
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<>
			<motion.nav
				variants={navVariants}
				className="w-full h-[10vh] padding-x fixed top-0 left-0 z-50 backdrop-blur-[7px] flex items-center justify-between sm:hidden xm:hidden md:hidden"
				animate={hidden ? "hidden" : "vissible"}>

				{/* Left — Wordmark */}
				<div className="w-[20%]">
					<Link href="/" className="flex items-center group">
						<span
							className="text-xl font-black uppercase tracking-tight text-[#212121] transition-all duration-300 group-hover:tracking-wider"
							style={{ fontFamily: "'Unbounded', sans-serif" }}
						>
							Crossgaze
						</span>
					</Link>
				</div>

				{/* Center — Single nav link */}
				<div className="flex justify-center w-[60%]">
					<Link
						href="/#how-it-works"
						className="font-NeueMontreal text-[15px] text-[#212121]/60 hover:text-[#212121] transition-colors duration-300 cursor-pointer"
					>
						How it works
					</Link>
				</div>

				{/* Right — CTA */}
				<div className="w-[20%] flex justify-end">
					<a
						href="waitlist"
						className="font-NeueMontreal text-[14px] font-medium px-5 py-2.5 rounded-full bg-[#212121] text-white hover:bg-[#102c26] transition-all duration-300"
					>
						Join waitlist
					</a>
				</div>
			</motion.nav>
			<MobileNav />
		</>
	);
}
