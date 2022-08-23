import { createRoot } from "react-dom/client";
import { App } from "./app";
const rootElement = document.getElementById("root");
const projectRoot = createRoot(rootElement);
projectRoot.render(<App />);
