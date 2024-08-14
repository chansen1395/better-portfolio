// src/StyledButton.jsx
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const Button = styled.button`
	background-color: #007bff;
	color: white;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: #0056b3;
	}
`;

export const CardButton = styled.button`
	background-color: rgb(217, 233, 255);
	color: gray;
	border: none;
	padding: 0.5rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;

	&:hover {
		background-color: rgb(194 220 255);
		color: white;
	}
`;
