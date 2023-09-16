import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import InputForm from "@/components/ui/LoginForm";

export default function CardWithForm() {
	return (
		<Card
			className="w-[500px]"
			style={{ height: "fit-content", alignSelf: "center" }}
		>
			<CardHeader className="flex justify-content-center">
				<CardTitle className="text-center text-3xl pt-5">Sign in</CardTitle>
				<CardDescription className="text-center m-0 p-[11px]">
					to continue to MeetYourClass
				</CardDescription>
			</CardHeader>
			<CardContent>
				<InputForm />
			</CardContent>
			<CardFooter></CardFooter>
		</Card>
	);
}
