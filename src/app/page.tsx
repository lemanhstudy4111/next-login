import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home(props: { login: React.ReactNode }) {
	return (
		<div className="flex flex-col justify-center">
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
				This is my work!
			</h1>
			<h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center m-5">
				Anh Le
			</h2>

			<Link href={`\login`}>
				<Button className="w-full text-base">Login</Button>
			</Link>
		</div>
	);
}
