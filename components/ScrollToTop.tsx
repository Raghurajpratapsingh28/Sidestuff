"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	// Show/hide based on scroll position
	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 400) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	// Magnetic effect logic
	const handleMouseMove = (e: React.MouseEvent) => {
		if (!buttonRef.current) return;
		const { clientX, clientY } = e;
		const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
		const x = clientX - (left + width / 2);
		const y = clientY - (top + height / 2);
		setMousePosition({ x: x * 0.3, y: y * 0.3 });
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		setMousePosition({ x: 0, y: 0 });
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					ref={buttonRef}
					initial={{ opacity: 0, scale: 0.5, y: 50 }}
					animate={{
						opacity: 1,
						scale: 1,
						x: mousePosition.x,
						y: mousePosition.y + (isVisible ? 0 : 50),
					}}
					exit={{ opacity: 0, scale: 0.5, y: 50 }}
					transition={{ type: "spring", stiffness: 260, damping: 20 }}
					onMouseMove={handleMouseMove}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={handleMouseLeave}
					onClick={scrollToTop}
					className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-black/80 text-white shadow-2xl backdrop-blur-md border border-white/10 transition-colors hover:bg-black dark:bg-white/80 dark:text-black dark:border-black/10 dark:hover:bg-white"
					aria-label="Scroll to top">
					
					{/* Progress Circle */}
					<svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
						<circle
							cx="50"
							cy="50"
							r="46"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							className="opacity-10"
						/>
						<motion.circle
							cx="50"
							cy="50"
							r="46"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeDasharray="100 100"
							style={{ pathLength: scrollYProgress }}
						/>
					</svg>

					{/* Icon / Text */}
					<div className="relative flex items-center justify-center">
						<AnimatePresence mode="wait">
							{isHovered ? (
								<motion.span
									key="text"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									className="text-[10px] font-bold tracking-tighter uppercase">
									Top
								</motion.span>
							) : (
								<motion.div
									key="icon"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2.5"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="h-5 w-5">
										<path d="m18 15-6-6-6 6" />
									</svg>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</motion.button>
			)}
		</AnimatePresence>
	);
};

export default ScrollToTop;

