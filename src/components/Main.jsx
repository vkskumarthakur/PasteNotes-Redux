import React from "react";
import Cards from "./Cards";
import "../App.css";

const Main = () => {
  return (
    <main>
      <section className="max-w-[90%] mx-auto w-[100%] my-5">
        <h1 className="section-title text-white uppercase font-bold">
          your recent pasted notes.
        </h1>
        <Cards />
      </section>
    </main>
  );
};

export default Main;
