"use client";

import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import EducationCard from "../sub/EducationCard";

const Education = () => {
	const delay: number = 0.5;

	const education = [
		{
			title: "Berkeley SkyDeck, Batch 18",
			institute:
				"University of California, Berkeley, Haas School of Business",
		},
		{
			title: "Bachelor of Science, major in Computing and Software Systems",
			institute: "University of Melbourne",
		},
		{
			title: "Foundational Studies",
			institute: "Trinity College, University of Melbourne",
		},
	];

	return (
		<div
			id="education"
			className="flex flex-col items-center justify-center py-20"
		>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={slideInFromLeft(delay)}
				className="flex flex-col justify-center items-center text-4xl h-auto w-auto"
			>
				<h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
					Education
				</h1>
				<div className="flex flex-col h-full gap-5 px-10">
					{education.map((edu, index) => (
						<EducationCard
							key={index}
							title={edu.title}
							institute={edu.institute}
						/>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default Education;
