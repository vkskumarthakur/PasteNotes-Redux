import React from "react";
import notesdata from "./NotesData";

const Cards = () => {
  return (
    <>
      <div className="flex gap-3 justify-start flex-wrap lg:flex-row md:flex-col">
        {notesdata.map((notes, key) => (
          <div
            key={notes.id}
            className="card-main-container bg-yellow-100 p-2 rounded-md w-full md:flex-1 md:min-w-80 my-3  border-2 border-black min-h-40 relative"
          >
            <div className="paste-card" style={{ minHeight: "inherit" }}>
              <div className="card-title font-bold border-b border-dashed border-yellow-500 flex justify-between items-center group py-2">
                <p className="text-center w-full">{notes.title}</p>
                <div
                  className="rounded-full cursor-pointer group transition-all delay-75 p-2 hover:bg-white"
                  title="Delete Note"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-trash-2 group-hover:stroke-black"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                  </svg>
                </div>
              </div>
              <div
                className="card-content border-b border-gray border-dashed"
                style={{ minHeight: "inherit" }}
              >
                <p className="p-2">{notes.content}</p>
              </div>
              <div className="card-footer mt-auto text-center text-gray-400 font-thin text-xs">
                {notes.created}
              </div>
            </div>
            <div className="paste-pin w-4 h-4 rounded-full bg-red-500 absolute top-1 left-1"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
