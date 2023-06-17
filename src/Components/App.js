import React from "react";
import Header from "./Header";
//import AboutUs from "./AboutUs";
import Footer from "./Footer";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <a href="https://www.linkedin.com/in/vishakhaghabroo/" target="_blank" rel="noopener noreferrer">
        <button>Search Your Place</button>
      </a>
    </div>
  );
}
export default App;

