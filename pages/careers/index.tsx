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
			title: "Careers | Join Katagoge",
			description: "Join Katagoge and help build the live startup ecosystem where founders, contributors, and investors connect through real execution. Explore career opportunities.",
		canonical: `${SITE_CONFIG.url}/careers`,
		keywords: [
			"careers",
			"jobs at Katagoge",
				"startup ecosystem jobs",
				"early stage startup careers",
				"join Katagoge team",
				"work at Katagoge"
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
