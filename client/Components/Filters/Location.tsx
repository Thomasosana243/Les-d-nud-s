import { useEffect, useState } from "react";
import "../../src/styles/Rating.css";

interface NaturistSite {
	id: number;
	name: string;
	location: {
		city: string;
		region: string;
	};
	type: string;
}

function Location() {
	const [locations, setLocations] = useState<NaturistSite[]>([]);
	const [selectedRegion, setSelectedRegion] = useState<string>("");

	useEffect(() => {
		fetch("http://localhost:3310/naturiste")
			.then((res) => res.json())
			.then((data) => setLocations(data.naturist_sites_in_france))
			.catch((error) =>
				console.error("Erreur lors de la réception des données : ", error),
			);
	}, []);

	const uniqueRegions = Array.from(
		new Set(locations.map((site) => site.location.region)),
	);

	const filteredSites = selectedRegion
		? locations.filter((site) => site.location.region === selectedRegion)
		: [];

	return (
		<>
			<label>
				<select
					onChange={(e) => setSelectedRegion(e.target.value)}
					value={selectedRegion}
				>
					<option value="">Sélectionnez une région</option>
					{uniqueRegions.map((region) => (
						<option key={region} value={region}>
							{region}
						</option>
					))}
				</select>
			</label>

			{selectedRegion && (
				<ul>
					{filteredSites.map((site) => (
						<li key={site.id}>
							{site.name} - {site.type}
						</li>
					))}
				</ul>
			)}
		</>
	);
}

export default Location;
