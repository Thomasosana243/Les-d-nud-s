interface featuresProps {
	features: {
		id: number;
		name: string;
		// location: {
		// 	city: string;
		// 	region: string;
		// 	country: string;
		// };
		features: [string, string, string];
		// website: string;
		// rating: number;
		// type: string;
		// image: string;
	};
}

function Features({ features }: featuresProps) {
	return (
		<>
			<div>
				<p>{features.name}</p>
			</div>
		</>
	);
}

export default Features;
