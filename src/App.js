import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MyNavbar from "./components/MyNavbar";

function App() {
	return (
		<Router>
			<MyNavbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
			</Routes>
		</Router>
	);
}

export default App;
