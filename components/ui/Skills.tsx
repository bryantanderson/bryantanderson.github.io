"use client";

import { motion } from "framer-motion";
import React from "react";
import { slideInFromRight } from "@/utils/motion";
import { Languages, Technologies } from "@/constants/index";
import SkillImage from "../sub/SkillImage";

const Skills = () => {
	const delay: number = 0.5;
	return (
		<div
			id="skills"
			className="flex flex-col items-center justify-center py-20 pb-96"
		>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={slideInFromRight(delay)}
				className="flex flex-col justify-center items-center text-4xl h-auto w-auto"
			>
				<h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
					Skills
				</h1>
				<div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
					{Languages.map((image: any, index: number) => (
						<SkillImage
							key={image.src}
							src={image.src}
							width={image.width}
							height={image.height}
							index={index}
						/>
					))}
				</div>
				<div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
					{Technologies.map((image: any, index: number) => (
						<SkillImage
							key={image.src}
							src={image.src}
							width={image.width}
							height={image.height}
							index={index}
						/>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default Skills;
