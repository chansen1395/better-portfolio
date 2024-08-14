import React from "react";
import styled from "@emotion/styled";

interface CardProps {
	title: string;
	children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
	return (
		<CardContainer>
			<CardTitle>{title}</CardTitle>
			<CardContent>{children}</CardContent>
		</CardContainer>
	);
};

const CardContainer = styled.div`
	width: auto;
	// background-color: #ededed;
	background-color: #f1f1f1;
	border-radius: 1rem;

	padding: 1rem;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	margin-bottom: 1rem;
	transition: box-shadow 0.3s ease;

	&:hover {
		box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
	}
`;

const CardTitle = styled.h2`
	margin: 0;
	font-size: 1.5rem;
	color: #333;
`;

const CardContent = styled.div`
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
	margin-top: 10px;
	background: white;
	border-radius: 1rem;
	padding: 1rem;
`;

export default Card;
