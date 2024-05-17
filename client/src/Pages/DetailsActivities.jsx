import { useEffect, useState } from "react";
import activitiesData from "../data/activities.json";
import { useParams } from "react-router-dom";
import "../Styles/DetailsActivities.css";

function DetailsActivities() {
  const { id } = useParams();
  const [youtubeID, setYoutubeID] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const firstActivity = activitiesData[id];
    setYoutubeID(firstActivity.youtubeID);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <section className="video-section">
      <iframe
        className="video-player"
        title="Youtube player"
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
        src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
      ></iframe>
    </section>
  );
}

export default DetailsActivities;
