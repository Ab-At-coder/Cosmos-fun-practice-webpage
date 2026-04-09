// no imports needed since we're not using any hooks this time
// our data is static so no fetching or state required

const planetsData = [
  // this is our local "database" of planet info
  // each object represents one planet with consistent properties
  {
    name: "Mercury",
    emoji: "⚫",
    diameter: "4,879 km",
    distanceFromSun: "57.9 million km",
    orbitalPeriod: "88 days",
    moons: 0,
    description:
      "The smallest planet and closest to the Sun. A year on Mercury is just 88 Earth days, but a day lasts 59 Earth days.",
    color: "#b5b5b5",
  },
  {
    name: "Venus",
    emoji: "🟡",
    diameter: "12,104 km",
    distanceFromSun: "108.2 million km",
    orbitalPeriod: "225 days",
    moons: 0,
    description:
      "The hottest planet despite not being closest to the Sun. Its thick CO₂ atmosphere creates a runaway greenhouse effect reaching 465°C.",
    color: "#e8cda0",
  },
  {
    name: "Earth",
    emoji: "🌍",
    diameter: "12,742 km",
    distanceFromSun: "149.6 million km",
    orbitalPeriod: "365 days",
    moons: 1,
    description:
      "Our home. The only known planet to harbor life, with liquid water on its surface and a protective magnetic field.",
    color: "#4fa3e0",
  },
  {
    name: "Mars",
    emoji: "🔴",
    diameter: "6,779 km",
    distanceFromSun: "227.9 million km",
    orbitalPeriod: "687 days",
    moons: 2,
    description:
      "The Red Planet. Home to Olympus Mons — the largest volcano in the solar system at 22km high, nearly 3x the height of Everest.",
    color: "#c1440e",
  },
  {
    name: "Jupiter",
    emoji: "🟠",
    diameter: "139,820 km",
    distanceFromSun: "778.5 million km",
    orbitalPeriod: "12 years",
    moons: 95,
    description:
      "The largest planet — so big that all other planets could fit inside it. The Great Red Spot is a storm that has raged for over 350 years.",
    color: "#c88b3a",
  },
  {
    name: "Saturn",
    emoji: "🪐",
    diameter: "116,460 km",
    distanceFromSun: "1.43 billion km",
    orbitalPeriod: "29 years",
    moons: 146,
    description:
      "Famous for its stunning ring system made of ice and rock. Saturn is so light it would float in water — it's less dense than water.",
    color: "#e4d191",
  },
  {
    name: "Uranus",
    emoji: "🔵",
    diameter: "50,724 km",
    distanceFromSun: "2.87 billion km",
    orbitalPeriod: "84 years",
    moons: 28,
    description:
      "Rotates on its side with an axial tilt of 98°. It's an ice giant with the coldest planetary atmosphere in the solar system at -224°C.",
    color: "#7de8e8",
  },
  {
    name: "Neptune",
    emoji: "🫐",
    diameter: "49,244 km",
    distanceFromSun: "4.5 billion km",
    orbitalPeriod: "165 years",
    moons: 16,
    description:
      "The windiest planet with speeds reaching 2,100 km/h. One year on Neptune lasts 165 Earth years — it completed its first orbit since discovery in 2011.",
    color: "#5b7fde",
  },
];

function Planets() {
  return (
    <div style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h2 style={{ color: "#a78bfa" }}>🪐 Planet Explorer</h2>
      <p style={{ color: "#888", marginBottom: "2rem" }}>
        Our Solar System's 8 planets
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          // auto-fill means "fit as many columns as possible"
          // minmax(280px, 1fr) means each column is at least 280px wide but can grow
          // this makes the grid automatically responsive - no media queries needed!
          gap: "1.5rem",
        }}
      >
        {planetsData.map((planet) => (
          // .map() loops through each planet object and returns a card for it
          // 'planet' is the current item in each iteration, like a for loop variable

          <div
            key={planet.name}
            style={{
              // key is REQUIRED by React when rendering lists
              // it helps React track which item is which when the list updates
              // we use planet.name since it's unique for each planet
              backgroundColor: "#0a0a1a",
              border: `1px solid ${planet.color}44`,
              // we use the planet's own color for its border - the '44' at the end
              // is hex opacity (about 27% transparent) so it's subtle
              borderRadius: "16px",
              padding: "1.5rem",
              transition: "transform 0.2s",
              // smooth animation when we add hover effect
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <span style={{ fontSize: "2rem" }}>{planet.emoji}</span>
              <h3 style={{ color: planet.color, margin: 0 }}>{planet.name}</h3>
              {/* each planet's name renders in its own unique color */}
            </div>

            <p
              style={{
                color: "#aaa",
                fontSize: "0.9rem",
                lineHeight: "1.6",
                marginBottom: "1rem",
              }}
            >
              {planet.description}
            </p>

            {/* stat rows */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <div style={statRow}>
                <span style={statLabel}>Diameter</span>
                <span style={statValue}>{planet.diameter}</span>
              </div>

              <div style={statRow}>
                <span style={statLabel}>From Sun</span>
                <span style={statValue}>{planet.distanceFromSun}</span>
              </div>

              <div style={statRow}>
                <span style={statLabel}>Orbital Period</span>
                <span style={statValue}>{planet.orbitalPeriod}</span>
              </div>

              <div style={statRow}>
                <span style={statLabel}>Moons</span>
                <span style={statValue}>{planet.moons}</span>
              </div>
            </div>
          </div>
        ))}
        {/* this ))} closes: the div, the .map() callback, and the .map() call */}
      </div>
    </div>
  );
}

const statRow = {
  display: "flex",
  justifyContent: "space-between",
  borderTop: "1px solid #ffffff11",
  paddingTop: "0.4rem",
};

const statLabel = {
  color: "#666",
  fontSize: "0.8rem",
};

const statValue = {
  color: "#ddd",
  fontSize: "0.85rem",
  fontWeight: "bold",
};

export default Planets;
