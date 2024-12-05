import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import "./App.css";

import Description from "./pages/Description";
import Rating from "./components/Rating";

function App() {
	return (
		<>
			<main>
				<NavBar />
				<div>
					<Rating />
					<Description />
					<ul>
						<li>
							<Link to="/description">Voir la Description</Link>
						</li>
					</ul>
				</div>
				<Footer />
			</main>
		</>
	);
}

export default App;
