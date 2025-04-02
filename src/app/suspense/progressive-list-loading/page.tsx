import NextLink from "next/link";
import { SuspensefulSlowList } from "@/components/slow-list";

export default function Page() {
	return (
		<>
			<NextLink href="/suspense" className="link standalone">
				Go back
			</NextLink>

			<h2 className="title">Progressive Item Loading</h2>

			<p>
				Illustrates loading a list of items progressively, with each item wrapped in its own <b>Suspense</b> boundary
			</p>

			<SuspensefulSlowList />
		</>
	);
}
