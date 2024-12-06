import { useState, useEffect } from "react";
function Description() {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const [element, setElement] = useState<any>(null);
	useEffect(() => {
		fetch("http://localhost:3310/naturiste")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setElement(data[0]);
			})
			.catch((error) =>
				console.error("Erreur de chargement des données :", error),
			);
	}, []);
	if (!element) {
		return <p>Loading...</p>;
	}
	return (
		<div>
			<h2 style={{ backgroundColor: "purple", color: "white" }}>
				Description du projet
			</h2>
			<p>{element.description}</p>
			<p>
				<strong>Titre: </strong>
				{element.title}
			</p>
			<p>
				<strong>Autre Info: </strong>
				{element.otherInfo}
			</p>
		</div>
	);
}
export default Description;
