import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Description from "./pages/Description";

function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3310/naturiste")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <div>
        <Description />
        <ul>
          <li>
            <Link to="/description">Voir la Description</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
