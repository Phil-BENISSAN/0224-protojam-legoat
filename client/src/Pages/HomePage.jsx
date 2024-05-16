import LastRando from "../Components/LastRando";
import RandoCard from "../Components/RandoCard";
import "../Styles/HomePage.css";

function HomePage() {
  return (
    <>
      <h2 className="lastRandoTitle">Ma dernière randonnée</h2>
      <LastRando />
      <section className="cardsRando">
        <RandoCard desc="Une randonnée pure en pleine nature pour une déconnexion des écrans et une reconnexion à la nature." />
      </section>
    </>
  );
}
export default HomePage;
