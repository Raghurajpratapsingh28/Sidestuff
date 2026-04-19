"use client";
import React from "react";
import { RoundButton } from "@/components";

export default function NoVacancies() {
	return (
		<section className="w-full py-[100px] padding-x bg-[#f1f1f1] flex flex-col items-center justify-center text-center">
			<div className="w-full max-w-[800px] border-t border-[#21212133] pt-[50px]">
				<h2 className="sub-heading font-FoundersGrotesk uppercase text-[#212121]">
					Current Openings
				</h2>
				<div className="mt-[50px] p-[40px] border border-dashed border-[#21212133] rounded-[20px]">
					<h3 className="paragraph font-FoundersGrotesk uppercase font-bold text-[#212121]">
						No Vacancies at the Moment
					</h3>
					<p className="paragraph font-NeueMontreal text-secondry mt-[20px]">
						While we don&apos;t have any open positions right now, we&apos;re always interested in meeting talented people. Tell us what you&apos;re great at, and we&apos;ll keep you in mind for future opportunities.
					</p>
					<div className="mt-[40px] flex justify-center">
						<RoundButton
							title="Connect with us"
							href="mailto:info@sidestuff.io"
							bgcolor="#212121"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
