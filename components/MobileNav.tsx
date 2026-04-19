"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileNav() {
	const [toggle, setToggle] = useState(false);

	const closeMenu = () => setToggle(false);

	const scrollToSection = (id: string) => {
		closeMenu();
		setTimeout(() => {
			const el = document.getElementById(id);
			if (el) {
				el.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		}, 400);
	};

	return (
		<>
			{/* Mobile top bar */}
			<div className="w-full hidden justify-between items-center h-[8vh] padding-x sm:flex xm:flex md:flex bg-background">
				<Link href="/" className="flex items-center group">
					<span
						className="text-xl font-black uppercase tracking-tight text-[#212121] transition-all duration-300 group-hover:tracking-wider"
						style={{ fontFamily: "'Unbounded', sans-serif" }}
					>
						sidestuff
					</span>
				</Link>

				<div className="flex items-center gap-3">
					{/* CTA visible on mobile bar */}
					<a
						href="waitlist"
						className="font-NeueMontreal text-[12px] font-medium px-4 py-2 rounded-full bg-[#212121] text-white"
					>
						Join waitlist
					</a>
					<HiOutlineMenuAlt4
						onClick={() => setToggle(true)}
						className="text-3xl cursor-pointer text-black"
					/>
				</div>
			</div>

			{/* Full-screen mobile menu */}
			<AnimatePresence>
				{toggle && (
					<motion.div
						initial={{ clipPath: "circle(0% at 100% 0%)" }}
						animate={{ clipPath: "circle(150% at 100% 0%)" }}
						exit={{ clipPath: "circle(0% at 100% 0%)" }}
						transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
						className="fixed inset-0 z-[100] bg-secondry flex flex-col pt-[2vh]"
					>
						{/* Header */}
						<div className="w-full flex justify-between items-center h-[8vh] padding-x shrink-0">
							<Link href="/" onClick={closeMenu} className="flex items-center group">
								<span
									className="text-xl font-black uppercase tracking-tight text-background transition-all duration-300 group-hover:tracking-wider"
									style={{ fontFamily: "'Unbounded', sans-serif" }}
								>
									sidestuff
								</span>
							</Link>
							<div
								onClick={closeMenu}
								className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 cursor-pointer"
							>
								<IoMdClose className="text-2xl text-background" />
							</div>
						</div>

						{/* Menu items */}
						<div className="flex-1 flex flex-col justify-center padding-x">
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
								className="flex flex-col gap-8"
							>
								<button
									onClick={() => scrollToSection("how-it-works")}
									className="text-[12vw] leading-none font-FoundersGrotesk uppercase font-bold tracking-[-0.04em] text-background text-left hover:pl-4 transition-all duration-300"
								>
									How it works
								</button>

								<a
									href="waitlist"
									onClick={closeMenu}
									className="text-[12vw] leading-none font-FoundersGrotesk uppercase font-bold tracking-[-0.04em] text-background text-left hover:pl-4 transition-all duration-300"
								>
									Join waitlist
								</a>
							</motion.div>
						</div>

						{/* Footer */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.6, duration: 0.6 }}
							className="padding-x pb-10"
						>
							<p className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-NeueMontreal">
								© {new Date().getFullYear()} Sidestuff. All rights reserved.
							</p>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
