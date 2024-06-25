import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import notesdata from "./NotesData";
import Cards from "./Cards";

const SearchResult = () => {
  const { term } = useParams();
  const [filterData, setfilterData] = useState([]);

  useEffect(() => {
    const filteredData = notesdata.filter((notes) =>
      notes.title.toLowerCase().includes(term.toLowerCase())
    );
    console.log(filteredData);
    setfilterData(filteredData);
  }, [term]);

  return (
    <section className="max-w-[90%] mx-auto w-[100%] my-5">
      <h1 className="section-title text-white uppercase font-bold">
        Showing result for <span className="text-yellow-300">{term} </span>
      </h1>
      <Cards notesdata={filterData} />
    </section>
  );
};

export default SearchResult;
