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
					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
					data.naturist_sites_in_france.map((site: { id: any; name: any; rating: any; }) => ({
						id: site.id,
						name: site.name,
						rating: site.rating,
					}));
				setSites(extractedSites);
			})
			.catch((error) =>
				console.error("Erreur lors de la récupération des données :", error),
			);
	}, []);

	return (
		<div>
			<h1>Notes des Sites Naturistes</h1>
			<ul>
				{sites.map((site) => (
					<li key={site.id}>
						<strong>{site.name}</strong>: {site.rating} ⭐
					</li>
				))}
			</ul>
		</div>
	);
}

export default Rating;
