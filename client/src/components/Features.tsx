import { useEffect, useState } from "react";

interface NaturistSite {
	id: number;
	name: string;
	location: {
		city: string;
		region: string;
		country: string;
	};
	features: string[];
	website: string;
	rating: number;
	type: string;
	image: string;
}

function Features() {
	const [sites, setSites] = useState<NaturistSite[]>([]);
	const [selectedFeature, setSelectedFeature] = useState<string>("");
	const [filteredSites, setFilteredSites] = useState<NaturistSite[]>([]);

	useEffect(() => {
		fetch("http://localhost:3310/naturiste")
			.then((res) => res.json())
			.then((data) => {
				setSites(data.naturist_sites_in_france);
				// Ne pas initialiser filteredSites ici
			})
			.catch((error) =>
				console.error("Erreur lors de la réception des données : ", error),
			);
	}, []);

	const allFeatures = Array.from(
		new Set(sites.flatMap((site) => site.features)),
	);

	const handleFeatureChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const feature = event.target.value;
		setSelectedFeature(feature);

		if (feature) {
			setFilteredSites(sites.filter((site) => site.features.includes(feature)));
		} else {
			setFilteredSites([]); // Réinitialiser si aucune feature n'est sélectionnée
		}
	};

	return (
		<div>
			<select value={selectedFeature} onChange={handleFeatureChange}>
				<option value="">Toutes les features</option>
				{allFeatures.map((feature) => (
					<option key={feature} value={feature}>
						{feature}
					</option>
				))}
			</select>

			<ul>
				{filteredSites.map((site) => (
					<li key={site.id}>
						<h3>{site.name}</h3>
						<img
							src={site.image}
							alt={site.name}
							style={{ width: "100px", height: "auto" }}
						/>
						<ul> d
							{site.features.map((feat, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<li key={index}>{feat}</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Features;
