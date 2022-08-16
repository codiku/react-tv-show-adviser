import { createRoot } from "react-dom/client";
import { App } from "./app";
import 'bootstrap/dist/css/bootstrap.min.css';
const rootElement = document.getElementById("root");
const projectRoot = createRoot(rootElement);
projectRoot.render(<App />);
