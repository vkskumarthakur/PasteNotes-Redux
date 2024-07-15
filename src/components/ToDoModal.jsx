// TodoModal.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { globalAction } from "../Redux/action";
import toast from "react-hot-toast";

const TodoModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = Date.now();
    dispatch(
      globalAction("ADD_TO_DO", {
        id: newId,
        title,
        content,
        created: new Date().toLocaleDateString(),
      })
    );
    toast.success("New to-do added");
    onClose();
    setTitle = ("");
    setContent = ("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-yellow-100 p-4 rounded-md w-[30%] m-auto min-h-60">
        <div className="card-title font-bold border-b border-dashed border-yellow-500 flex justify-start items-center gap-3 py-3">
        <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
        <h2 className="text-xl">Add New Note</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="py-4">
            <label className="block text-base font-medium text-gray-700 pb-2"> Note Title </label>
            <input
              type="text"
              className="mt-1 block w-full border-0 outline-none rounded-md py-2 px-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="py-4">
            <label className="block text-base font-medium text-gray-700 pb-2"> Note </label>
            <textarea
              className="mt-1 block w-full border-0 outline-none py-2 px-3"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 bg-gray-500 text-white py-2 px-4 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-800 text-white py-2 px-4 rounded-md"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoModal;
