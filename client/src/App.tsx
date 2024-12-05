import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

import "./App.css";

function App() {
	const [photos, setPhotos] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3310/naturiste")
			.then((res) => res.json())
			.then((data) => console.log(data));
	}, []);

	return (
		<>
			<NavBar />
			<Footer />
		</>
	);
}

export default App;
