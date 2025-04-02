import { Suspense } from "react";
import NextLink from "next/link";
import type { SlowListProps } from "@/types/slow-list";
import { Skeleton } from "@/components/skeleton";
import { SlowComponent } from "@/components/slow-component";

export const dynamic = "force-dynamic";

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
