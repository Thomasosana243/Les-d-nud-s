import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";

import Rating from "./components/Rating";
import "./App.css";
import Camping from "./components/Camping";

interface naturisteProps {
	naturiste: {
		id: number;
		name: string;
		location: {
			city: string;
			region: string;
			country: string;
		};
		features: [string, string, string];
		website: string;
		rating: number;
		type: string;
		image: string;
	};
}

function App() {
	const [photos, setPhotos] = useState<naturisteProps[]>([]);
	useEffect(() => {
		fetch("http://localhost:3310/naturiste")
			.then((res) => res.json())
			.then((data) => setPhotos(data.naturist_sites_in_france));
	}, []);

	return (
		<>
			<NavBar />
			<Rating />
			{photos.map((display) => (
				<Camping naturiste={display} key={display.id} />
			))}
			<div>
				<ul>
					<li>
						<Link to="/description">Voir la Description</Link>
					</li>
				</ul>
			</div>
			<Footer />
		</>
	);
}

export default App;
