import { useState, useEffect } from "react";
import Location from "../components/Filters/Location";

import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3310/naturiste")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <Location />
    </>
  );
}

export default App;
