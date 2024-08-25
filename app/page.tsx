import AboutMe from "@/components/ui/AboutMe";
import Education from "@/components/ui/Education";
import Experience from "@/components/ui/Experience";
import { Hero } from "@/components/ui/Hero";
import Skills from "@/components/ui/Skills";

export default function Home() {
	return (
		<main className="h-full w-full ">
			<div className="flex flex-col gap-y-72">
				<Hero />
				<AboutMe />
				<Experience />
				<Education />
				<Skills />
			</div>
		</main>
	);
}
