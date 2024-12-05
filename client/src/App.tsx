import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header/Header";

function App() {
	useEffect(() => {
		fetch("http://localhost:3310/naturiste")
			.then((res) => res.json())
			.then((data) => console.log(data));
	}, []);

	return (
		<>
			<Header />
		</>
	);
}

export default App;
