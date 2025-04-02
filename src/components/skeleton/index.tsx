import { className } from "@/utilities/react";
import styles from "./skeleton.module.scss";

type BoneType = "text" | "image" | "avatar" | "card";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
	count: number;
	type?: BoneType;
	inline?: boolean;
}

export function Skeleton({ type = "text", count, inline, ...props }: SkeletonProps) {
	return (
		<div
			{...props}
			{...className(styles["skeleton"], props.className)}
			style={{
				display: "flex",
				flexDirection: inline ? "row" : "column",
				gap: "0.25rem",
				...props.style
			}}
		>
			{Array.from({ length: count }, (_, index) => (
				<Bone key={index} type={type} />
			))}
		</div>
	);
}

interface BoneProps extends React.HTMLAttributes<HTMLDivElement> {
	type?: BoneType;
}

export function Bone({ type = "text" }: BoneProps) {
	return <div {...className(styles["bone"], styles[type])} />;
}
