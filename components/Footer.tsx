import { LinkHover, TextMask } from "@/animation";

export default function Footer() {
	const phrase = ["SIDE", "STUFF"];
	
	const productLinks = [
		{ id: 1, title: "How it works", href: "#how-it-works" },
		{ id: 2, title: "Features", href: "#features" },
		{ id: 3, title: "For Investors", href: "#investors" },
		{ id: 4, title: "Join Waitlist", href: "waitlist", highlighted: true },
	];

	const companyLinks = [
		{ id: 1, title: "About", href: "#about" },
		{ id: 2, title: "Careers", href: "/careers" },
		{ id: 3, title: "Contact", href: "mailto:hello@sidestuff.io" },
	];

	const socialLinks = [
		{ id: 1, title: "X (Twitter)", href: "#" },
		{ id: 2, title: "LinkedIn", href: "#" },
		{ id: 3, title: "Instagram", href: "#" },
	];

	return (
		<footer className="w-full min-h-[80vh] padding-x z-30 relative pt-[80px] sm:pt-[60px] xm:pt-[40px] bg-background flex flex-col justify-between rounded-t-[20px] mt-[-20px]">
			<div className="w-full flex justify-between sm:flex-col xm:flex-col gap-20 sm:gap-10">
				
				{/* Brand Section — Left */}
				<div className="flex flex-col sm:w-full xm:w-full w-1/2">
					<h1 className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-FoundersGrotesk text-secondry uppercase mb-10">
						<TextMask>{phrase}</TextMask>
					</h1>
					
					<div className="max-w-[400px]">
						<p className="font-NeueMontreal font-medium text-secondry text-lg mb-4 uppercase tracking-wider">
							Execution-led startup signal.
						</p>
						<p className="paragraph font-NeueMontreal text-secondry opacity-50 mb-10 leading-relaxed">
							Sidestuff is a live execution engine for early-stage startups. We connect founders, contributors, and investors through real-time milestone tracking and transparent signal.
						</p>
						
						<div className="flex flex-col gap-y-[10px]">
							<h1 className="paragraph font-medium font-NeueMontreal text-secondry opacity-30 uppercase text-xs tracking-widest mb-2">
								Follow us:
							</h1>
							<div className="flex flex-col gap-y-[10px]">
								{socialLinks.map((item) => (
									<LinkHover
										key={item.id}
										title={item.title}
										href={item.href}
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-secondry capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
									/>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Navigation Sections — Right */}
				<div className="h-full flex flex-col justify-between sm:w-full xm:w-full w-1/2 pt-10 sm:pt-0">
					<div>
						<div className="flex justify-between pt-[50px] sm:flex-col xm:flex-col sm:gap-10">
							<div>
								<h1 className="paragraph font-medium font-NeueMontreal text-secondry opacity-30 uppercase text-xs tracking-widest pb-[20px]">
									Product:
								</h1>
								<div className="flex flex-col gap-y-[10px]">
									{productLinks.map((item) => (
										<LinkHover
											key={item.id}
											title={item.title}
											href={item.href}
											className={`before:h-[1px] after:h-[1px] w-fit paragraph font-medium ${item.highlighted ? 'text-[#102c26] font-bold' : 'text-secondry'} capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]`}
										/>
									))}
								</div>
							</div>
							
							<div>
								<h1 className="paragraph font-medium font-NeueMontreal text-secondry opacity-30 uppercase text-xs tracking-widest pb-[20px]">
									Company:
								</h1>
								<div className="flex flex-col gap-y-[10px]">
									{companyLinks.map((item) => (
										<LinkHover
											key={item.id}
											title={item.title}
											href={item.href}
											className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-secondry capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										/>
									))}
								</div>
							</div>
						</div>

						<div className="pt-[100px] sm:pt-20 flex flex-col gap-y-[10px]">
							<h1 className="paragraph font-medium font-NeueMontreal text-secondry opacity-30 uppercase text-xs tracking-widest">
								Get in touch:
							</h1>
							<LinkHover
								title="hello@sidestuff.io"
								href="mailto:hello@sidestuff.io"
								className="before:h-[1px] after:h-[1px] text-3xl md:text-2xl sm:text-xl font-medium font-NeueMontreal before:bottom-[-3px] after:bottom-[-3px]"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="w-full pt-[80px] pb-[30px] flex justify-between sm:flex-col xm:flex-col sm:gap-[40px] xm:gap-[40px] items-end border-t border-secondry/10 mt-20">
				<div className="flex flex-col gap-4">
					<p className="text-xl font-black uppercase tracking-tight text-[#212121]" style={{ fontFamily: "'Unbounded', sans-serif" }}>
						sidestuff
					</p>
					<h1 className="paragraph font-medium font-NeueMontreal text-secondry opacity-40">
						© 2026 Sidestuff. All rights reserved.
					</h1>
				</div>
				
				<div className="flex gap-[40px] sm:flex-col xm:flex-col sm:gap-4 items-end sm:items-start text-right sm:text-left">
					<div className="flex gap-10">
						<LinkHover
							title="Privacy Policy"
							href="#"
							className="before:h-[1px] after:h-[1px] paragraph font-medium text-secondry opacity-40 before:bottom-[-3px] after:bottom-[-3px]"
						/>
						<LinkHover
							title="Terms of Use"
							href="#"
							className="before:h-[1px] after:h-[1px] paragraph font-medium text-secondry opacity-40 before:bottom-[-3px] after:bottom-[-3px]"
						/>
						<LinkHover
							title="Cookie Policy"
							href="#"
							className="before:h-[1px] after:h-[1px] paragraph font-medium text-secondry opacity-40 before:bottom-[-3px] after:bottom-[-3px]"
						/>
					</div>
					<div>
						<p className="paragraph font-medium font-NeueMontreal text-secondry opacity-40">
							Built with ❤ in Vancouver
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
