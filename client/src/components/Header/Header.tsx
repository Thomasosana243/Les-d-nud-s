import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./components/Header/Header.css";
import LogoSite from "../../assets/images/LogoSite.png";

// Départements
const [Locations, setLocations] = useState("");
useEffect(() => {
	if (Locations !== "") {
		fetch(`http://localhost:3310/naturiste=${Location}`)
			.then((res) => res.json())
			.then((data) => {
				setLocations(data.naturist_sites_in_france);
			});
	}
}, [Locations]);

// Notation
const [Rating, setRating] = useState("");
useEffect(() => {
	if (Rating !== "") {
		fetch(`http://localhost:3310/naturiste=${Rating}`)
			.then((res) => res.json())
			.then((data) => {
				setRating(data.naturist_sites_in_france);
			});
	}
}, [Rating]);

// Loisirs
const [Features, setFeatures] = useState("");
useEffect(() => {
	if (Features !== "") {
		fetch(`http://localhost:3310/naturiste=${Features}`)
			.then((res) => res.json())
			.then((data) => {
				setFeatures(data.naturist_sites_in_france);
			});
	}
}, [Features]);

// Capacités
const [Abilities, setAbilities] = useState("");
useEffect(() => {
	if (Abilities !== "") {
		fetch(`http://localhost:3310/naturiste=${Abilities}`)
			.then((res) => res.json())
			.then((data) => {
				setAbilities(data.naturist_sites_in_france);
			});
	}
}, [Abilities]);

function Header() {
	return (
		<>
			<header>
				<img src={LogoSite} alt="Logo site" />
				<nav>
					<div className="navigation">
						{/* bouton Accueil */}
						<Link to="/" className="LinkHome">
							<button type="button">
								<p>Accueil</p>
							</button>
						</Link>

						{/* Filtre départements */}
						<FilterLocation Locations={locations} setLocation={setLocations} />

						{/* Filtre notation */}
						<FilterRating Rating={rating} setRating={setRating} />

						{/* Filtre loisirs */}
						<FilterFeatures Features={features} setFeatures={setFeatures} />

						{/* Filtre capacités */}
						<FilterAbilities
							Abilities={abilities}
							setAbilities={setAbilities}
						/>
					</div>
				</nav>
			</header>
		</>
	);
}

export default Header;
