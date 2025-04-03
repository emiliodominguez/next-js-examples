import NextLink from "next/link";

export default function Loading() {
	return (
		<>
			<NextLink href="/" className="link standalone">
				Go back
			</NextLink>

			<h1 className="title">Loading...</h1>

			<p>This is a loading page. It will be displayed when the page component is loading.</p>
		</>
	);
}
