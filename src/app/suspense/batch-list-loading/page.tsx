import { Suspense } from "react";
import NextLink from "next/link";
import type { SlowListProps } from "@/types/slow-list";
import { delay } from "@/utilities/helpers";
import { Skeleton } from "@/components/skeleton";

export const dynamic = "force-dynamic";

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

async function DelayedSlowList({ count = 5, baseDelayMs = 3000 }: SlowListProps) {
	await delay(baseDelayMs);

	return Array.from({ length: count }, (_, i) => (
		<div key={i}>
			<p>Slow list element {i + 1}</p>
		</div>
	));
}
