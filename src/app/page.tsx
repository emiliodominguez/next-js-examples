import NextLink from "next/link";

const exampleRoutes = [
	{ url: "/loading", title: "Loading" },
	{ url: "/suspense", title: "Suspense" }
];

export default function Page() {
	return (
		<div>
			<h1 className="title">Next.js examples</h1>

			<ul>
				{exampleRoutes.map((route) => (
					<li key={route.url}>
						<NextLink href={route.url} className="link standalone">
							{route.title}
						</NextLink>
					</li>
				))}
			</ul>
		</div>
	);
}
