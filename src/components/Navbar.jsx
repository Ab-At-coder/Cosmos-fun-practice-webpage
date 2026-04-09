function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#0a0a1a",
        borderBottom: "1px solid #ffffff22",
      }}
    >
      <h2 style={{ color: "#a78bfa" }}>🚀 Cosmos</h2>
      <div style={{ display: "flex", gap: "2rem" }}>
        <button
          onClick={() => setCurrentPage("apod")}
          style={{
            color: currentPage === "apod" ? "#a78bfa" : "white",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          APOD
        </button>
        <button
          onClick={() => setCurrentPage("iss")}
          style={{
            color: currentPage === "iss" ? "#a78bfa" : "white",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          ISS Tracker
        </button>
        <button
          onClick={() => setCurrentPage("planets")}
          style={{
            color: currentPage === "planets" ? "#a78bfa" : "white",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Planets
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
