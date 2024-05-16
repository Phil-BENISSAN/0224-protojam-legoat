import { Link } from "react-router-dom";
import LastRando from "../Components/LastRando";
import RandoCard from "../Components/RandoCard";
import data from "/src/data/data.json";
import "../Styles/HomePage.css";

function HomePage() {
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
      <h2 className="lastRandoTitle">Ma dernière randonnée</h2>
      <LastRando />
      <h2 className="lastRandoTitle">Randonées pour vous</h2>
      <section className="allCardsRando">
        {combinedData.slice(0, 20).map((item, index) => (
          <Link to={`/randos/${index}`}>
            <section key={index} className="cardsRando">
              <RandoCard
                titleRando={item.titre}
                difficultyRando={item.difficulty}
                img={item.image}
                distanceRando={item.distance}
              />
            </section>
          </Link>
        ))}
        <Link to="/news-randos" className="link">
          <button class="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              ></path>
            </svg>

            <div class="text">PLUS</div>
          </button>
        </Link>
      </section>
    </>
  );
}
export default HomePage;
