import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col ">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
