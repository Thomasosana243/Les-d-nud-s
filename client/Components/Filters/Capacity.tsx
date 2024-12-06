import React, { useEffect, useState } from "react";

interface NaturistCapacity {
  id: number;
  name: string;
  location: {
    city: string;
    region: string;
  };
  type: string;
  Capacity: number; // Notez le 'C' majuscule ici
}

function Capacity() {
  const [capacities, setCapacities] = useState<NaturistCapacity[]>([]);
  const [selectedCapacity, setSelectedCapacity] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:3310/naturiste")
      .then((res) => res.json())
      .then((data) => setCapacities(data.naturist_sites_in_france))
      .catch((error) =>
        console.error("Erreur lors de la réception des données : ", error)
      );
  }, []);

  const uniqueCapacities = Array.from(
    new Set(capacities.map((site) => site.Capacity))
  ).sort((a, b) => a - b); // Trie les capacités par ordre croissant

  const filteredSites = selectedCapacity
    ? capacities.filter((site) => site.Capacity.toString() === selectedCapacity)
    : [];

  return (
    <>
      <label>
        <select
          onChange={(e) => setSelectedCapacity(e.target.value)}
          value={selectedCapacity}
        >
          <option value="">Sélectionnez une capacité</option>
          {uniqueCapacities.map((capacity) => (
            <option key={capacity} value={capacity.toString()}>
              {capacity} personnes
            </option>
          ))}
        </select>
      </label>

      {selectedCapacity && (
        <ul>
          {filteredSites.map((site) => (
            <li key={site.id}>
              {site.name} - {site.type} - Capacité: {site.Capacity}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Capacity;
