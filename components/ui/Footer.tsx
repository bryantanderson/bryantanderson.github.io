"use client";

import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";

const Footer = () => {
    const delay: number = 0.25;
    const linkedInUrl: string = "https://linkedin.com/in/bciputra/"
	return (
		<div
			id="connect"
			className="flex flex-row items-center justify-center pb-20"
		>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={slideInFromLeft(delay)}
				className="flex flex-col justify-center items-center w-full h-full bg-transparent text-gray-200"
			>
				<h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
					Connect with me!
				</h1>
				<div className="w-full flex flex-col items-center justify-center m-auto">
					<div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
						<div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
							<a href={linkedInUrl} target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
								<FaLinkedin />
								<span className="text-[15px] ml-[6px]">
									LinkedIn
								</span>
							</a>
							<a className="flex flex-row items-center my-[15px] cursor-pointer">
								<RxGithubLogo />
								<span className="text-[15px] ml-[6px]">
									GitHub
								</span>
							</a>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Footer;
