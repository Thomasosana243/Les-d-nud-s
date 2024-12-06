import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/ver-bleu-vert.png";

function NavBar() {
  return (
    <>
      <nav>
        <img src={logo} alt="Petit ver vert" />
        <Link to="/">
          <button type="button">Home</button>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
