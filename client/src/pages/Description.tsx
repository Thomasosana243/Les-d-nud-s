import NavBar from "../components/NavBar/NavBar";

const Description = () => {
	return (
		<section>
			<NavBar />
			<div>
				<h2 style={{ backgroundColor: "red" }}>Description du projet</h2>
				<p>Voici la description de mon projet React avec TypeScript.</p>
			</div>
		</section>
	);
};

export default Description;
