"use client";

import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const Education = () => {
	const delay: number = 1;
	
	return (
		<div
			id="education"
			className="flex flex-col items-center justify-center py-20"
		>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={slideInFromLeft(delay)}
				className="flex flex-col justify-center items-center text-4xl h-auto w-auto"
			>
				<h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
					Education
				</h1>
				<div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
					Hello
				</div>
			</motion.div>
		</div>
	);
};

export default Education;
