import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

import "./App.css";

import Description from "./pages/Description";
import Rating from "./components/Rating";

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

			<div>
				<Rating />
				<Description />
				<ul>
					<li>
						<Link to="/description">Voir la Description</Link>
					</li>
				</ul>
			</div>
		</>
	);
}

export default App;
