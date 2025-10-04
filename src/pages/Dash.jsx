import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Card from "../components/Card";
import { Link } from "react-router-dom";
function Dash() {
  const [words, setWords] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");
  const [sortedData, setSortedData] = useState("asc");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
      window.location.href = "/login";
      return null;
    }
    const savedWords = JSON.parse(localStorage.getItem("words")) || [];
    setWords(savedWords);
  }, []);

  const deleteWord = (index) => {
    const updatedWords = [...words];
    updatedWords.splice(index, 1);
    setWords(updatedWords);
    localStorage.setItem("words", JSON.stringify(updatedWords));
  };

  const filterWords = filterStatus
    ? words.filter((word) => word.stat === filterStatus)
    : words;

  const sortedCards = [...filterWords].sort((a, b) => {
    const wordA = a.word.toLowerCase();
    const wordB = b.word.toLowerCase();
    if (sortedData === "asc") {
      if (wordA > wordB) return 1;
      if (wordA < wordB) return -1;
      return 0;
    } else {
      if (wordA < wordB) return 1;
      if (wordA > wordB) return -1;
      return 0;
    }
  });
  return (
    <>
      <section>
        <div className="bg-green-50 mt-8 flex items-center flex-col justify-center p-8 rounded-lg shadow-md w-full max-w-[100%]">
          <h2 className="text-xl font-semibold mb-3">Add a Word</h2>
          <Link to={"/add"}>
            <button className="bg-green-400 w-[60ch] px-6 py-2 rounded-lg cursor-pointer shadow hover:bg-green-500 hover:text-white">
              ADD
            </button>
          </Link>
        </div>
      </section>
      <h2 className="text-center mt-6 text-4xl font-semibold uppercase ">
        Your Vault
      </h2>
      <div className="flex w-full items-center justify-center">
        <div className=" w-[90%] p-2 flex items-center justify-end gap-3 rounded-xl  mx-auto">
          <div className="flex items-center gap-3">
            <label>Filter By:</label>
            <select
              name=""
              id=""
              className=" px-4 py-2 border rounded bg-green-200"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">All</option>
              <option value="New">New</option>
              <option value="Learned">Learned</option>
              <option value="Review">Review</option>
            </select>
            <label>Sort By:</label>
            <select
              name=""
              id=""
              className=" px-4 py-2 border rounded bg-green-200"
              value={sortedData}
              onChange={(e) => setSortedData(e.target.value)}
            >
              <option value="asc">A to Z</option>
              <option value="desc">Z to A</option>
            </select>
          </div>
        </div>
      </div>
      <section className="p-6 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCards.map((item, index) => (
          <Card
            key={index}
            index={index}
            word={item.word}
            definition={item.definition}
            example={item.example}
            notes={item.notes}
            status={item.stat}
            onDelete={() => deleteWord(index)}
          />
        ))}
      </section>
    </>
  );
}
export default Dash;
