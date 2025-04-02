import { Suspense } from "react";
import { SlowComponent } from "../slow-component";
import { delay } from "@/utilities/helpers";
import { Skeleton } from "../skeleton";

interface SlowListProps {
	count?: number;
	baseDelayMs?: number;
	useRandomDelays?: boolean;
}

export async function SuspensefulSlowList({ count = 5, baseDelayMs = 1000, useRandomDelays }: SlowListProps) {
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

export async function DelayedSlowList({ count = 5, baseDelayMs = 3000 }: SlowListProps) {
	await delay(baseDelayMs);

	return Array.from({ length: count }, (_, i) => (
		<div key={i}>
			<p>Slow list element {i + 1}</p>
		</div>
	));
}
