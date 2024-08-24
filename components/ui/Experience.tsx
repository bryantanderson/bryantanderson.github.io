"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../sub/ExperienceCard";
import { slideInFromRight } from "@/utils/motion";

const Experience = () => {
	const delay: number = 0.75;
	const experience = [
		{
			title: "Founding Engineer",
			company: "Sindy Labs (SkyDeck Batch 18)",
			description: `[NL]
				Sindy Labs is a start-up aimed at equipping educational institutes with Artificial Intelligence.[NL]
				Sindy was admitted into UC Berkeley SkyDeck's start-up accelerator, as part of their 18th Batch. 
				It also secured pilots at some of Australia's largest universities, such as the University of Melbourne, and Monash University.[NL]
				I joined Sindy as a Founding Software Engineer, and subsequently led all backend related engineering, including DevOps and Infrastructure.
			`,
		},
		{
			title: "Graduate",
			company: "Deloitte Digital",
			description: `[NL]
				I worked briefly at Deloitte Digital as a graduate within the Digital Customer & Marketing team.[NL]
				During my tenure, I was involved in the implementation of a portal within the Salesforce platform. 
				I wrote Jest unit tests for all LWCs within the portal, achieving a coverage of 99.6%, and less than 5 uncovered lines. 
				Furthermore, I automated data collection processes from XML documents using Python scripts which led to significant time savings.
			`,
		},
		{
			title: "Software Engineer",
			company: "Unilite",
			description: `[NL]

			`
		},
		{
			title: "Software Engineering Intern",
			company: "Infosys",
			description: `[NL]
				I played the role of a Team Lead during my internship, and was responsible for managing 11 other interns.[NL]
				I developed a RAG-based application for streamlining search within 20+ page documents. The application was built
				using Flask, Pinecone, and OpenAI's GPT-4.
			`,
		},
	];
	return (
		<div
			id="experience"
			className="flex flex-col items-center justify-center w-full py-10"
		>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={slideInFromRight(delay)}
				className="flex flex-col justify-center items-center text-4xl h-auto w-auto"
			>
				<h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
					Experience
				</h1>
				<div className="flex flex-col h-full gap-5 px-10">
					{experience.map((exp, index) => (
						<ExperienceCard
							key={index}
							title={exp.title}
							company={exp.company}
							description={exp.description}
						/>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default Experience;
