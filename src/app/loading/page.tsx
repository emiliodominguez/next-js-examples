import NextLink from "next/link";
import { delay } from "@/utilities/helpers";

export const dynamic = "force-dynamic";

export default async function Page() {
	await delay(3000);

	return (
		<>
			<NextLink href="/" className="link standalone">
				Go back
			</NextLink>

			<h1 className="title">Page loaded!</h1>

			<p>
				This is just an example page for demonstrating the loading state of a page. It will be displayed while the page resolves its data. See{" "}
				<NextLink
					href="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming"
					target="_blank"
					className="link"
				>
					Next.js documentation
				</NextLink>{" "}
				for more information.
			</p>
		</>
	);
}
