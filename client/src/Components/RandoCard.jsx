import "../Styles/RandoCard.css";

function RandoCard({ desc, typeDesc }) {
  return (
    <>
      <section className="cardRando">
        <img
          className="randoDispoPicture"
          src="/Img/daniel-angele-Joo3UBw789Q-unsplash.jpg"
          alt=""
        />
        <p className="typeDesc">{typeDesc}</p>
        <p className="desc">{desc}</p>
      </section>
    </>
  );
}
export default RandoCard;
