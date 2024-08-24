import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/ui/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Bryant's website",
	description: "Bryant's portfolio website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
			>
				<StarsCanvas />
				{children}
			</body>
		</html>
	);
}
