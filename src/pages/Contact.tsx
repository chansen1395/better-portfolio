import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import ScrollReveal from "../components/ScrollReveal";
import { social } from "../data/content";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE = "service_n4m1q0e";
const EMAILJS_TEMPLATE = "template_hn7zzab";
const EMAILJS_PUBLIC_KEY = "NieH8KqVVlGb8e7jd";

const MIN_SUBMIT_TIME_MS = 3000;

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
	const form = useRef<HTMLFormElement>(null);
	const [status, setStatus] = useState<FormStatus>("idle");
	const loadedAt = useRef(Date.now());

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!form.current || status === "sending") return;

		// Honeypot -- bots fill the hidden field
		const honeypot = form.current.elements.namedItem(
			"website",
		) as HTMLInputElement | null;
		if (honeypot?.value) return;

		// Timing -- reject if submitted faster than a human could type
		if (Date.now() - loadedAt.current < MIN_SUBMIT_TIME_MS) return;

		setStatus("sending");

		emailjs
			.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, form.current, {
				publicKey: EMAILJS_PUBLIC_KEY,
			})
			.then(
				() => {
					setStatus("success");
					form.current?.reset();
				},
				() => {
					setStatus("error");
				},
			);
	};

	return (
		<>
			<Header>
				<div className="container container--narrow">
					<ScrollReveal>
						<PageLabel>Contact</PageLabel>
						<PageTitle>Get in touch</PageTitle>
						<PageSub>
							Open to new opportunities, or just happy to chat.
						</PageSub>
					</ScrollReveal>
				</div>
			</Header>

			<ContentArea className="container container--narrow">
				{/* -- Links -- */}
				<ScrollReveal>
					<LinksRow>
						<ContactLink
							href={social.linkedin}
							target="_blank"
							rel="noopener noreferrer"
						>
							<LinkIcon aria-hidden="true">in</LinkIcon>
							<LinkBody>
								<LinkLabel>LinkedIn</LinkLabel>
								<LinkHint>Connect with me</LinkHint>
							</LinkBody>
						</ContactLink>

						<ContactLink
							href={social.github}
							target="_blank"
							rel="noopener noreferrer"
						>
							<LinkIcon aria-hidden="true">gh</LinkIcon>
							<LinkBody>
								<LinkLabel>GitHub</LinkLabel>
								<LinkHint>View my code</LinkHint>
							</LinkBody>
						</ContactLink>

						<ContactLink href={`mailto:${social.email}`}>
							<LinkIcon aria-hidden="true">@</LinkIcon>
							<LinkBody>
								<LinkLabel>Email</LinkLabel>
								<LinkHint>{social.email}</LinkHint>
							</LinkBody>
						</ContactLink>
					</LinksRow>
				</ScrollReveal>

				{/* -- Form -- */}
				<ScrollReveal>
					<FormCard>
						<FormTitle>Send a message</FormTitle>
						<Form ref={form} onSubmit={handleSubmit}>
							{/* Honeypot -- hidden from humans, filled by bots */}
							<HoneypotField
								type="text"
								name="website"
								tabIndex={-1}
								autoComplete="off"
							/>
							<FormGroup>
								<Label htmlFor="user_name">Name</Label>
								<Input
									type="text"
									id="user_name"
									name="user_name"
									required
									autoComplete="name"
									disabled={status === "sending"}
								/>
							</FormGroup>

							<FormGroup>
								<Label htmlFor="user_email">Email</Label>
								<Input
									type="email"
									id="user_email"
									name="user_email"
									required
									autoComplete="email"
									disabled={status === "sending"}
								/>
							</FormGroup>

							<FormGroup>
								<Label htmlFor="message">Message</Label>
								<TextArea
									id="message"
									name="message"
									rows={5}
									required
									disabled={status === "sending"}
								/>
							</FormGroup>

							<SubmitButton
								type="submit"
								disabled={status === "sending"}
							>
								{status === "sending"
									? "Sending..."
									: "Send Message"}
							</SubmitButton>

							{status === "success" && (
								<StatusMsg $type="success">
									Message sent - I'll be in touch.
								</StatusMsg>
							)}
							{status === "error" && (
								<StatusMsg $type="error">
									Something went wrong. Please try again or
									email me directly.
								</StatusMsg>
							)}
						</Form>
					</FormCard>
				</ScrollReveal>
			</ContentArea>
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
`;

const ContentArea = styled.div`
	padding-bottom: var(--space-section);
`;

const LinksRow = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: var(--space-4);
	margin-bottom: var(--space-12);

	@media (max-width: 640px) {
		grid-template-columns: 1fr;
	}
`;

const ContactLink = styled.a`
	display: flex;
	align-items: center;
	gap: var(--space-4);
	padding: var(--space-5) var(--space-6);
	background: var(--color-surface);
	border: 1px solid var(--color-border);
	border-radius: var(--radius-lg);
	text-decoration: none;
	transition:
		border-color var(--dur-base) ease,
		transform var(--dur-base) var(--ease-out);

	&:hover {
		border-color: var(--color-border-accent);
		transform: translateY(-1px);
	}
`;

const LinkIcon = styled.span`
	flex-shrink: 0;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: var(--text-sm);
	font-weight: 700;
	font-family: var(--font-mono);
	color: var(--color-accent-light);
	background: var(--color-accent-glow);
	border-radius: var(--radius-md);
`;

const LinkBody = styled.div``;

const LinkLabel = styled.div`
	font-size: var(--text-base);
	font-weight: 600;
	color: var(--color-text);
`;

const LinkHint = styled.div`
	font-size: var(--text-sm);
	color: var(--color-text-tertiary);
`;

const FormCard = styled.div`
	background: var(--color-surface);
	border: 1px solid var(--color-border);
	border-radius: var(--radius-xl);
	padding: var(--space-10);

	@media (max-width: 768px) {
		padding: var(--space-6);
	}
`;

const FormTitle = styled.h2`
	font-size: var(--text-xl);
	font-weight: 600;
	margin-bottom: var(--space-8);
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: var(--space-6);
`;

const HoneypotField = styled.input`
	position: absolute;
	left: -9999px;
	opacity: 0;
	height: 0;
	width: 0;
	pointer-events: none;
`;

const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
`;

const Label = styled.label`
	font-size: var(--text-sm);
	font-weight: 500;
	color: var(--color-text-secondary);
	letter-spacing: var(--tracking-wide);
`;

const inputStyles = `
  width: 100%;
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-base);
  color: var(--color-text);
  background: var(--color-bg-alt);
  border: 1px solid var(--color-border-hover);
  border-radius: var(--radius-md);
  transition: border-color var(--dur-fast) ease, box-shadow var(--dur-fast) ease;
  outline: none;

  &:focus {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px var(--color-accent-glow);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: var(--color-text-tertiary);
  }
`;

const Input = styled.input`
	${inputStyles}
`;

const TextArea = styled.textarea`
	${inputStyles}
	resize: vertical;
	min-height: 120px;
`;

const SubmitButton = styled.button`
	align-self: flex-start;
	padding: var(--space-3) var(--space-10);
	font-size: var(--text-sm);
	font-weight: 600;
	letter-spacing: var(--tracking-wide);
	color: #fff;
	background: var(--color-accent);
	border: none;
	border-radius: var(--radius-md);
	cursor: pointer;
	transition:
		background var(--dur-base) ease,
		box-shadow var(--dur-base) ease,
		opacity var(--dur-fast) ease;

	&:hover:not(:disabled) {
		background: var(--color-accent-dim);
		box-shadow: var(--shadow-glow);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;

const StatusMsg = styled("div", {
	shouldForwardProp: (prop) => prop !== "$type",
})<{ $type: "success" | "error" }>`
	font-size: var(--text-sm);
	font-weight: 500;
	padding: var(--space-3) var(--space-4);
	border-radius: var(--radius-md);
	background: ${({ $type }) =>
		$type === "success"
			? "rgba(34, 197, 94, 0.1)"
			: "rgba(239, 68, 68, 0.1)"};
	color: ${({ $type }) =>
		$type === "success" ? "var(--color-success)" : "var(--color-error)"};
	border: 1px solid
		${({ $type }) =>
			$type === "success"
				? "rgba(34, 197, 94, 0.2)"
				: "rgba(239, 68, 68, 0.2)"};
`;
