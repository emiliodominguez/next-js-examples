import { delay } from "@/utilities/helpers";

interface SlowComponentProps {
	children?: React.ReactNode | ((delay: number) => React.ReactNode);
	delayMs?: number;
}

export async function SlowComponent({ children, delayMs = 3000 }: SlowComponentProps) {
	await delay(delayMs);

	if (children) {
		if (typeof children === "function") {
			return children(delayMs);
		}

		return children;
	}

	return (
		<div>
			<h3>Slow Component</h3>
			<p>This is a slow component that takes {delayMs / 1000} seconds to load.</p>
		</div>
	);
}
