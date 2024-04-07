import React from "react";

const Cards = () => {
  return (
    <>
      <div className="card-main-container flex gap-3 justify-start">
        <div className="card-main-container bg-yellow-100 p-2 rounded-md flex-1 max-w-80 my-3 border-dotted border-2 border-black min-h-60">
          <div className="paste-card">
            <div className="card-title font-semibold border-b border-yellow-500">
              We have to download the movie
            </div>
            <div className="card-img">card image</div>
            <div className="card-content">card content</div>
            <div className="card-footer">card footer</div>
          </div>
        </div>
        <div className="card-main-container bg-yellow-100 p-2 rounded-md flex-1 max-w-80 my-3 border-dotted border-2 border-black min-h-60">
          <div className="paste-card">
            <div className="card-title font-semibold border-b border-yellow-500">
              Github A/C Details
            </div>
            <div className="card-img">card image</div>
            <div className="card-content">card content</div>
            <div className="card-footer">card footer</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
