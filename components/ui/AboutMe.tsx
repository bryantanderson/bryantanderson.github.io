"use client";

import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { LinkedInImage } from "@/constants/index";

const AboutMe = () => {
	const delay: number = 0.5;
	const linkedInUrl: string = "https://www.linkedin.com/in/bciputra/";

	return (
		<div
			id="about"
			className="flex flex-row items-center justify-center py-20"
		>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
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
				<a href={linkedInUrl} className="py-10">
					<Image
						src={LinkedInImage.src}
						height={LinkedInImage.height}
						width={LinkedInImage.width}
						alt="linked-in-icon"
					/>
				</a>
			</motion.div>
		</div>
	);
};

export default AboutMe;
