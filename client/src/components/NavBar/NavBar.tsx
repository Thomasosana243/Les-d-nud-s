import "./NavBar.css";
import logo from "../../assets/images/ver-bleu-vert.png";

function NavBar() {
	return (
		<>
			<nav>
				<img src={logo} alt="Petit ver vert" />
				<button type="button">Home</button>
			</nav>
		</>
	);
}

export default NavBar;
