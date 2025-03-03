import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Location from "./components/Location";
import Capacity from "./components/Capacity";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
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
		features: [string];
		website: string;
		rating: number;
		Capacity: number;
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
			<section className="main-content">
				<Rating />
				<Location />
				<Features />
				<Capacity />
				<main className="main">
					<Link to="/description">
						{photos.map((display) => (
							<Camping naturiste={display} key={display.id} />
						))}
					</Link>
				</main>
			</section>
			<Footer />
		</>
	);
}

export default App;
