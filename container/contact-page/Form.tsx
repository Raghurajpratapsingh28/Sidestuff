"use client";
import Link from "next/link";
import { RoundButton } from "@/components";
import { useState } from "react";

export default function Form() {
    const [services, setServices] = useState<string[]>([]);

    const toggleService = (service: string) => {
        if (services.includes(service)) {
            setServices(services.filter((s) => s !== service));
        } else {
            setServices([...services, service]);
        }
    };

    const serviceOptions = [
        "Web Development",
        "App Development",
        "AI Agents",
        "Blockchain",
        "Smart Contracts",
        "DevOps",
    ];

	return (
		<section className="w-full padding-x padding-y">
			<div className="w-full flex flex-col gap-[15px]">
				<div className="w-full flex gap-[15px] sm:flex-col xm:flex-col">
					<div className="flex gap-[10px] w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								Hi! My name is
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="Enter your name*"
								className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out sm:w-full xm:w-full"
							/>
						</div>
					</div>
					<div className="flex gap-[10px] w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								and I work with
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="Company name type here*"
								className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out sm:w-full xm:w-full"
							/>
						</div>
					</div>
				</div>
				<div className="w-full flex flex-col gap-[10px]">
                    <div className="xl:min-w-max lg:min-w-max md:min-w-max">
                        <h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
                            I’m looking for a partner to help me with
                        </h2>
                    </div>
                    <div className="w-full flex flex-wrap gap-4 mt-2 mb-2">
                        {serviceOptions.map((service) => (
                            <button
                                key={service}
                                onClick={() => toggleService(service)}
                                className={`px-5 py-2 rounded-full border border-[#212121] font-NeueMontreal text-sm uppercase transition-all duration-300 ${
                                    services.includes(service)
                                        ? "bg-[#212121] text-white"
                                        : "bg-transparent text-[#212121] hover:bg-[#21212111]"
                                }`}
                            >
                                {service}
                            </button>
                        ))}
                    </div>
					<div className="w-full">
						<input
							type="text"
							placeholder="Describe your project goal (e.g., DeFi Platform, AI Agent, Mobile App)..."
							className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[10px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
						/>
					</div>
				</div>
				<div className="w-full flex gap-[10px]">
					<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								With an idea of having that completed
							</h2>
						</div>
						<div className="w-full relative">
							<input
								type="text"
								placeholder="Date*"
								className="paragraph font-NeueMontreal font-normal text-secondry bg-transparent border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full cursor-pointer appearance-none uppercase"
								onFocus={(e) => (e.target.type = "date")}
								onBlur={(e) => {
									if (!e.target.value) e.target.type = "text";
								}}
							/>
						</div>
					</div>
				</div>
				<div className="w-full flex gap-[10px]">
					<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								I am hoping to stay around a budget range of
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="Select*"
								className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
							/>
						</div>
					</div>
				</div>
				<div className="w-full flex gap-[10px]">
					<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								You can reach me at
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="name@example.com"
								className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
							/>
						</div>
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								to start the conversation.
							</h2>
						</div>
					</div>
				</div>
				<div className="w-full flex gap-[10px]">
					<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								Optionally, i’m sharing more:
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="Product details type here..."
								className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex items-center justify-end sm:justify-start xm:justify-start pt-[50px]">
				<div className="flex sm:flex-col xm:flex-col gap-[25px]">
					<div className="flex gap-[10px] items-center">
						<div className="flex gap-[10px]">
							<input
								type="checkbox"
								className="w-[30px]"
							/>
							<p className="paragraph text-secondry font-NeueMontreal font-normal">
								I agree with the
							</p>
						</div>
						<Link
							className="paragraph font-medium font-NeueMontreal text-secondry capitalize flex flex-col hover"
							href={"/privacy"}>
							Privacy Policy
						</Link>
					</div>
					<div className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
						<RoundButton
							bgcolor="#212121"
							href="/"
							title="send inquiry"
							className="bg-white text-black"
							style={{ color: "#fff" }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
