"use client";

import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { LinkedInImage } from "@/constants/index";

const AboutMe = () => {
	const delay: number = 0.5;
	const linkedInUrl: string = "https://www.linkedin.com/in/bciputra/";
	const aboutMeText: string = `
		I enjoy using software to build solutions to real-world problems.[NL]
		I have a passion for learning, and I believe that the most important part of any endeavor is growth.[NL]
		I was first exposed to the start-up world at age 19, and I've been obsessed ever since.[NL]
		I also have an interest in working with large, distributed systems, and thinking about scale.
	`;
	const quote: string =
		"If you only do what you can do, you will never be more than you are";
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
				<div className="flex flex-col justify-center items-center text-lg text-gray-300 max-w-[900px]">
					{aboutMeText.split("[NL]").map((text, index) => (
						<p key={text + index}>{text}</p>
					))}
					<br></br>
				</div>
				<p className="text-lg text-gray-300 italic">{quote}</p>
				<a href={linkedInUrl} className="py-10">
					<img
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
