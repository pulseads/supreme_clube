import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// This entry renders only the existing public landing; no login or API required.
createRoot(document.getElementById("root")!).render(<App />);
