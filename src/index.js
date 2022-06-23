import React from "react";
import ReactDOM from "react-dom/client";
import SSRProvider from "react-bootstrap/SSRProvider";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<SSRProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</SSRProvider>
);
