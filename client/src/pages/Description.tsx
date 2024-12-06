import { useState, useEffect } from "react";

interface NaturistProps {
  id: number;
  name: string;
  features: [string];
  website: string;
  rating: number;
  type: string;
  location: {
    city: string;
    region: string;
    country: string;
  };
}

function Description() {
  const [element, setElement] = useState<NaturistProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/naturiste")
      .then((res) => res.json())
      .then((data) => {
        console.log("Données récupérées :", data);
        setElement(data.naturist_sites_in_france);
      })
      .catch((error) =>
        console.error("Erreur de chargement des données :", error)
      );
  }, []);

  return (
    <div>
      <h2>Description du projet</h2>
      {element.map((ouais) => (
        <div>
          <p key={ouais.id}>{ouais.name}</p>
          <p>{ouais.features}</p>
        </div>
      ))}

      <p>
        <strong>title </strong>
        {element.name}
      </p>

      <p></p>
    </div>
  );
}

export default Description;

// function Description() {
//   return (
//     <div>
//       <h2 style={{ backgroundColor: "purple", color: "white" }}>
//         Description du projet
//       </h2>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa id
//         dolorum facere, amet sunt esse cumque vitae vero ipsam commodi earum
//         soluta ullam quibusdam voluptate?
//       </p>
//     </div>
//   );
// }

// export default Description;
