import { useEffect, useState } from "react";

interface NaturistSite {
	id: number;
	name: string;
	rating: number;
}

function Rating() {
	const [sites, setSites] = useState<NaturistSite[]>([]);
	const [selectedRating, setSelectedRating] = useState<number | null>(null);

	useEffect(() => {
		fetch("http://localhost:3310/naturiste")
			.then((response) => response.json())
			.then((data) => {
				const extractedSites: NaturistSite[] =
					data.naturist_sites_in_france.map(
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						(site: { id: any; name: any; rating: any }) => ({
							id: site.id,
							name: site.name,
							rating: site.rating,
						}),
					);
				setSites(extractedSites);
			})
			.catch((error) =>
				console.error("Erreur lors de la récupération des données :", error),
			);
	}, []);

	// Extraire les notes uniques et les trier par ordre croissant
	const uniqueRatings = Array.from(
		new Set(sites.map((site) => site.rating)),
	).sort((a, b) => a - b);

	// Filtrer les sites en fonction de la note sélectionnée
	const filteredSites =
		selectedRating !== null
			? sites.filter((site) => site.rating === selectedRating)
			: [];

	return (
		<div>
			<label>
				<select
					onChange={(e) => setSelectedRating(Number(e.target.value))}
					value={selectedRating || ""}
				>
					<option value="">Select a Rating</option>
					{uniqueRatings.map((rating, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<option key={index} value={rating}>
							{rating} ⭐
						</option>
					))}
				</select>
			</label>

			<h2>Campings filtrés</h2>
			{filteredSites.length === 0 ? (
				<p>Aucun camping à afficher. Veuillez sélectionner une note.</p>
			) : (
				<ul>
					{filteredSites.map((site) => (
						<li key={site.id}>
							{site.name} - {site.rating} ⭐
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Rating;
