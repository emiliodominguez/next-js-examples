import NextLink from "next/link";

const exampleRoutes = [
	{ url: "/suspense/single-element", title: "Single Element Suspense" },
	{ url: "/suspense/progressive-list-loading", title: "Progressive List Loading" },
	{ url: "/suspense/batch-list-loading", title: "Batch List Loading" }
];

export default function Page() {
	return (
		<>
			<NextLink href="/" className="link standalone">
				Go back
			</NextLink>

			<h1 className="title">Suspense Examples</h1>

			<p>
				This is a collection of examples demonstrating the use of Suspense in React. See{" "}
				<NextLink href="https://react.dev/reference/react/Suspense" target="_blank" className="link">
					React documentation
				</NextLink>{" "}
				for more information
			</p>

			<ul>
				{exampleRoutes.map((route) => (
					<li key={route.url}>
						<NextLink href={route.url} className="link standalone">
							{route.title}
						</NextLink>
					</li>
				))}
			</ul>
		</>
	);
}
