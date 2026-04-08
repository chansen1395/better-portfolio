import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { routerBasename } from "./lib/basePath";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter basename={routerBasename}>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
