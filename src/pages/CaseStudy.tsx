import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";
import ScrollReveal from "../components/ScrollReveal";
import { ArrowRight, ArrowLeft } from "../components/Icons";
import { projects } from "../data/content";

export default function CaseStudy() {
	const { slug } = useParams<{ slug: string }>();
	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		return (
			<NotFound className="container">
				<h1>Project not found</h1>
				<Link to="/projects">
					<ArrowLeft size={14} /> Back to all projects
				</Link>
			</NotFound>
		);
	}

	return (
		<>
			{/* -- Page Header -- */}
			<Header>
				<div className="container container--narrow">
					<ScrollReveal>
						<BackLink to="/projects">
							<ArrowLeft size={14} /> All Projects
						</BackLink>
					</ScrollReveal>
					<ScrollReveal delay={60}>
						<ProjectTitle>{project.title}</ProjectTitle>
					</ScrollReveal>
					<ScrollReveal delay={120}>
						<ProjectSub>{project.subtitle}</ProjectSub>
					</ScrollReveal>
					<ScrollReveal delay={180}>
						<MetaRow>
							<MetaItem>
								<MetaLabel>Role</MetaLabel>
								<MetaValue>{project.role}</MetaValue>
							</MetaItem>
							<MetaItem>
								<MetaLabel>Duration</MetaLabel>
								<MetaValue>{project.duration}</MetaValue>
							</MetaItem>
							<MetaItem>
								<MetaLabel>Stack</MetaLabel>
								<TechTags>
									{project.tech.map((t) => (
										<Tag key={t}>{t}</Tag>
									))}
								</TechTags>
							</MetaItem>
						</MetaRow>
					</ScrollReveal>
				</div>
			</Header>

			{/* -- Body -- */}
			<Body>
				<div className="container container--narrow">
					<ScrollReveal>
						<SectionLabel>The Challenge</SectionLabel>
						<Prose>{project.challenge}</Prose>
					</ScrollReveal>

					<ScrollReveal>
						<SectionLabel>The Approach</SectionLabel>
						<Prose>{project.approach}</Prose>
					</ScrollReveal>

					<ScrollReveal>
						<SectionLabel>Key Outcomes</SectionLabel>
						<OutcomeList>
							{project.outcomes.map((o, i) => (
								<OutcomeItem key={i}>{o}</OutcomeItem>
							))}
						</OutcomeList>
					</ScrollReveal>

					{project.link && (
						<ScrollReveal>
							<LiveLink
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								View Live Project <ArrowRight size={14} />
							</LiveLink>
						</ScrollReveal>
					)}
				</div>
			</Body>
		</>
	);
}

// -- Work Index page -----------------------------------------
export function WorkIndex() {
	return (
		<>
			<Header>
				<div className="container">
					<ScrollReveal>
						<PageLabel>Projects</PageLabel>
						<PageTitle>Selected Projects</PageTitle>
						<PageSub>
							A few production projects and internal tooling
							efforts.
						</PageSub>
					</ScrollReveal>
				</div>
			</Header>

			<div className="container">
				<ProjectGrid>
					{projects.map((p, i) => (
						<ScrollReveal key={p.slug} delay={i * 80}>
							<ProjectLink
								to={`/projects/${p.slug}`}
								className="project-link"
							>
								<CardInner>
									<CardTitle>{p.title}</CardTitle>
									<CardSub>{p.subtitle}</CardSub>
									<CardMeta>
										<span>{p.role}</span>
										<span>|</span>
										<span>{p.duration}</span>
									</CardMeta>
									<TechTags>
										{p.tech.map((t) => (
											<Tag key={t}>{t}</Tag>
										))}
									</TechTags>
									<CardArrow aria-hidden="true">
										<ArrowRight size={20} />
									</CardArrow>
								</CardInner>
							</ProjectLink>
						</ScrollReveal>
					))}
				</ProjectGrid>
			</div>
		</>
	);
}

// --- Styled Components --------------------------------------

const NotFound = styled.div`
	padding: var(--space-24) 0;
	text-align: center;

	h1 {
		margin-bottom: var(--space-4);
	}
`;

const Header = styled.header`
	padding: var(--space-16) 0 var(--space-8);
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
`;

const PageSub = styled.p`
	font-size: var(--text-lg);
	color: var(--color-text-secondary);
	line-height: var(--leading-relaxed);
	margin-top: var(--space-4);
	max-width: 640px;
`;

const BackLink = styled(Link)`
	display: inline-flex;
	align-items: center;
	gap: var(--space-2);
	font-size: var(--text-sm);
	color: var(--color-text-tertiary);
	text-decoration: none;
	margin-bottom: var(--space-6);
	transition: color var(--dur-fast) ease;

	&:hover {
		color: var(--color-accent-light);
	}
`;

const ProjectTitle = styled.h1`
	font-size: var(--text-3xl);
	font-weight: 700;
	margin-bottom: var(--space-4);
`;

const ProjectSub = styled.p`
	font-size: var(--text-xl);
	color: var(--color-text-secondary);
	line-height: var(--leading-relaxed);
	margin-bottom: var(--space-8);
`;

const MetaRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-8);
	padding: var(--space-6) 0;
	border-top: 1px solid var(--color-border);
	border-bottom: 1px solid var(--color-border);
`;

const MetaItem = styled.div``;

const MetaLabel = styled.div`
	font-size: var(--text-xs);
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: var(--tracking-wider);
	color: var(--color-text-tertiary);
	margin-bottom: var(--space-2);
`;

const MetaValue = styled.div`
	font-size: var(--text-base);
	color: var(--color-text);
`;

const TechTags = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-2);
`;

const Tag = styled.span`
	font-size: var(--text-xs);
	font-weight: 500;
	letter-spacing: var(--tracking-wide);
	color: var(--color-accent-light);
	background: var(--color-accent-glow);
	padding: var(--space-1) var(--space-3);
	border-radius: var(--radius-sm);
`;

const Body = styled.div`
	padding: var(--space-12) 0 var(--space-section);
`;

const SectionLabel = styled.h3`
	font-size: var(--text-sm);
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: var(--tracking-wider);
	color: var(--color-accent-light);
	margin-bottom: var(--space-4);
	margin-top: var(--space-10);

	&:first-of-type {
		margin-top: 0;
	}
`;

const Prose = styled.p`
	font-size: var(--text-lg);
	color: var(--color-text-secondary);
	line-height: var(--leading-relaxed);
	margin-bottom: var(--space-6);
`;

const OutcomeList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: var(--space-4);
	margin-bottom: var(--space-6);
`;

const OutcomeItem = styled.li`
	font-size: var(--text-base);
	color: var(--color-text-secondary);
	line-height: var(--leading-normal);
	padding-left: var(--space-6);
	position: relative;

	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 10px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--color-accent);
		opacity: 0.6;
	}
`;

const LiveLink = styled.a`
	display: inline-flex;
	align-items: center;
	gap: var(--space-2);
	margin-top: var(--space-10);
	padding: var(--space-3) var(--space-8);
	font-size: var(--text-sm);
	font-weight: 600;
	letter-spacing: var(--tracking-wide);
	color: #fff;
	background: var(--color-accent);
	border-radius: var(--radius-md);
	text-decoration: none;
	transition:
		background var(--dur-base) ease,
		box-shadow var(--dur-base) ease;

	&:hover {
		background: var(--color-accent-dim);
		box-shadow: var(--shadow-glow);
		color: #fff;
	}
`;

// -- Work Index Styles ---------------------------------------

const ProjectGrid = styled.div`
	display: grid;
	gap: var(--space-6);
	padding-bottom: var(--space-section);
`;

const ProjectLink = styled(Link)`
	display: block;
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

const CardInner = styled.div`
	background: var(--color-surface);
	border: 1px solid var(--color-border);
	border-radius: var(--radius-xl);
	padding: var(--space-8) var(--space-10);
	position: relative;
	transition: border-color var(--dur-base) ease;

	.project-link:hover & {
		border-color: var(--color-border-accent);
	}

	@media (max-width: 768px) {
		padding: var(--space-6);
	}
`;

const CardTitle = styled.h3`
	font-size: var(--text-xl);
	font-weight: 600;
	color: var(--color-text);
	margin-bottom: var(--space-3);
`;

const CardSub = styled.p`
	font-size: var(--text-base);
	color: var(--color-text-secondary);
	line-height: var(--leading-normal);
	margin-bottom: var(--space-3);
	max-width: 680px;
`;

const CardMeta = styled.div`
	display: flex;
	gap: var(--space-2);
	font-size: var(--text-sm);
	color: var(--color-text-tertiary);
	margin-bottom: var(--space-4);
`;

const CardArrow = styled.span`
	position: absolute;
	top: var(--space-8);
	right: var(--space-10);
	font-size: var(--text-xl);
	color: var(--color-text-tertiary);
	transition:
		color var(--dur-base) ease,
		transform var(--dur-base) var(--ease-out);

	.project-link:hover & {
		color: var(--color-accent-light);
		transform: translateX(4px);
	}

	@media (max-width: 768px) {
		right: var(--space-6);
	}
`;
