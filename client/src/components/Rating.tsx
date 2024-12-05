import { useEffect, useState } from "react";

interface NaturistSite {
	id: number;
	name: string;
	rating: number;
}

function Rating() {
	const [sites, setSites] = useState<NaturistSite[]>([]);

	useEffect(() => {
		fetch("http://localhost:3310/naturiste")
			.then((response) => response.json())
			.then((data) => {
				const extractedSites: NaturistSite[] =
					data.naturist_sites_in_france.map(
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

	// Extraire les notes uniques
	const uniqueRatings = Array.from(new Set(sites.map((site) => site.rating)));

	return (
		<div>
			<h1>Notes des Sites Naturistes</h1>
			<label>
				<select>
					<option value="">Select a Rating</option>
					{uniqueRatings.map((rating, index) => (
						<option key={index} value={rating}>
							{rating} ⭐
						</option>
					))}
				</select>
			</label>
		</div>
	);
}

export default Rating;
