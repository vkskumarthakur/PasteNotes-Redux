import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import SearchResult from "./components/SearchResult";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col ">
      <Router>
        <Navbar />
        <Routes>
          {/* <Main /> */}
          <Route path="/" element={<Main />} />
          <Route path="profile" element={<Profile />} />
          <Route path="search/:term" element={<SearchResult />} />
        </Routes>
      </Router>
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
