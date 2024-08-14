import { useState } from "react";
import "./App.css";
import AppHeader from "./shared/components/appHeader";
import styled from "@emotion/styled";
import Card from "./shared/components/card";
import ContactUs from "./shared/components/contactForm";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { Button } from "../src/shared/components/button";

function App() {
	const [count, setCount] = useState(0);

	return (
		<AppContainer>
			<AppHeader></AppHeader>
			<PageOverview>
				<NameHeader>Connor M. Hansen</NameHeader>
				<EducationHeader>B.A. Economics</EducationHeader>
			</PageOverview>
			{/* ☎ ✉ */}
			<ContentContainer>
				<SideColumn>
					<Card title={"Links"}>
						<SmallerUL>
							<li>
								<a href="https://www.linkedin.com/in/connor--hansen/">
									LinkedIn
								</a>
							</li>
							<li>
								<a href="https://github.com/chansen1395">
									GitHub
								</a>
							</li>
							<li>
								<a href="https://github.com/chansen1395/Blackjack.Solution">
									Blackjack
								</a>
							</li>
							<li>
								<a href="https://github.com/chansen1395/GardenTeamWeek">
									Little Green Squares
								</a>
							</li>
						</SmallerUL>
					</Card>

					<Card title={"Professional Skills"}>
						<SmallerUL>
							<li>JavaScript/TypeScript</li>
							<li>SQL</li>
							<li>C#/.Net</li>
							<li>React</li>
							<li>HTML/CSS</li>
							<li>Express.js</li>
							<li>Docker</li>
							<li>Python</li>
							<li>Tableau</li>
							<li>Generative AI</li>
						</SmallerUL>
					</Card>
					<Card title={"Publications & Projects"}>
						<SmallerUL>
							<li>
								<a href="https://facilitycyber.labworks.org/">
									Facility Cybersecurity Framework
								</a>
							</li>
							<li>
								<a href="https://water-balance.labworks.org/accounts/sign_in">
									FEMP Water Balance Tool
								</a>
							</li>
							<li>
								<a href="https://www.georgefox.edu/template/interior/newberg/img/economic-impact-study.pdf">
									Committed to Serving Our Community
								</a>
							</li>
						</SmallerUL>
					</Card>
					{/* <Projects>Projects</Projects> */}
					<Card title={"Volunteer History"}>
						<SmallerUL>
							<li>
								<OrgName>Newberg Planning Commission</OrgName>
								<Attended>Jan. 2021 - Sept. 2022</Attended>
							</li>
						</SmallerUL>
					</Card>
					<Card title={"Hobbies & Interests"}>
						<SmallerUL>
							<li>Investing</li>
							<li>Pottery</li>
							<li>Travel</li>
							<li>Backpacking/Camping</li>
							<li>Landscaping</li>
							<li>Numismatics/restoring ancient coins</li>
							<li>Dungeon Master - Dungeons & Dragons</li>
						</SmallerUL>
					</Card>
				</SideColumn>
				<CenterColumn>
					<Card title={"Summary"}>
						PNNL Software Engineer 1 possessing coding, research,
						and problem-solving skills. Committed to delivering
						high-quality contributions and upholding high standards.
						Driven by curiosity, challenges, and skill-advancing
						opportunities.
					</Card>
					<Card title={"Education"}>
						<div>
							<NameDateContainer>
								<OrgName>Epicodus</OrgName>
								<Attended>Aug. 2021 - Jan. 2022</Attended>
							</NameDateContainer>

							<Description>
								Full-stack Web & Mobile Development Certificate
							</Description>
							<ul>
								<li>Full-time pair-programming</li>
								<li>
									Dozens of projects in several languages,
									increasing in complexity and functionality
								</li>
								<li>3-month internship following graduation</li>
							</ul>
						</div>
						<HorizontalLine />
						<div>
							<NameDateContainer>
								<OrgName>George Fox University</OrgName>
								<Attended>2013 - 2017</Attended>
							</NameDateContainer>
							<Description>
								Bachelor's Degree, Economics GPA: 3.72 Magna Cum
								Laude
							</Description>
							<ul>
								<li>
									Minors in Finance and Information Systems
								</li>
								<li>
									Completed an Economic Impact Study for
									George Fox University under faculty
									direction
								</li>
							</ul>
						</div>
					</Card>
					<Card title={"Employment History"}>
						<div>
							<NameDateContainer>
								<OrgName>
									PNNL - Pacific Northwest National Laboratory
								</OrgName>
								<Attended>April 2022 - Present</Attended>
							</NameDateContainer>
							<Description>Software Engineer 1</Description>
							<Attended>Richland, WA</Attended>
							<ul>
								<li>
									React, JavaScript/TypeScript, C#, Python,
									Generative AI
								</li>
								<li>
									Contributed to an R&D 100 finalist project
									in the Software/Services category in 2022
								</li>
								<li>
									Technical lead developer on project (1 year)
								</li>
							</ul>
						</div>
						<HorizontalLine />
						<div>
							<NameDateContainer>
								<OrgName>Fusion Marketing</OrgName>
								<Attended>Mar. 2019 - Aug. 2021</Attended>
							</NameDateContainer>
							<Description>
								Operations Coordinator, Farm Manager
							</Description>
							<Attended>Newberg, OR</Attended>
							<ul>
								<li>
									Automation of label-making, saving 100+
									hours of labor per year
								</li>
								<li>Sales analysis/forecasting & reporting</li>
								<li>
									Coordinate between vendors, suppliers, &
									buyers.
								</li>
								<li>Project Manager</li>
							</ul>
						</div>
						<HorizontalLine />
						<div>
							<NameDateContainer>
								<OrgName>George Fox University</OrgName>
								<Attended>May 2015 - Sept. 2017</Attended>
							</NameDateContainer>

							<Description>
								Events Coordinator and Conference Manager
							</Description>
							<Attended>Newberg, OR</Attended>

							<ul>
								<li>
									Customer service, hospitality work during
									summers, delivering equipment/setting up
									events, graduation ceremonies, and
									conferences
								</li>
								<li>
									Supervised, delegated, and coordinated
									between 5-15 students
								</li>
							</ul>
						</div>
					</Card>
				</CenterColumn>
				<SideColumn>
					<Card title={"Contact Connor"}>
						<ContactUs />
					</Card>
					<Card title={"Coming Soon:"}>
						Features, easter eggs, games!
					</Card>
				</SideColumn>
			</ContentContainer>
			{/* <div>
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
				<Button>hi</Button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p> */}
		</AppContainer>
	);
}

const AppContainer = styled.div``;
const PageOverview = styled.div``;
const SmallerUL = styled.ul`
	padding-inline-start: 1rem;
	margin: 0;
`;
const ContentContainer = styled.div`
	display: flex;
	gap: 1rem;
	flex-direction: row;
	text-align: left;
`;
const NameDateContainer = styled.div`
	display: inline-flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
`;
const SideColumn = styled.div`
	display: flex;
	flex: 25%;
	flex-direction: column;
	text-align: left;
	overflow-wrap: anywhere;
`;
const NameHeader = styled.div`
	font-size: 32pt;
`;
const EducationHeader = styled.div`
	font-size: 24pt;
	color: gray;
`;
const SubHeader = styled.h3`
	font-size: 18pt;
`;
const OrgName = styled.div`
	align-items: right;
	font-size: 14pt;
`;
const Attended = styled.div`
	justify-self: right;
	color: gray;
`;
const Description = styled.div`
	font-size: 14pt;
`;

const HorizontalLine = styled.hr`
	border-color: #bdb9fa;
	border-block-end-color: #cacaed;
	border-block-start-color: #d2eaf1;
	border-width: medium;
	opacity: 33%;
`;

const CenterColumn = styled.div`
	display: flex;
	width: 50%;
	flex-direction: column;
	// overflow: auto;
	overflow-wrap: break-word;
`;

export default App;
