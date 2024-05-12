import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { globalAction } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const { todolist, viewType } = useSelector((state) => state.todo);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const lastTodo = todolist[todolist.length - 1];
  const lastId = lastTodo ? Number(lastTodo.id) : 0; // Parse ID as number

  const newId = lastId + 1;
  const handleAddTodo = () => {
    dispatch(
      globalAction("ADD_TO_DO", {
        id: newId,
        title: "New added",
        content: "check reducer update",
        created: "12 April 2024",
      })
    );
    toast.success("New to do added");
  };

  console.log(todolist, "todolist");

  const handleUpdateViewType = () => {
    dispatch(
      globalAction("CHANGE_VIEW_TYPE", viewType === "grid" ? "list" : "grid")
    );
  };

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <div className="text-white font-bold flex flex-row-reverse items-center gap-3">
            <span className="hidden md:block">Paste Here</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fef9c3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-copy-check"
            >
              <path d="m12 15 2 2 4-4" />
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          </div>
        </Link>
        <div className="flex items-center justify-start bg-white rounded-md p-1 gap-3 flex-1 ms-5 md:mx-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#dfdfdd"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="p-1 outline-none w-20 md:w-full"
          />
        </div>
        <ul className="flex space-x-4 items-center">
          <li>
            <div
              className="note-add-icon hover:bg-[#f8f6f7] rounded-full cursor-pointer group transition-all p-1"
              title="Paste Notes"
              onClick={handleAddTodo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#eaf499"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus group-hover:stroke-yellow-500"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </div>
          </li>
          <li
            className="cursor-pointer hidden md:block"
            title="Change The Layout"
            onClick={handleUpdateViewType}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#eaf499"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-layout-grid"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
          </li>
          <li className="relative">
            <div
              className="avatar w-10 h-10 border-[#fef9c3] border-2 rounded-full overflow-hidden"
              onClick={toggleMenu}
            >
              <img
                src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg"
                className="w-auto cursor-pointer"
              />
            </div>
            {isMenuOpen && (
              <div className="absolute top-18 right-0 m-auto rounded-md w-32 bg-yellow-100 p-2 z-10 flex flex-col gap-1 shadow-md">
                <Link to={"/profile"}>
                  <div className="flex items-center justify-center gap-3 cursor-pointer hover:bg-white p-2 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-user-round"
                    >
                      <circle cx={12} cy={8} r={5} />
                      <path d="M20 21a8 8 0 0 0-16 0" />
                    </svg>
                    <span>Profile</span>
                  </div>
                </Link>
                <div className="flex items-center justify-center gap-3 cursor-pointer hover:bg-white p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-log-out"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1={21} x2={9} y1={12} y2={12} />
                  </svg>

                  <span>Logout</span>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
