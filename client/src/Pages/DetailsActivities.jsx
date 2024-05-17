import { useEffect, useState } from "react";

function DetailsActivities() {
  const [youtubeID, setYoutubeID] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("../data/activities.json")
      .then((response) => response.json())
      .then((data) => {
        const firstActivity = data[0];
        setYoutubeID(firstActivity.youtubeID);
        setIsLoading(false);
      })
      .catch((error) =>
        console.error("Erreur lors du chargement des activités :", error)
      );
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <iframe
        className="video"
        title="Youtube player"
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
        src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
      ></iframe>
    </>
  );
}

export default DetailsActivities;
