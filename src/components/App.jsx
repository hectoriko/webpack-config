import "../styles/index.scss";
import Recipes from "./Recipes";
import sword from "../images/swc-sword.png";
import swordSvg from "../images/sword.svg";
// import React from "react";

function App() {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, React</h1>
        </section>
        <img src={sword} alt="A sword" width="250" />
        <img src={swordSvg} alt="A sword" width="250" />
        <Recipes />
      </main>
    </>
  );
}

export default App;
