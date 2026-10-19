import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import ScrollReveal from "../components/ScrollReveal";
import { ArrowRight } from "../components/Icons";
import { about, experience, hero, projects, skills } from "../data/content";

export default function Home() {
	const currentRole = experience[0];
	const coreSkills = skills
		.filter((category) => category.label !== "Other")
		.reduce<string[]>((allItems, category) => {
			return allItems.concat(category.items);
		}, [])
		.slice(0, 10);
	const selectedProjects = projects.slice(0, 2);

	return (
		<>
			<HeroSection>
				<HeroBg aria-hidden="true" />
				<HeroContent className="container">
					<ScrollReveal>
						<HeroLabel>{hero.title}</HeroLabel>
					</ScrollReveal>
					<ScrollReveal delay={60}>
						<HeroName>{hero.name}</HeroName>
					</ScrollReveal>
					<ScrollReveal delay={120}>
						<HeroTagline>{hero.tagline}</HeroTagline>
					</ScrollReveal>
					<ScrollReveal delay={180}>
						<HeroCTA>
							{hero.cta.map((cta, index) => (
								<CTALink
									key={cta.to}
									to={cta.to}
									data-primary={index === 0 || undefined}
								>
									{cta.label}
								</CTALink>
							))}
						</HeroCTA>
					</ScrollReveal>
				</HeroContent>
			</HeroSection>

			<Section>
				<div className="container">
					<SectionHeader>
						<ScrollReveal>
							<div>
								<SectionLabel>Resume</SectionLabel>
								<SectionTitle>Current role</SectionTitle>
							</div>
						</ScrollReveal>
						<ScrollReveal delay={60}>
							<SectionAction to="/resume">
								View full resume <ArrowRight size={16} />
							</SectionAction>
						</ScrollReveal>
					</SectionHeader>

					<SnapshotGrid>
						<ScrollReveal>
							<PrimaryCard>
								<CardEyebrow>
									{currentRole.period} |{" "}
									{currentRole.location}
								</CardEyebrow>
								<RoleTitle>{currentRole.title}</RoleTitle>
								<RoleCompany>{currentRole.company}</RoleCompany>
								<HighlightList>
									{currentRole.highlights
										.slice(0, 4)
										.map((highlight) => (
											<li key={highlight}>{highlight}</li>
										))}
								</HighlightList>
							</PrimaryCard>
						</ScrollReveal>

						<AsideColumn>
							<ScrollReveal delay={80}>
								<SummaryCard>
									<SummaryLabel>Summary</SummaryLabel>
									<SummaryText>{about.intro}</SummaryText>
								</SummaryCard>
							</ScrollReveal>
							<ScrollReveal delay={140}>
								<SummaryCard>
									<SummaryLabel>Core tools</SummaryLabel>
									<TechTags>
										{coreSkills.map((item) => (
											<Tag key={item}>{item}</Tag>
										))}
									</TechTags>
								</SummaryCard>
							</ScrollReveal>
						</AsideColumn>
					</SnapshotGrid>
				</div>
			</Section>

			<Section>
				<div className="container">
					<SectionHeader>
						<ScrollReveal>
							<div>
								<SectionLabel>Projects</SectionLabel>
								<SectionTitle>Selected projects</SectionTitle>
							</div>
						</ScrollReveal>
						<ScrollReveal delay={60}>
							<SectionAction to="/projects">
								View all projects <ArrowRight size={16} />
							</SectionAction>
						</ScrollReveal>
					</SectionHeader>

					<ProjectGrid>
						{selectedProjects.map((project, index) => (
							<ScrollReveal key={project.slug} delay={index * 80}>
								<ProjectCard
									to={`/projects/${project.slug}`}
									className="project-card"
								>
									<ProjectCardInner>
										<ProjectTitle>
											{project.title}
										</ProjectTitle>
										<ProjectSub>
											{project.subtitle}
										</ProjectSub>
										<TechTags>
											{project.tech.map((tech) => (
												<Tag key={tech}>{tech}</Tag>
											))}
										</TechTags>
										<ProjectArrow aria-hidden="true">
											<ArrowRight size={18} />
										</ProjectArrow>
									</ProjectCardInner>
								</ProjectCard>
							</ScrollReveal>
						))}
					</ProjectGrid>
				</div>
			</Section>
		</>
	);
}

const heroShift = keyframes`
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(-18px, 14px) scale(1.03); }
  100% { transform: translate(0, 0) scale(1); }
`;

const heroShift2 = keyframes`
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(14px, -18px) scale(1.04); }
  100% { transform: translate(0, 0) scale(1); }
`;

const HeroSection = styled.section`
	position: relative;
	min-height: min(70vh, 680px);
	display: flex;
	align-items: center;
	overflow: hidden;
`;

const HeroBg = styled.div`
	position: absolute;
	inset: -25%;
	z-index: 0;
	background:
		radial-gradient(
			ellipse 560px 360px at 25% 40%,
			rgba(99, 102, 241, 0.08) 0%,
			transparent 70%
		),
		radial-gradient(
			ellipse 420px 300px at 75% 30%,
			rgba(6, 182, 212, 0.05) 0%,
			transparent 70%
		);
	animation:
		${heroShift} 22s ease-in-out infinite,
		${heroShift2} 28s ease-in-out infinite reverse;
	pointer-events: none;
`;

const HeroContent = styled.div`
	position: relative;
	z-index: 1;
	padding-block: var(--space-12); /* keep .container's side gutter */
`;

const HeroLabel = styled.div`
	font-size: var(--text-sm);
	font-weight: 500;
	letter-spacing: var(--tracking-wider);
	text-transform: uppercase;
	color: var(--color-accent-light);
	margin-bottom: var(--space-4);
`;

const HeroName = styled.h1`
	font-size: var(--text-4xl);
	font-weight: 700;
	letter-spacing: var(--tracking-tight);
	line-height: var(--leading-tight);
	margin-bottom: var(--space-5);
`;

const HeroTagline = styled.p`
	font-size: var(--text-xl);
	line-height: var(--leading-relaxed);
	color: var(--color-text-secondary);
	max-width: 720px;
	margin-bottom: var(--space-8);
`;

const HeroCTA = styled.div`
	display: flex;
	gap: var(--space-4);
	flex-wrap: wrap;
`;

const CTALink = styled(Link)`
	display: inline-flex;
	align-items: center;
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

	&[data-primary] {
		background: var(--color-accent);
		color: #fff;

		&:hover {
			background: var(--color-accent-dim);
			box-shadow: var(--shadow-glow);
			color: #fff;
		}
	}

	&:not([data-primary]) {
		background: transparent;
		color: var(--color-text-secondary);
		border: 1px solid var(--color-border-hover);

		&:hover {
			border-color: var(--color-accent);
			color: var(--color-text);
		}
	}
`;

const Section = styled.section`
	padding: var(--space-section) 0 0;
`;

const SectionHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: var(--space-4);
	margin-bottom: var(--space-8);

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const SectionLabel = styled.div`
	font-size: var(--text-sm);
	font-weight: 500;
	letter-spacing: var(--tracking-wider);
	text-transform: uppercase;
	color: var(--color-accent-light);
	margin-bottom: var(--space-3);
`;

const SectionTitle = styled.h2`
	font-size: var(--text-3xl);
	font-weight: 700;
`;

const SectionAction = styled(Link)`
	display: inline-flex;
	align-items: center;
	gap: var(--space-2);
	font-size: var(--text-sm);
	font-weight: 500;
	color: var(--color-text-secondary);
	text-decoration: none;

	&:hover {
		color: var(--color-text);
	}
`;

const SnapshotGrid = styled.div`
	display: grid;
	grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
	gap: var(--space-6);

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

const PrimaryCard = styled.div`
	background: var(--color-surface);
	border: 1px solid var(--color-border);
	border-radius: var(--radius-xl);
	padding: var(--space-8);
	height: 100%;
`;

const CardEyebrow = styled.div`
	font-size: var(--text-sm);
	font-family: var(--font-mono);
	color: var(--color-text-tertiary);
	margin-bottom: var(--space-3);
`;

const RoleTitle = styled.h3`
	font-size: var(--text-2xl);
	font-weight: 600;
	color: var(--color-text);
	margin-bottom: var(--space-2);
`;

const RoleCompany = styled.div`
	font-size: var(--text-base);
	color: var(--color-accent-light);
	margin-bottom: var(--space-5);
`;

const HighlightList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: var(--space-3);

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

const AsideColumn = styled.div`
	display: grid;
	gap: var(--space-6);
`;

const SummaryCard = styled.div`
	background: var(--color-surface);
	border: 1px solid var(--color-border);
	border-radius: var(--radius-xl);
	padding: var(--space-6);
`;

const SummaryLabel = styled.h3`
	font-size: var(--text-sm);
	font-weight: 600;
	letter-spacing: var(--tracking-wider);
	text-transform: uppercase;
	color: var(--color-accent-light);
	margin-bottom: var(--space-4);
`;

const SummaryText = styled.p`
	font-size: var(--text-base);
	color: var(--color-text-secondary);
	line-height: var(--leading-relaxed);
`;

const ProjectGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: var(--space-6);

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

const ProjectCard = styled(Link)`
	display: block;
	height: 100%;
	text-decoration: none;
	border-radius: var(--radius-xl);
	transition:
		transform var(--dur-base) var(--ease-out),
		box-shadow var(--dur-base) ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-glow);
	}
`;

const ProjectCardInner = styled.div`
	background: var(--color-surface);
	border: 1px solid var(--color-border);
	border-radius: var(--radius-xl);
	padding: var(--space-8);
	height: 100%;
	position: relative;
	transition: border-color var(--dur-base) ease;

	.project-card:hover & {
		border-color: var(--color-border-accent);
	}
`;

const ProjectTitle = styled.h3`
	font-size: var(--text-xl);
	font-weight: 600;
	margin-bottom: var(--space-3);
	color: var(--color-text);
`;

const ProjectSub = styled.p`
	font-size: var(--text-base);
	color: var(--color-text-secondary);
	line-height: var(--leading-normal);
	margin-bottom: var(--space-5);
	padding-right: var(--space-8);
`;

const TechTags = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-2);
`;

const Tag = styled.span`
	font-size: var(--text-xs);
	font-weight: 500;
	letter-spacing: var(--tracking-normal);
	color: var(--color-accent-light);
	background: var(--color-accent-glow);
	padding: var(--space-1) var(--space-3);
	border-radius: var(--radius-sm);
`;

const ProjectArrow = styled.span`
	position: absolute;
	top: var(--space-8);
	right: var(--space-8);
	color: var(--color-text-tertiary);
	transition:
		color var(--dur-base) ease,
		transform var(--dur-base) var(--ease-out);

	.project-card:hover & {
		color: var(--color-accent-light);
		transform: translateX(4px);
	}
`;
