import React from "react";
import Header from "./Header";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <a href="https://react.school" target="_blank" rel="noopener noreferrer">
        <button>Search Your Place</button>
      </a>
      <AboutUs />
    </div>
  );
}
export default App;
