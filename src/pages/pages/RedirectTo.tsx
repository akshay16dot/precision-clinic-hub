import { Navigate } from "react-router-dom";

/**
 * Client-side redirect for URLs that have moved.
 *
 * GitHub Pages is static hosting with no server-side redirect support, so
 * moved URLs are handled here. `replace` keeps the old path out of browser
 * history. The prerenderer also emits a <link rel="canonical"> pointing at the
 * destination for each of these, so crawlers that do not run JavaScript still
 * get the signal.
 */
const RedirectTo = ({ to }: { to: string }) => <Navigate to={to} replace />;

export default RedirectTo;
