import { Suspense } from "react";
import NextLink from "next/link";
import { SlowComponent } from "@/components/slow-component";
import { Skeleton } from "@/components/skeleton";

export default function Page() {
	return (
		<>
			<NextLink href="/suspense" className="link standalone">
				Go back
			</NextLink>

			<h1 className="title">Single Element Example</h1>

			<Suspense fallback={<Skeleton count={2} style={{ maxWidth: 700 }} />}>
				<SlowComponent>
					{(delay) => (
						<>
							<h3>This is a slow component that takes {delay / 1000} seconds to load.</h3>

							<p>
								Since this component is wrapped with <b>Suspense</b>, the fallback UI will be displayed until it is fully loaded.
							</p>
						</>
					)}
				</SlowComponent>
			</Suspense>
		</>
	);
}
