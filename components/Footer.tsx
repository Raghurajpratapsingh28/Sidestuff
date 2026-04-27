import { LinkHover, TextMask } from "@/animation";

export default function Footer() {
	const phrase = ["Crossgaze"];
	
	const productLinks = [
		{ id: 1, title: "How it works", href: "#how-it-works" },
		{ id: 2, title: "Features", href: "#features" },
		{ id: 3, title: "For Investors", href: "#investors" },
		{ id: 4, title: "Join Waitlist", href: "waitlist", highlighted: true },
	];

	const companyLinks = [
		{ id: 1, title: "About", href: "#about" },
		{ id: 2, title: "Careers", href: "/careers" },
		{ id: 3, title: "Contact", href: "mailto:hello@Crossgaze.com" },
	];

	const socialLinks = [
		{ id: 1, title: "X (Twitter)", href: "https://x.com/Crossgaze", external: true },
		{ id: 2, title: "LinkedIn", href: "https://linkedin.com/company/Crossgaze", external: true },
		{ id: 3, title: "Instagram", href: "https://instagram.com/Crossgaze", external: true },
	];

	return (
		<footer className="w-full min-h-[80vh] padding-x z-30 relative pt-[80px] sm:pt-[60px] xm:pt-[40px] bg-background flex flex-col justify-between rounded-t-[20px] mt-[-20px]">
			<div className="w-full flex justify-between sm:flex-col xm:flex-col gap-20 sm:gap-10 xm:gap-8">
				
				{/* Brand Section — Left */}
				<div className="flex flex-col sm:w-full xm:w-full w-1/2">
					<h1 className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[56px] xm:leading-[50px] font-semibold font-FoundersGrotesk text-secondry uppercase mb-10 sm:mb-6 xm:mb-4">
						<TextMask>{phrase}</TextMask>
					</h1>
					
					<div className="max-w-[400px] sm:max-w-full xm:max-w-full">
						<p className="font-NeueMontreal font-medium text-secondry text-lg mb-4 sm:mb-3 xm:mb-3 uppercase tracking-wider">
							Crossgaze — Where founders build teams, contributors gain experience, and investors discover execution.
						</p>
						<p className="paragraph font-NeueMontreal text-secondry opacity-50 mb-10 sm:mb-8 xm:mb-6 leading-relaxed">
							Crossgaze is a live startup ecosystem and execution engine. Connect with real teams, track milestones, and turn work into visible signal for founders, contributors, and investors.
						</p>
						
						<div className="flex flex-col gap-y-[10px]">
							<h3 className="paragraph font-medium font-NeueMontreal text-secondry opacity-30 uppercase text-xs tracking-widest mb-2">
								Follow us:
							</h3>
							<div className="flex flex-col gap-y-[10px]">
								{socialLinks.map((item) => (
									<LinkHover
										key={item.id}
										title={item.title}
										href={item.href}
										external={item.external}
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-secondry capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
									/>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Navigation Sections — Right */}
				<div className="h-full flex flex-col justify-between sm:w-full xm:w-full w-1/2 pt-10 sm:pt-0 xm:pt-0">
					<div>
						<div className="flex justify-between pt-[50px] sm:pt-[30px] xm:pt-[20px] sm:flex-col xm:flex-col sm:gap-10 xm:gap-8">
							<div>
								<h3 className="paragraph font-medium font-NeueMontreal text-secondry opacity-30 uppercase text-xs tracking-widest pb-[20px]">
									Product:
								</h3>
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
								<h3 className="paragraph font-medium font-NeueMontreal text-secondry opacity-30 uppercase text-xs tracking-widest pb-[20px]">
									Company:
								</h3>
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

						<div className="pt-[100px] sm:pt-16 xm:pt-12 flex flex-col gap-y-[10px]">
							<h3 className="paragraph font-medium font-NeueMontreal text-secondry opacity-30 uppercase text-xs tracking-widest">
								Get in touch:
							</h3>
							<LinkHover
								title="hello@Crossgaze.com"
								href="mailto:hello@Crossgaze.com"
								className="before:h-[1px] after:h-[1px] text-3xl md:text-2xl sm:text-2xl xm:text-xl font-medium font-NeueMontreal before:bottom-[-3px] after:bottom-[-3px]"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="w-full pt-[80px] sm:pt-[40px] xm:pt-[30px] pb-[30px] flex justify-between sm:flex-col xm:flex-col sm:gap-[30px] xm:gap-[20px] items-end sm:items-start xm:items-start border-t border-secondry/10 mt-20 sm:mt-12 xm:mt-10">
				<div className="flex flex-col gap-4 xm:gap-2">
					<p className="text-xl font-black uppercase tracking-tight text-[#212121]" style={{ fontFamily: "'Unbounded', sans-serif" }}>
						Crossgaze
					</p>
						<p className="paragraph font-medium font-NeueMontreal text-secondry opacity-40">
							© 2026 Crossgaze. All rights reserved.
						</p>
				</div>
				
				<div className="flex gap-[40px] sm:flex-col xm:flex-col sm:gap-6 xm:gap-4 items-end sm:items-start xm:items-start text-right sm:text-left xm:text-left">
						<div className="flex gap-10 sm:gap-4 xm:gap-4 sm:flex-col xm:flex-col">
							<LinkHover
								title="Privacy Policy"
								href="/privacy-policy"
								className="before:h-[1px] after:h-[1px] paragraph font-medium text-secondry opacity-40 before:bottom-[-3px] after:bottom-[-3px]"
							/>
							<LinkHover
								title="Terms of Use"
								href="/terms-of-use"
								className="before:h-[1px] after:h-[1px] paragraph font-medium text-secondry opacity-40 before:bottom-[-3px] after:bottom-[-3px]"
							/>
							<LinkHover
								title="Cookie Policy"
								href="/cookie-policy"
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
