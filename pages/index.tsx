"use client";
import { Curve, Ready } from "@/components";
import { About, Whoitsfor, ForInvestors, HowItWorks, Hero, PlatformFeatures, QuestionAnswer } from "@/container";
import SEOHead from "@/components/SEOHead";
import { 
	generateOrganizationSchema, 
	generateWebsiteSchema, 
	generateBreadcrumbSchema,
	generateFAQSchema,
	generateHowToSchema,
	SITE_CONFIG 
} from "@/utils/seo";

export default function Home() {

	// SEO Metadata
	const metadata = {
		title: "Katagoge | Execution Infrastructure & VC Dealflow Intelligence",
		description: "Katagoge is the execution infrastructure for early-stage startups. Founders use it to run their company, and VCs use our intelligence layer to source deals based on real execution and traction.",
		canonical: SITE_CONFIG.url,
		keywords: [
			"Katagoge",
			"startup ecosystem",
			"startup building platform",
			"execution-led traction",
			"early stage startups",
			"join startup waitlist",
			"build startup team",
			"founder team building",
			"startup contributor platform",
			"early stage deal flow"
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
				question: "What is Katagoge?",
				answer: "Katagoge is a live startup ecosystem where startups aren’t just listed — they’re actively built by real teams across roles like development, marketing, design, analytics, and business."
			},
			{
				question: "How does Katagoge connect founders and investors?",
				answer: "It connects founders, contributors, and investors in one ecosystem where execution, collaboration, and real work define visibility and opportunity."
			},
			{
				question: "How are startups evaluated on Katagoge?",
				answer: "Instead of resumes or pitch decks, people and startups are evaluated based on what they’re actually building and contributing."
			}
		]),
		generateHowToSchema([
			{ name: "Founders build their operating system", text: "Startups use Katagoge to run their daily operations, define goals, and structure their execution. It's the infrastructure where real work happens." },
			{ name: "Teams execute on milestones", text: "Every sprint, commit, and operational win is logged. The platform tracks progress natively, capturing the velocity of the startup without manual reporting." },
			{ name: "The intelligence layer analyzes traction", text: "Our systems measure execution velocity, team efficiency, and milestone completion to build a high-signal profile of the startup's health and momentum." },
			{ name: "VCs discover verified dealflow", text: "Investors tap into the intelligence layer to source startups based on actual operational data and traction, bypassing the noise of traditional pitch decks." }
		], "How Katagoge Works", "A four-step process to build startups through real execution and collaboration on the Katagoge platform.")
	];

	return (
		<>
			<SEOHead metadata={metadata} schema={schemas} />
			<Curve backgroundColor={"#f1f1f1"}>
				<main>
					<Hero />
					{/* <div className="w-full bg-marquee z-10 relative rounded-t-[20px] padding-y">
						<Marquee
							title="we are Katagoge"
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
				</main>
			</Curve>
		</>
	);
}
