interface naturisteProps {
  naturiste: {
    id: number;
    name: string;
    location: {
      city: string;
      region: string;
      country: string;
    };
    features: [string, string, string];
    website: string;
    rating: number;
    type: string;
    image: string;
  };
}

function Camping({ naturiste }: naturisteProps) {
  return (
    <>
      <div className="camping">
        <img src={naturiste.image} alt={naturiste.name} />
        <ul className="paragraphe">
          <li>Nom : {naturiste.name}</li>
          <li>Ville : {naturiste.location.city}</li>
          <li>Région : {naturiste.location.region}</li>
          <li>Pays : {naturiste.location.country}</li>
          <li>Site : {naturiste.website}</li>
          <li>Etoiles : {naturiste.rating}</li>
          <li>Type : {naturiste.type}</li>
        </ul>
      </div>
    </>
  );
}

export default Camping;
