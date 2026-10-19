import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import ScrollReveal from "../components/ScrollReveal";
import { about, education, experience, skills, social } from "../data/content";

export default function ResumePage() {
	return (
		<>
			<Header>
				<div className="container">
					<ScrollReveal>
						<PageLabel>Resume</PageLabel>
						<PageTitle>Experience and background</PageTitle>
						<PageIntro>{about.intro}</PageIntro>
						<HeaderActions className="no-print">
							<PrimaryAction to="/projects">
								View projects
							</PrimaryAction>
							<SecondaryAction href={`mailto:${social.email}`}>
								Email me
							</SecondaryAction>
							<PrintAction type="button" onClick={() => window.print()}>
								Save as PDF
							</PrintAction>
						</HeaderActions>
					</ScrollReveal>
				</div>
			</Header>

			<Section>
				<div className="container">
					<ScrollReveal>
						<SectionLabel>Experience</SectionLabel>
					</ScrollReveal>

					<Timeline>
						{experience.map((job, index) => (
							<ScrollReveal key={job.company} delay={index * 60}>
								<TimelineEntry>
									<TimelineDot />
									<TimelineMeta>
										<TimelinePeriod>
											{job.period}
										</TimelinePeriod>
										<TimelineLocation>
											{job.location}
										</TimelineLocation>
									</TimelineMeta>
									<TimelineBody>
										<TimelineCompany>
											{job.company}
										</TimelineCompany>
										<TimelineTitle>
											{job.title}
										</TimelineTitle>
										<HighlightList>
											{job.highlights.map((highlight) => (
												<li key={highlight}>
													{highlight}
												</li>
											))}
										</HighlightList>
									</TimelineBody>
								</TimelineEntry>
							</ScrollReveal>
						))}
					</Timeline>
				</div>
			</Section>

			<Section>
				<div className="container">
					<ResumeGrid>
						<ResumeColumn>
							<ScrollReveal>
								<SectionLabel>Technical Skills</SectionLabel>
							</ScrollReveal>
							<SkillsGrid>
								{skills.map((category, index) => (
									<ScrollReveal
										key={category.label}
										delay={index * 50}
									>
										<SkillGroup>
											<SkillCatLabel>
												{category.label}
											</SkillCatLabel>
											<SkillItems>
												{category.items.map((item) => (
													<SkillTag key={item}>
														{item}
													</SkillTag>
												))}
											</SkillItems>
										</SkillGroup>
									</ScrollReveal>
								))}
							</SkillsGrid>
						</ResumeColumn>

						<ResumeColumn>
							<ScrollReveal delay={60}>
								<SectionLabel>Education</SectionLabel>
							</ScrollReveal>
							<EducationGrid>
								{education.map((entry, index) => (
									<ScrollReveal
										key={entry.institution}
										delay={index * 60 + 60}
									>
										<EduCard>
											<EduPeriod>
												{entry.period}
											</EduPeriod>
											<EduInstitution>
												{entry.institution}
											</EduInstitution>
											<EduDegree>
												{entry.degree}
											</EduDegree>
											{entry.details && (
												<EduDetails>
													{entry.details.map(
														(detail) => (
															<li key={detail}>
																{detail}
															</li>
														),
													)}
												</EduDetails>
											)}
										</EduCard>
									</ScrollReveal>
								))}
							</EducationGrid>
						</ResumeColumn>
					</ResumeGrid>
				</div>
			</Section>

			<Section>
				<div className="container container--narrow">
					<ScrollReveal>
						<SectionLabel>Background</SectionLabel>
					</ScrollReveal>
					<ScrollReveal>
						<StoryBlock>{about.journey}</StoryBlock>
					</ScrollReveal>
					<ScrollReveal delay={60}>
						<StoryBlock $muted>{about.personal}</StoryBlock>
					</ScrollReveal>
				</div>
			</Section>
		</>
	);
}

const actionStyles = `
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: var(--space-3) var(--space-8);
	font-size: var(--text-sm);
	font-weight: 600;
	letter-spacing: var(--tracking-normal);
	border-radius: var(--radius-md);
	text-decoration: none;
	transition:
		background var(--dur-base) ease,
		color var(--dur-base) ease,
		box-shadow var(--dur-base) ease,
		border-color var(--dur-base) ease;
`;

const Header = styled.header`
	padding: var(--space-12) 0 var(--space-6);
	border-bottom: 1px solid var(--color-border);
`;

const PageLabel = styled.div`
	font-size: var(--text-sm);
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: var(--tracking-wider);
	color: var(--color-accent-light);
	margin-bottom: var(--space-3);
`;

const PageTitle = styled.h1`
	font-size: var(--text-3xl);
	font-weight: 700;
	margin-bottom: var(--space-4);
`;

const PageIntro = styled.p`
	font-size: var(--text-lg);
	line-height: var(--leading-relaxed);
	color: var(--color-text-secondary);
	max-width: 760px;
`;

const HeaderActions = styled.div`
	display: flex;
	gap: var(--space-4);
	flex-wrap: wrap;
	margin-top: var(--space-6);
`;

const PrimaryAction = styled(Link)`
	${actionStyles}
	background: var(--color-accent);
	color: #fff;

	&:hover {
		background: var(--color-accent-dim);
		box-shadow: var(--shadow-glow);
		color: #fff;
	}
`;

const SecondaryAction = styled.a`
	${actionStyles}
	background: transparent;
	color: var(--color-text-secondary);
	border: 1px solid var(--color-border-hover);

	&:hover {
		border-color: var(--color-accent);
		color: var(--color-text);
	}
`;

const PrintAction = styled.button`
	${actionStyles}
	background: transparent;
	color: var(--color-text-secondary);
	border: 1px solid var(--color-border-hover);
	cursor: pointer;
	font-family: inherit;

	&:hover {
		border-color: var(--color-accent);
		color: var(--color-text);
	}
`;

const Section = styled.section`
	padding: var(--space-section) 0 0;
`;

const SectionLabel = styled.h2`
	font-size: var(--text-sm);
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: var(--tracking-wider);
	color: var(--color-accent-light);
	margin-bottom: var(--space-6);
	padding-bottom: var(--space-3);
	border-bottom: 1px solid var(--color-border);
`;

const Timeline = styled.div`
	position: relative;
	padding-left: var(--space-8);
	max-width: 980px;

	&::before {
		content: "";
		position: absolute;
		top: 8px;
		left: 6px;
		bottom: 0;
		width: 1px;
		background: var(--color-border-hover);
	}
`;

const TimelineEntry = styled.div`
	position: relative;
	padding-bottom: var(--space-10);

	&:last-child {
		padding-bottom: 0;
	}
`;

const TimelineDot = styled.div`
	position: absolute;
	left: calc(-1 * var(--space-8) + 2px);
	top: 6px;
	width: 9px;
	height: 9px;
	border-radius: 50%;
	background: var(--color-accent);
	box-shadow:
		0 0 0 3px var(--color-bg),
		0 0 0 4px var(--color-border-accent);
`;

const TimelineMeta = styled.div`
	display: flex;
	gap: var(--space-4);
	margin-bottom: var(--space-2);
	flex-wrap: wrap;
`;

const TimelinePeriod = styled.span`
	font-size: var(--text-sm);
	color: var(--color-text-tertiary);
	font-family: var(--font-mono);
`;

const TimelineLocation = styled.span`
	font-size: var(--text-sm);
	color: var(--color-text-tertiary);
`;

const TimelineBody = styled.div``;

const TimelineCompany = styled.h3`
	font-size: var(--text-xl);
	font-weight: 600;
	color: var(--color-text);
	margin-bottom: var(--space-1);
`;

const TimelineTitle = styled.div`
	font-size: var(--text-base);
	color: var(--color-accent-light);
	margin-bottom: var(--space-4);
`;

const HighlightList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: var(--space-2);

	li {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		line-height: var(--leading-normal);
		padding-left: var(--space-4);
		position: relative;

		&::before {
			content: "-";
			position: absolute;
			left: 0;
			color: var(--color-text-tertiary);
		}
	}
`;

const ResumeGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: var(--space-10);

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		gap: var(--space-8);
	}
`;

const ResumeColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

const EducationGrid = styled.div`
	display: grid;
	gap: var(--space-5);
`;

const EduCard = styled.div`
	background: var(--color-surface);
	border: 1px solid var(--color-border);
	border-radius: var(--radius-lg);
	padding: var(--space-6);
`;

const EduPeriod = styled.div`
	font-size: var(--text-xs);
	font-family: var(--font-mono);
	color: var(--color-text-tertiary);
	margin-bottom: var(--space-2);
`;

const EduInstitution = styled.h3`
	font-size: var(--text-lg);
	font-weight: 600;
	color: var(--color-text);
	margin-bottom: var(--space-1);
`;

const EduDegree = styled.div`
	font-size: var(--text-base);
	color: var(--color-text-secondary);
`;

const EduDetails = styled.ul`
	margin-top: var(--space-3);
	display: flex;
	flex-direction: column;
	gap: var(--space-1);

	li {
		font-size: var(--text-sm);
		color: var(--color-text-tertiary);
		padding-left: var(--space-4);
		position: relative;

		&::before {
			content: "-";
			position: absolute;
			left: 0;
			color: var(--color-text-tertiary);
		}
	}
`;

const SkillsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: var(--space-4);
`;

const SkillGroup = styled.div`
	background: var(--color-surface);
	border: 1px solid var(--color-border);
	border-radius: var(--radius-lg);
	padding: var(--space-5);
`;

const SkillCatLabel = styled.h4`
	font-size: var(--text-sm);
	font-weight: 600;
	color: var(--color-text);
	margin-bottom: var(--space-3);
`;

const SkillItems = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-2);
`;

const SkillTag = styled.span`
	font-size: var(--text-xs);
	font-weight: 500;
	color: var(--color-accent-light);
	background: var(--color-accent-glow);
	padding: var(--space-1) var(--space-3);
	border-radius: var(--radius-sm);
`;

const StoryBlock = styled("p", {
	shouldForwardProp: (prop) => prop !== "$muted",
})<{ $muted?: boolean }>`
	font-size: var(--text-base);
	line-height: var(--leading-relaxed);
	color: ${({ $muted }) =>
		$muted ? "var(--color-text-tertiary)" : "var(--color-text-secondary)"};
	margin-bottom: ${({ $muted }) => ($muted ? "0" : "var(--space-6)")};
`;
