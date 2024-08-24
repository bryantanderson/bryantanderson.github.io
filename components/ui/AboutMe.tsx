"use client";

import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const AboutMe = () => {
	const delay: number = 0.5;

	return (
		<div
			id="about"
			className="flex flex-row items-center justify-center py-20"
		>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={slideInFromLeft(delay)}
				className="flex flex-col justify-center items-center text-4xl h-auto w-auto"
			>
				<h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
					About Me
				</h1>

				<p className="text-lg text-gray-300">
					I'm super passionate about using technology (especially
					software!) to solve real-world problems.
				</p>
			</motion.div>
		</div>
	);
};

export default AboutMe;
