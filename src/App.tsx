import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import CaseStudy, { WorkIndex } from "./pages/CaseStudy";
import Labs from "./pages/Labs";
import Contact from "./pages/Contact";

export default function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/resume" element={<About />} />
				<Route path="/projects" element={<WorkIndex />} />
				<Route path="/projects/:slug" element={<CaseStudy />} />
				<Route path="/side-projects" element={<Labs />} />
				<Route
					path="/work"
					element={<Navigate to="/projects" replace />}
				/>
				<Route path="/work/:slug" element={<CaseStudy />} />
				<Route
					path="/about"
					element={<Navigate to="/resume" replace />}
				/>
				<Route
					path="/labs"
					element={<Navigate to="/side-projects" replace />}
				/>
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</Layout>
	);
}
