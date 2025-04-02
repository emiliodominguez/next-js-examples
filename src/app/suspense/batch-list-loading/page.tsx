import { Suspense } from "react";
import NextLink from "next/link";
import { DelayedSlowList } from "@/components/slow-list";
import { Skeleton } from "@/components/skeleton";

export default function Page() {
	const listElementsCount = 10;

	return (
		<>
			<NextLink href="/suspense" className="link standalone">
				Go back
			</NextLink>

			<h2 className="title">Batch List Loading</h2>

			<p>Shows how to delay rendering an entire list until all items are ready, simulating batch loading behavior</p>

			<Suspense fallback={<Skeleton count={listElementsCount} style={{ maxWidth: 150 }} />}>
				<DelayedSlowList count={listElementsCount} />
			</Suspense>
		</>
	);
}
