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

function Camping({ naturiste }: naturisteProps) {
	return (
		<>
			<div>
				<p>
					{naturiste.name}
					{naturiste.location.city}
					{naturiste.location.region}
					{naturiste.location.country}
					{naturiste.website}
					{naturiste.rating}
					{naturiste.image}
					{naturiste.type}
				</p>
			</div>
		</>
	);
}

export default Camping;
