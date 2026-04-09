import { useEffect, useState } from "react";

const API_KEY = "V3YDDvVsrsxh8AcFqRcyQZOV2jV7vabty26y9vIW";

function Apod() {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setApodData(data);
        setLoading(false);
      })
      .catch((err) => console.log("Error : ", err));
  }, []);

  if (loading)
    return <p style={{ padding: "2rem" }}>Loading Today's Image...🔭</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h2 style={{ color: "#a78bfa" }}>{apodData.title}</h2>
      <p style={{ color: "#888", fontSize: "0.9rem" }}>{apodData.date}</p>
      {apodData.media_type === "image" ? (
        <img
          src={apodData.url}
          alt={apodData.title}
          style={{ width: "100%", borderRadius: "12px", margin: "1rem 0" }}
        />
      ) : (
        <iframe
          src={apodData.url}
          title={apodData.title}
          width="100%"
          height="500"
          style={{ borderRadius: "12px", margin: "1rem 0", border: "none" }}
          allowFullScreen
        />
      )}
      <p style={{ lineHeight: "1.8", color: "#ccc" }}>{apodData.explanation}</p>
    </div>
  );
}

export default Apod;
