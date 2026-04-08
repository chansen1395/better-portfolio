import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { social } from "../data/content";

// -- Nav -----------------------------------------------------
const navLinks = [
	{ to: "/", label: "Home" },
	{ to: "/resume", label: "Resume" },
	{ to: "/projects", label: "Projects" },
	{ to: "/side-projects", label: "Side Projects" },
];

function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Close mobile menu on route change
	useEffect(() => {
		setMenuOpen(false);
	}, [location.pathname]);

	return (
		<NavBar
			$scrolled={scrolled}
			role="navigation"
			aria-label="Main navigation"
		>
			<NavInner className="container">
				<Logo to="/">Connor Hansen</Logo>

				<MobileToggle
					onClick={() => setMenuOpen((o) => !o)}
					aria-expanded={menuOpen}
					aria-label="Toggle menu"
				>
					<HamburgerBar $open={menuOpen} />
					<HamburgerBar $open={menuOpen} />
					<HamburgerBar $open={menuOpen} />
				</MobileToggle>

				<NavLinks $open={menuOpen}>
					{navLinks.map(({ to, label }) => (
						<StyledNavLink
							key={to}
							to={to}
							end={to === "/"}
							className={({ isActive }) =>
								isActive ? "active" : ""
							}
						>
							{label}
						</StyledNavLink>
					))}
				</NavLinks>
			</NavInner>
		</NavBar>
	);
}

// -- Footer --------------------------------------------------
function Footer() {
	return (
		<FooterEl>
			<FooterInner className="container">
				<FooterLeft>
					<FooterName>Connor Hansen</FooterName>
					<FooterSub>
						Software Engineer at Pacific Northwest National
						Laboratory
					</FooterSub>
				</FooterLeft>
				<FooterLinks>
					<FooterNavLink to="/resume">Resume</FooterNavLink>
					<FooterNavLink to="/projects">Projects</FooterNavLink>
					<FooterNavLink to="/contact">Contact</FooterNavLink>
					<FooterAnchor
						href={social.linkedin}
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</FooterAnchor>
					<FooterAnchor
						href={social.github}
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</FooterAnchor>
					<FooterAnchor href={`mailto:${social.email}`}>
						Email
					</FooterAnchor>
				</FooterLinks>
			</FooterInner>
		</FooterEl>
	);
}

// -- Layout --------------------------------------------------
interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	const location = useLocation();

	// Scroll to top on route change
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<>
			<Nav />
			<Main>{children}</Main>
			<Footer />
		</>
	);
}

// --- Styled Components --------------------------------------

const NavBar = styled("nav", {
	shouldForwardProp: (prop) => prop !== "$scrolled",
})<{ $scrolled: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	padding: var(--space-4) 0;
	transition:
		background var(--dur-base) ease,
		box-shadow var(--dur-base) ease,
		padding var(--dur-base) ease;
	background: ${({ $scrolled }) =>
		$scrolled ? "rgba(6, 6, 11, 0.88)" : "transparent"};
	backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(16px)" : "none")};
	box-shadow: ${({ $scrolled }) =>
		$scrolled ? "0 1px 0 var(--color-border)" : "none"};
	padding: ${({ $scrolled }) =>
		$scrolled ? "var(--space-3) 0" : "var(--space-4) 0"};
`;

const NavInner = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Logo = styled(NavLink)`
	font-size: var(--text-base);
	font-weight: 600;
	letter-spacing: var(--tracking-normal);
	color: var(--color-text);
	text-decoration: none;

	&:hover {
		color: var(--color-accent-light);
	}
`;

const NavLinks = styled("div", {
	shouldForwardProp: (prop) => prop !== "$open",
})<{ $open: boolean }>`
	display: flex;
	align-items: center;
	gap: var(--space-6);

	@media (max-width: 768px) {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: min(300px, 80vw);
		flex-direction: column;
		align-items: flex-start;
		padding: 5rem var(--gutter) var(--gutter);
		gap: var(--space-6);
		background: rgba(6, 6, 11, 0.96);
		backdrop-filter: blur(24px);
		transform: translateX(${({ $open }) => ($open ? "0" : "100%")});
		transition: transform var(--dur-slow) var(--ease-out);
	}
`;

const StyledNavLink = styled(NavLink)`
	font-size: var(--text-sm);
	font-weight: 500;
	letter-spacing: var(--tracking-normal);
	color: var(--color-text-secondary);
	text-decoration: none;
	position: relative;
	padding: var(--space-1) 0;
	transition: color var(--dur-fast) ease;

	&::after {
		content: "";
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--color-accent);
		transition: width var(--dur-base) var(--ease-out);
	}

	&:hover,
	&.active {
		color: var(--color-text);
	}

	&.active::after {
		width: 100%;
	}

	@media (max-width: 768px) {
		font-size: var(--text-base);
	}
`;

const MobileToggle = styled.button`
	display: none;
	flex-direction: column;
	gap: 5px;
	padding: var(--space-2);
	z-index: 110;

	@media (max-width: 768px) {
		display: flex;
	}
`;

const HamburgerBar = styled("span", {
	shouldForwardProp: (prop) => prop !== "$open",
})<{ $open: boolean }>`
	display: block;
	width: 22px;
	height: 2px;
	background: var(--color-text);
	border-radius: 1px;
	transition:
		transform var(--dur-base) ease,
		opacity var(--dur-fast) ease;

	&:nth-of-type(1) {
		transform: ${({ $open }) =>
			$open ? "rotate(45deg) translate(5px, 5px)" : "none"};
	}
	&:nth-of-type(2) {
		opacity: ${({ $open }) => ($open ? 0 : 1)};
	}
	&:nth-of-type(3) {
		transform: ${({ $open }) =>
			$open ? "rotate(-45deg) translate(5px, -5px)" : "none"};
	}
`;

const Main = styled.main`
	flex: 1;
	padding-top: 72px; /* clear fixed nav */
`;

const FooterEl = styled.footer`
	border-top: 1px solid var(--color-border);
	padding: var(--space-12) 0;
	margin-top: var(--space-section);
`;

const FooterInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: var(--space-6);
`;

const FooterLeft = styled.div``;

const FooterName = styled.div`
	font-weight: 600;
	font-size: var(--text-base);
	color: var(--color-text);
`;

const FooterSub = styled.div`
	font-size: var(--text-sm);
	color: var(--color-text-tertiary);
	margin-top: var(--space-1);
`;

const FooterLinks = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-4);
	justify-content: flex-end;
	align-items: center;

	@media (max-width: 768px) {
		justify-content: flex-start;
		width: 100%;
	}

	@media (max-width: 480px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const footerLinkStyles = `
	font-size: var(--text-sm);
	color: var(--color-text-secondary);
	text-decoration: none;
	transition: color var(--dur-fast) ease;

	&:hover {
		color: var(--color-accent-light);
	}
`;

const FooterNavLink = styled(Link)`
	${footerLinkStyles}
`;

const FooterAnchor = styled.a`
	${footerLinkStyles}
`;
