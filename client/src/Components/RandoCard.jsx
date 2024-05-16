import "../Styles/RandoCard.css";

function RandoCard({ desc, typeDesc }) {
  return (
    <>
      <div class="cardRando">
        <div class="card-image">
          <img
            className="randoPicture"
            src="/Img/daniel-angele-Joo3UBw789Q-unsplash.jpg"
            alt=""
          />
        </div>
        <div class="category">{typeDesc}</div>
        <div class="heading">{desc}</div>
      </div>
    </>
  );
}
export default RandoCard;
