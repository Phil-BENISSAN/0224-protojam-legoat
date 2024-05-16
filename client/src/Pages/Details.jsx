import { useParams } from "react-router-dom";
import RandoCard from "../Components/RandoCard";
import data from "/src/data/data.json";

function DetailsRandos() {
  const { id } = useParams();
  const combinedData = Object.keys(data.Name).map((key) => ({
    name: data.Name[key],
    town: data.Town[key],
    type: data.Types[key],
    distance: data.Distance[key],
    time: data.Time[key],
    difficulty: data.Difficulty[key],
    image: data.Image[key],
    titre: data.Titre[key],
    prix: data.Prix[key],
    departement: data.Departement[key],
  }));
  return (
    <>
      <h1>hello from {id}</h1>
      <RandoCard
        titleRando={data.titre}
        difficultyRando={data.difficulty}
        img={data.image}
        distanceRando={data.distance}
      />
    </>
  );
}

export default DetailsRandos;
