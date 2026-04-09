import { useState, useEffect } from "react";

function IssTracker() {
  const [issData, setIssData] = useState(null);
  // stores the ISS data object from the API, starts as null since we have nothing yet

  const [loading, setLoading] = useState(true);
  // tracks whether we're still fetching for the first time

  const fetchISS = () => {
    // we define fetch logic as a separate function (not directly in useEffect)
    // because we want to call it repeatedly every 5 seconds
    fetch("https://api.wheretheiss.at/v1/satellites/25544")
      .then((res) => res.json())
      .then((data) => {
        setIssData(data); // store the received data in state
        setLoading(false); // first load is done, stop showing loading message
      })
      .catch((err) => console.log("ISS fetch error:", err));
  };

  useEffect(() => {
    fetchISS();
    // call immediately when component loads so we don't wait 5 seconds for first data

    const interval = setInterval(fetchISS, 5000);
    // setInterval calls fetchISS every 5000ms (5 seconds) automatically
    // this is what makes the coordinates update in real time

    return () => clearInterval(interval);
    // this is a CLEANUP function - when you navigate away from ISS page,
    // React runs this to stop the interval so it doesn't keep running in background
    // without this, you'd have a memory leak
  }, []);

  if (loading) return <p style={{ padding: "2rem" }}>Locating ISS... 🛸</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h2 style={{ color: "#a78bfa" }}>🛸 ISS Live Tracker</h2>
      <p style={{ color: "#888" }}>Updates every 5 seconds</p>

      {/* stat cards row */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          margin: "1.5rem 0",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>
          <p style={labelStyle}>Latitude</p>
          <p style={valueStyle}>{issData.latitude.toFixed(4)}°</p>
          {/* .toFixed(4) rounds the long decimal to 4 places - purely cosmetic */}
        </div>

        <div style={cardStyle}>
          <p style={labelStyle}>Longitude</p>
          <p style={valueStyle}>{issData.longitude.toFixed(4)}°</p>
        </div>

        <div style={cardStyle}>
          <p style={labelStyle}>Altitude</p>
          <p style={valueStyle}>{issData.altitude.toFixed(1)} km</p>
        </div>

        <div style={cardStyle}>
          <p style={labelStyle}>Velocity</p>
          <p style={valueStyle}>{issData.velocity.toFixed(1)} km/h</p>
        </div>
      </div>

      {/* map using OpenStreetMap - completely free, no API key needed */}
      {/* we build the URL by injecting the live lat/lng into it */}
      <iframe
        title="ISS Map"
        width="100%"
        height="450"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${issData.longitude - 20},${issData.latitude - 20},${issData.longitude + 20},${issData.latitude + 20}&layer=mapnik&marker=${issData.latitude},${issData.longitude}`}
        style={{ border: "none", borderRadius: "12px" }}
      />
      {/* bbox defines the visible area of the map - we go ±20 degrees around ISS position */}
      {/* marker places a pin exactly at the ISS coordinates */}
    </div>
  );
}

// defined outside the component so they don't get recreated on every render
// just reusable style objects for the stat cards
const cardStyle = {
  backgroundColor: "#0a0a1a",
  border: "1px solid #ffffff22",
  borderRadius: "12px",
  padding: "1rem 1.5rem",
  minWidth: "150px",
};

const labelStyle = {
  color: "#888",
  fontSize: "0.8rem",
  margin: "0 0 0.3rem 0",
};

const valueStyle = {
  color: "#a78bfa",
  fontSize: "1.4rem",
  fontWeight: "bold",
  margin: 0,
};

export default IssTracker;
