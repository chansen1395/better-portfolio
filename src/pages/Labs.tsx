import styled from "@emotion/styled";
import ScrollReveal from "../components/ScrollReveal";
import { ArrowRight } from "../components/Icons";
import { labs as labsData } from "../data/content";

export default function Labs() {
	return (
		<>
			<Header>
				<div className="container">
					<ScrollReveal>
						<PageLabel>Side Projects</PageLabel>
						<PageTitle>Side projects</PageTitle>
						<PageSub>
							Smaller experiments and interactive projects outside
							my day-to-day work.
						</PageSub>
					</ScrollReveal>
				</div>
			</Header>

			<div className="container">
				{labsData.map((lab, i) => (
					<ScrollReveal key={lab.title} delay={i * 100}>
						<LabCard>
							<LabTitle>{lab.title}</LabTitle>
							<LabDescription>{lab.description}</LabDescription>

							<DetailsList>
								{lab.details.map((d, idx) => (
									<DetailsItem key={idx}>{d}</DetailsItem>
								))}
							</DetailsList>

							<LabMeta>
								<TechTags>
									{lab.tech.map((t) => (
										<Tag key={t}>{t}</Tag>
									))}
								</TechTags>
							</LabMeta>

							<BuiltNote>{lab.built}</BuiltNote>

							<LaunchLink
								href={lab.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								Open project <ArrowRight size={14} />
							</LaunchLink>
						</LabCard>
					</ScrollReveal>
				))}
			</div>
		</>
	);
}

// --- Styled Components --------------------------------------

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
	margin-bottom: var(--space-4);
`;

const PageSub = styled.p`
	font-size: var(--text-lg);
	color: var(--color-text-secondary);
	line-height: var(--leading-relaxed);
	max-width: 600px;
`;

const LabCard = styled.div`
	background: var(--color-surface);
	border: 1px solid var(--color-border);
	border-radius: var(--radius-xl);
	padding: var(--space-10);
	margin-bottom: var(--space-8);
	transition: border-color var(--dur-base) ease;

	&:hover {
		border-color: var(--color-border-accent);
	}

	@media (max-width: 768px) {
		padding: var(--space-6);
	}
`;

const LabTitle = styled.h2`
	font-size: var(--text-2xl);
	font-weight: 700;
	margin-bottom: var(--space-4);
`;

const LabDescription = styled.p`
	font-size: var(--text-lg);
	color: var(--color-text-secondary);
	line-height: var(--leading-relaxed);
	margin-bottom: var(--space-6);
`;

const DetailsList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: var(--space-3);
	margin-bottom: var(--space-6);
`;

const DetailsItem = styled.li`
	font-size: var(--text-base);
	color: var(--color-text-secondary);
	padding-left: var(--space-5);
	position: relative;

	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 10px;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--color-accent2);
		opacity: 0.7;
	}
`;

const LabMeta = styled.div`
	margin-bottom: var(--space-4);
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
	color: var(--color-accent2);
	background: var(--color-accent2-glow);
	padding: var(--space-1) var(--space-3);
	border-radius: var(--radius-sm);
`;

const BuiltNote = styled.div`
	font-size: var(--text-sm);
	color: var(--color-text-tertiary);
	font-style: italic;
	margin-bottom: var(--space-6);
`;

const LaunchLink = styled.a`
	display: inline-flex;
	align-items: center;
	gap: var(--space-2);
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
