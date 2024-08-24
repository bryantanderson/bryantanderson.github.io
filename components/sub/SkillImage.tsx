"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
	src: string;
	width: number;
	height: number;
	index: number;
}

const SkillImage = ({ src, width, height, index }: Props) => {
	const imageVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};
	const animationDelay: number = 0.2;
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			custom={index}
			viewport={{ once: true }}
			variants={imageVariants}
			transition={{ delay: index * animationDelay }}
		>
			<Image src={src} width={width} height={height} alt="skill" />
		</motion.div>
	);
};

export default SkillImage;
