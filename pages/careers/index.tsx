"use client";
import React from "react";
import { Curve, Ready } from "@/components";
import { CareersHero, NoVacancies } from "@/container";
import SEOHead from "@/components/SEOHead";
import { 
	generateBreadcrumbSchema,
	SITE_CONFIG 
} from "@/utils/seo";

export default function CareersPage() {

	const metadata = {
		title: "Careers | Join Snypyr",
		description: "Join our mission to build the future of Web and AI. Explore career opportunities at Snypyr and help us create visionary digital solutions.",
		canonical: `${SITE_CONFIG.url}/careers`,
		keywords: [
			"careers",
			"jobs at Snypyr",
			"software engineering jobs",
			"AI research jobs",
			"join our team",
			"work at Snypyr"
		]
	};

	const schemas = [
		generateBreadcrumbSchema([
			{ name: "Home", url: SITE_CONFIG.url },
			{ name: "Careers", url: `${SITE_CONFIG.url}/careers` }
		])
	];

	return (
		<>
			<SEOHead metadata={metadata} schema={schemas} />
			<Curve backgroundColor={"#f1f1f1"}>
				<CareersHero />
				<NoVacancies />
				<Ready />
			</Curve>
		</>
	);
}
