import React from "react";

interface Props {
	title: string;
	institute: string;
}

const EducationCard = ({ title, institute }: Props) => {
	return (
		<div className="flex flex-col w-auto max-w-[900px] my-3">
			<h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">{institute}</h1>
            <h3 className="text-xl text-gray-400">{title}</h3>
		</div>
	);
};

export default EducationCard;
