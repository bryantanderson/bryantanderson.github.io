import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const TransparentDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const options = [
        {
            label: "About Me",
            id: "about"
        },
        {
            label: "Experience",
            id: "experience",
        },
        {
            label: "Education",
            id: "education",
        },
        {
            label: "Skills",
            id: "skills",
        }
    ];

	const optionVariants = {
		hidden: { opacity: 0, y: -5 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.2 },
		},
	};

    const handleOptionClick = (id: string) => {
        setIsOpen(false);
        const elementToNavigateTo = document.getElementById(id);
        if (elementToNavigateTo) {
            elementToNavigateTo.scrollIntoView({ behavior: "smooth" })
        }
    }

	return (
		<div className="relative inline-block">
			<motion.button
				className="px-4 py-2 bg-transparent border border-purple-500 text-white rounded-md focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				Learn More
			</motion.button>
			{isOpen && (
				<ul className="absolute mt-2 w-full bg-opacity-80 backdrop-blur-sm rounded-md shadow-lg overflow-hidden">
					{options.map((option) => (
						<motion.ul
							key={option.label}
                            onClick={() => handleOptionClick(option.id)}
                            variants={optionVariants}
							className="px-4 py-2 bg-transparent hover:bg-purple-500 cursor-pointer text-white transition-colors"
						>
							{option.label}
						</motion.ul>
					))}
				</ul>
			)}
		</div>
	);
};

export default TransparentDropdown;
