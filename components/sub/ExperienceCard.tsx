import React from "react";

interface Props {
	title: string;
	company: string;
	description: string;
}

const ExperienceCard = ({ title, company, description }: Props) => {
	return (
		<div className="flex flex-col w-auto max-w-[900px] my-3">
			<h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
				{title}
			</h1>
			<h3 className="text-xl text-gray-400">{company}</h3>
			<div className="text-lg text-gray-300">
				{description.split("[NL]").map((text) => {
					return (
						<>
							<p key={text}>{text}</p>
							<br></br>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default ExperienceCard;
