import React from "react";

function Card({ word, definition, example, notes, status, index, onDelete }) {
  const onEdit = () => {
    localStorage.setItem("editIndex", JSON.stringify(index));
    window.location.href = "/edit";
  };
  return (
    <>
      <div className="bg-green-100 shadow-lg rounded-2xl p-5 border border-gray-200 flex flex-col h-full hover:-translate-y-1 transition">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-bold text-gray-800 capitalize">
            {word}
          </h2>
          <span
            className={`px-3 py-1 text-sm font-semibold rounded-full ${
              status === "New"
                ? "bg-blue-400"
                : status === "Learned"
                ? "bg-green-500"
                : status === "Review"
                ? "bg-yellow-400"
                : "bg-gray-300"
            }`}
          >
            {status}
          </span>
        </div>
        <div className="flex-1">
          <div className="mb-3">
            <p className="font-semibold text-gray-500">Definition:</p>
            <p className="break-words font-medium text-gray-800">
              {definition}
            </p>
          </div>
          <div className="mb-3">
            <p className="font-semibold text-gray-500">Example:</p>
            <p className="break-words text-gray-800 ">{example}</p>
          </div>
          {notes && (
            <div>
              <p className="font-semibold text-gray-500">Notes</p>
              <p className="break-words">{notes}</p>
            </div>
          )}
        </div>
        <div className="flex justify-end gap-3 mt-5">
          <button
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
            onClick={onEdit}
          >
            Edit
          </button>
          <button
            className="px-3 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
