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
		title: "Crossgaze | Live Startup Ecosystem & Execution Engine",
		description: "Crossgaze is a live startup ecosystem where startups are actively built by real teams. Join the waitlist to connect founders, contributors, and investors through execution, collaboration, and real work.",
		canonical: SITE_CONFIG.url,
		keywords: [
			"Crossgaze",
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
				question: "What is Crossgaze?",
				answer: "Crossgaze is a live startup ecosystem where startups aren’t just listed — they’re actively built by real teams across roles like development, marketing, design, analytics, and business."
			},
			{
				question: "How does Crossgaze connect founders and investors?",
				answer: "It connects founders, contributors, and investors in one ecosystem where execution, collaboration, and real work define visibility and opportunity."
			},
			{
				question: "How are startups evaluated on Crossgaze?",
				answer: "Instead of resumes or pitch decks, people and startups are evaluated based on what they’re actually building and contributing."
			}
		]),
		generateHowToSchema([
			{ name: "A founder creates a startup", text: "Not a listing. A live project with defined roles, goals, and a team structure. The startup exists to be built — not to collect followers." },
			{ name: "Contributors apply by role", text: "Developers, marketers, analysts, designers, and business contributors request to join based on what the startup actually needs. Every role counts." },
			{ name: "Work happens in the open", text: "Milestones are tracked. Contributions are logged. Execution builds each startup's visibility — not follower counts or pitch scores." },
			{ name: "Investors see what's real", text: "Deal flow surfaces through activity. Investors watch teams execute, assess team depth, and reach out when the signal is right." }
		], "How Crossgaze Works", "A four-step process to build startups through real execution and collaboration on the Crossgaze platform.")
	];

	return (
		<>
			<SEOHead metadata={metadata} schema={schemas} />
			<Curve backgroundColor={"#f1f1f1"}>
				<main>
					<Hero />
					{/* <div className="w-full bg-marquee z-10 relative rounded-t-[20px] padding-y">
						<Marquee
							title="we are Crossgaze"
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
