import { Link } from "react-router-dom";
import RandoCard from "../Components/RandoCard";
import data from "/src/data/data.json";
import { useEffect } from "react";

function NewsRandos() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
			<h2 className="lastRandoTitle">Trouvez votre randonnée</h2>
			<section className="allCardsRando">
				{combinedData.map((item, index) => (
					<Link to={`/randos/${index}`} key={index}>
						<section className="cardsRando">
							<RandoCard
								titleRando={item.titre}
								difficultyRando={item.difficulty}
								img={item.image}
								distanceRando={item.distance}
							/>
						</section>
					</Link>
				))}
			</section>
		</>
	);
}

export default NewsRandos;
