import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Location from "../components/Filters/Location";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Rating from "./components/Rating";
import "./App.css";
import Camping from "./components/Camping";
import { useParams } from "react-router-dom";

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
	const [getId, setGetId] = useState<naturisteProps[]>([]);
	const { id } = useParams();

	useEffect(() => {
		fetch("http://localhost:3310/naturiste")
			.then((res) => res.json())
			.then((data) => setPhotos(data.naturist_sites_in_france));
	}, []);

	useEffect(() => {
		fetch(`http://localhost:3310/naturiste/${id}`)
			.then((res) => res.json())
			.then((data) => setPhotos(data.naturist_sites_in_france));
	}, [id]);
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
