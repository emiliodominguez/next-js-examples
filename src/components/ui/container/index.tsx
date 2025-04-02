import { createElement } from "react";
import { className } from "@/utilities/react";
import styles from "./container.module.scss";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
	tag?: keyof React.JSX.IntrinsicElements;
}

export function Container({ tag, ...props }: ContainerProps) {
	return createElement(tag ?? "div", { ...props, ...className(styles["container"], props.className) });
}
