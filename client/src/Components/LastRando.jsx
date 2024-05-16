import "../Styles/LastRando.css";

function LastRando() {
  return (
    <>
      <section className="parentImage">
        <div className="card">
          <img
            className="blob"
            src="/Img/magicpattern-blob-1715857025168.png"
            alt=""
          />
          <img
            className="blob2"
            src="/Img/magicpattern-blob-1715857025168.png"
            alt=""
          />
          <img className="lastRandoPicture" src="/Img/lastRandoPicture.png" alt="" />
          <div className="textContainer">
            <h3 className="dateRando">Randonnée du 16/05/2014</h3>
            <p>distance : 15km</p>
            <p>durée : 2:01:56</p>
            <p>heure de départ : 10h22</p>
            <p>heure d'arrivée : 11h23</p>
          </div>
          <div className="card-inner"></div>
        </div>
      </section>
    </>
  );
}
export default LastRando;
