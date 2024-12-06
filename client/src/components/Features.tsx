import React, { useEffect, useState } from "react";

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
				setFilteredSites(data.naturist_sites_in_france);
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
			setFilteredSites(sites);
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
						{site.name}
						{site.image}
						{site.features}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Features;
