import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Styles/Activities.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const activityAsmr = "Img/activity-asmr.jpg";
const activityChamane = "Img/activity-chamane.jpg";
const activityEat = "Img/activity-eat.jpg";
const activityMeditation = "Img/activity-meditation.jpg";
const activityPipeau = "Img/activity-pipeau.jpg";
const activityReading = "Img/activity-reading.jpg";
const activitySong = "Img/activity-song-oasis.jpg";
const activityWork = "Img/activity-work.jpg";
const activityYoga = "Img/activity-yoga.jpg";
const activityGoat = "Img/activity-goat.jpg";
const activityNeighbor = "Img/activity-neighbor.jpg";
const activityTurtle = "Img/activity-turtle.jpg";

function Activites() {
  return (
    <>
      <h1 className="title-activities">
        Cliquez sur l&apos;activité qui vous intéresse pour y accéder :
      </h1>
      <section className="swiper-container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
			<SwiperSlide>
				<article className="slide-content">
					<img src={activityGoat} alt="" />
					<p>Course de chèvre</p>
				</article>
			</SwiperSlide>
			<SwiperSlide>
				<article className="slide-content">
					<img src={activityNeighbor} alt="" />
					<p>Adopte un randonneur</p>
				</article>
			</SwiperSlide>
			<SwiperSlide>
				<article className="slide-content">
					<img src={activityTurtle} alt="" />
					<p>Natation avec des tortues</p>
				</article>
			</SwiperSlide>
          <SwiperSlide>
            <article className="slide-content">
              <img src={activityAsmr} alt="" />
              <p>Vidéo ASMR pour se détendre</p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="slide-content">
              <img src={activityChamane} alt="" />
              <p>Séance de chamanisme</p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="slide-content">
              <img src={activityEat} alt="" />
              <p>Pique-nique dans les champs</p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="slide-content">
              <img src={activityMeditation} alt="" />
              <p>Podcast de méditation</p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="slide-content">
              <img src={activityPipeau} alt="" />
              <p>Initiation au pipeau</p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="slide-content">
              <img src={activityReading} alt="" />
              <p>Recommandation de lecture</p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="slide-content">
              <img src={activitySong} alt="" />
              <p>Musique à écouter autour d&apos;un feu de camp</p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="slide-content">
              <img src={activityWork} alt="" />
              <p>Entretien d&apos;embauche relaxant</p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="slide-content">
              <img src={activityYoga} alt="" />
              <p>Apprendre les postures de Yoga</p>
            </article>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Activites;
