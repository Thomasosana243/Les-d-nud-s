import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Location from "./components/Location";
import Rating from "./components/Rating";
import Camping from "./components/Camping";
import Features from "./components/Features";

import "./App.css";

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
			<main>
				<NavBar />
				<section className="main-content">
					<Rating />
					<Location />
					{photos.map((display) => (
						<Camping naturiste={display} key={display.id} />
					))}
					<Features />
				</section>
				<div>
					<ul>
						<li>
							<Link to="/description">Voir la Description</Link>
						</li>
					</ul>
				</div>
				<Footer />
			</main>
		</>
	);
}

export default App;
