import LastRando from "../Components/LastRando";
import RandoCard from "../Components/RandoCard";
import "../Styles/HomePage.css";

function HomePage() {
  return (
    <>
      <h2 className="lastRandoTitle">Ma dernière randonnée</h2>
      <LastRando />
      <h2 className="lastRandoTitle">Randonées pour vous</h2>
      <section className="cardsRando">
        <RandoCard
          desc="Une randonnée pure en pleine nature pour une déconnexion des écrans et une reconnexion à la nature."
          typeDesc="Montagne"
        />
        <RandoCard
          desc="Une randonnée pure en pleine nature pour une déconnexion des écrans et une reconnexion à la nature."
          typeDesc="Montagne"
        />
        <RandoCard
          desc="Une randonnée pure en pleine nature pour une déconnexion des écrans et une reconnexion à la nature."
          typeDesc="Montagne"
        />
        <RandoCard
          desc="Une randonnée pure en pleine nature pour une déconnexion des écrans et une reconnexion à la nature."
          typeDesc="Montagne"
        />
      </section>
    </>
  );
}
export default HomePage;
