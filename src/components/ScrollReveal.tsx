import React from "react";
import { useInView } from "../hooks/useInView";

interface ScrollRevealProps {
	children: React.ReactNode;
	className?: string;
	direction?: "up" | "left";
	delay?: number;
}

export default function ScrollReveal({
	children,
	className = "",
	direction = "up",
	delay = 0,
}: ScrollRevealProps) {
	const { ref, isInView } = useInView({ threshold: 0.1, once: true });

	const baseClass = direction === "left" ? "reveal-left" : "reveal";

	return (
		<div
			ref={ref}
			className={`${baseClass} ${isInView ? "visible" : ""} ${className}`}
			style={delay ? { transitionDelay: `${delay}ms` } : undefined}
		>
			{children}
		</div>
	);
}
