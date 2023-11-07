import { Sidebar } from "./sidebar/Sidebar";
import { PropsWithChildren } from "react";


export default function LayoutClient ({ children }: PropsWithChildren<unknown>) {
	return (
		<main>
			<Sidebar />

			<section>{children}</section>
		</main>
	)
}
