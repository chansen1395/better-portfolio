import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import StyledButton from "../src/shared/components/button";
import "./App.css";
import AppHeader from "./shared/components/appHeader";
import styled from "@emotion/styled";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<AppHeader></AppHeader>
			<PageOverview>Overview</PageOverview>
			<ContentContainer>
				<LeftColumn>
					<Links>Links</Links>
					<ProfessionalSkills>Professional Skills</ProfessionalSkills>
					<Publications>Publications</Publications>
					<Projects>Projects</Projects>
					<VolunteerHistory>Volunteer History</VolunteerHistory>
					<HobbiesInterests>Hobbies Interests</HobbiesInterests>
				</LeftColumn>
				<RightColumn>
					<Summary>Summary</Summary>
					<Education>Education</Education>
					<EmploymentHistory>EmploymentHistory</EmploymentHistory>
					<Projects>Projects</Projects>
				</RightColumn>
			</ContentContainer>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<StyledButton>hi</StyledButton>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

const PageOverview = styled.div``;
const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
`;
const LeftColumn = styled.div`
	display: flex;
	flex-direction: column;
`;
const Links = styled.div``;
const ProfessionalSkills = styled.div``;
const Publications = styled.div``;
const Projects = styled.div``;
const VolunteerHistory = styled.div``;
const HobbiesInterests = styled.div``;
const RightColumn = styled.div`
	display: flex;
	flex-direction: column;
`;
const Summary = styled.div``;
const Education = styled.div``;
const EmploymentHistory = styled.div``;

export default App;
