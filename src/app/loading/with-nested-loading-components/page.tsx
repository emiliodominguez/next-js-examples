import { Suspense } from "react";
import NextLink from "next/link";
import type { SlowListProps } from "@/types/slow-list";
import { delay } from "@/utilities/helpers";
import { Skeleton } from "@/components/skeleton";
import { SlowComponent } from "@/components/slow-component";

export const dynamic = "force-dynamic";

export default async function Page() {
	await delay(3000);

	return (
		<>
			<NextLink href="/" className="link standalone">
				Go back
			</NextLink>

			<h1 className="title">Page loaded!</h1>

			<SuspensefulSlowList />
		</>
	);
}

async function SuspensefulSlowList({ count = 5, baseDelayMs = 1000, useRandomDelays }: SlowListProps) {
	return Array.from({ length: count }, (_, i) => {
		const index = i + 1;
		const delayMs = useRandomDelays
			? // Random delay
			  Math.floor(Math.random() * baseDelayMs) + baseDelayMs
			: // Constant delay
			  baseDelayMs * index;

		return (
			<Suspense key={index} fallback={<Skeleton count={2} style={{ maxWidth: 400 }} />}>
				<SlowComponent delayMs={delayMs} />
			</Suspense>
		);
	});
}
