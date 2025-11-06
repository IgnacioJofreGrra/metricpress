import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Inject analytics script at runtime if env vars are present
(function injectAnalytics() {
	const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT as string | undefined;
	const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID as string | undefined;

	if (!endpoint || !websiteId) return;

	try {
		const src = `${endpoint.replace(/\/$/, "")}/umami`;
		const s = document.createElement("script");
		s.async = true;
		s.src = src;
		s.setAttribute("data-website-id", websiteId);
		document.head.appendChild(s);
	} catch {
		// no-op: analytics is optional
	}
})();

createRoot(document.getElementById("root")!).render(<App />);
