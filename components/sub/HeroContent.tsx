"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/outline";
import TransparentDropdown from "./TransparentDropdown";

// This component uses framer motion, which uses React hooks under the hood.
// React hooks can only be used in CLIENT components.
export const HeroContent = () => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className="flex flex-row item-center justify-center px-20 mt-40 w-full z-[20]"
		>
			<div className="h-full w-full flex flex-col gap-5 justify-content m-auto text-start">
				<motion.div
					variants={slideInFromTop}
					className="Welcome-box py-[8px] px-[4px] border-[#7042f88b] opacity-[0.9]"
				>
					<SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
				</motion.div>

				<motion.div
					variants={slideInFromLeft(0.5)}
					className="flex flex-col gap-6 mt-6 text-4xl font-bold text-white max-w-[600px] w-auto h-auto"
				>
					<span>
						Hi, my name is
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
							{" "}
							Bryant Ciputra
						</span>
					</span>
				</motion.div>
				<motion.p
					variants={slideInFromLeft(0.8)}
					className="text-lg text-gray-400 my-5 max-w-[600px]"
				>
					I'm a backend focused software engineer with a passion for
					solving problems and building start-ups
				</motion.p>
				<motion.div className="flex flex-row" variants={slideInFromLeft(1)}>
					<TransparentDropdown />
				</motion.div>
			</div>
		</motion.div>
	);
};
