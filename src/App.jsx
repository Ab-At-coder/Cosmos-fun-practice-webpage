import { useState } from "react";
import Navbar from "./components/Navbar";
import Apod from "./components/Apod";
import IssTracker from "./components/IssTracker";
import Planets from "./components/Planets";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("apod");

  const renderPage = () => {
    if (currentPage === "apod") return <Apod />;
    if (currentPage === "iss") return <IssTracker />;
    if (currentPage === "planets") return <Planets />;
  };

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main
        style={{
          minHeight: "calc(100vh - 60px)",
          // 100vh = full screen height, minus ~60px for navbar
          // ensures the page always fills the screen even with little content
          padding: "1rem 0",
        }}
      >
        {renderPage()}
      </main>

      {/* simple footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "1.5rem",
          color: "#444",
          fontSize: "0.8rem",
          borderTop: "1px solid #ffffff11",
        }}
      >
        🚀 Cosmos Dashboard — Built with React & NASA APIs
      </footer>
    </div>
  );
}

export default App;
