"use client";
import { Curve, Ready } from "@/components";
import { About, Whoitsfor, ForInvestors, HowItWorks, Hero, PlatformFeatures, QuestionAnswer } from "@/container";
import SEOHead from "@/components/SEOHead";
import { 
	generateOrganizationSchema, 
	generateWebsiteSchema, 
	generateBreadcrumbSchema,
	generateFAQSchema,
	SITE_CONFIG 
} from "@/utils/seo";

export default function Home() {

	// SEO Metadata
	const metadata = {
		title: "Sidestuff | Live Startup Ecosystem & Execution Engine",
		description: "Sidestuff is a platform where startups aren't just listed — they're actively built by real teams. Connect founders, contributors, and investors through real work and execution.",
		canonical: SITE_CONFIG.url,
		keywords: [
			"Sidestuff",
			"startup ecosystem",
			"startup building platform",
			"execution-led traction",
			"early stage startups"
		]
	};

	// Schema markup for homepage
	const schemas = [
		generateOrganizationSchema(),
		generateWebsiteSchema(),
		generateBreadcrumbSchema([
			{ name: "Home", url: SITE_CONFIG.url }
		]),
		generateFAQSchema([
			{
				question: "What is Sidestuff?",
				answer: "Sidestuff is a platform where startups aren’t just listed — they’re actively built by real teams across roles like development, marketing, design, analytics, and business."
			},
			{
				question: "How does Sidestuff connect founders and investors?",
				answer: "It connects founders, contributors, and investors in one ecosystem where execution, collaboration, and real work define visibility and opportunity."
			},
			{
				question: "How are startups evaluated on Sidestuff?",
				answer: "Instead of resumes or pitch decks, people and startups are evaluated based on what they’re actually building and contributing."
			}
		])
	];

	return (
		<>
			<SEOHead metadata={metadata} schema={schemas} />
			<Curve backgroundColor={"#f1f1f1"}>
				<Hero />
				{/* <div className="w-full bg-marquee z-10 relative rounded-t-[20px] padding-y">
					<Marquee
						title="we are Sidestuff"
						className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
					/>
				</div> */}
				<About />
				<HowItWorks />
				{/* <VideoHome /> */}
				{/* <Projects /> */}
				<Whoitsfor />
				<ForInvestors />
				<PlatformFeatures/>
				<QuestionAnswer/>
				<Ready />
			</Curve>
		</>
	);
}
