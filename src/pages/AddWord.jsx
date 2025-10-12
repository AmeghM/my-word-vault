import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function AddWord() {
  const status = [
    { value: "New", label: "New" },
    { value: "Learned", label: "Learned" },
    { value: "Review", label: "Reviewing" },
  ];

  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [example, setExample] = useState("");
  const [stat, setStatus] = useState("New");
  const [notes, setNotes] = useState("");

  const addWord = (e) => {
    e.preventDefault();

    if (!word || !definition || !example || !stat) {
      toast.warn("Please fill all required fields!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    const newWord = { word, definition, example, stat, notes };
    const savedWords = JSON.parse(localStorage.getItem("words")) || [];
    const updatedWords = [...savedWords, newWord];

    localStorage.setItem("words", JSON.stringify(updatedWords));

    // clear all
    setWord("");
    setDefinition("");
    setExample("");
    setStatus("New");
    setNotes("");

    toast.success("Word Added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    window.location.href = "/dash";
  };
  const clearInput = () => {
    setWord("");
    setDefinition("");
    setExample("");
    setStatus("New");
    setNotes("");
  };

  return (
    <section>
      <div className="flex items-center flex-col justify-center p-8 rounded-lg shadow-lg w-full max-w-[100%]">
        <div className="w-full max-w-[60ch] mx-auto mb-4">
          <TextField
            fullWidth
            label="Add the word"
            color="success"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </div>
        <div className="w-full max-w-[60ch] mx-auto mb-4">
          <TextField
            fullWidth
            label="Definition"
            color="success"
            multiline
            rows={2}
            value={definition}
            onChange={(e) => setDefinition(e.target.value)}
          />
        </div>
        <div className="w-full max-w-[60ch] mx-auto mb-4">
          <TextField
            fullWidth
            label="Example"
            color="success"
            multiline
            rows={2}
            value={example}
            onChange={(e) => setExample(e.target.value)}
          />
        </div>
        <div className="w-full max-w-[60ch] mx-auto mb-4">
          <TextField
            fullWidth
            select
            label="Select"
            value={stat}
            onChange={(e) => setStatus(e.target.value)}
            helperText="Please select the status"
          >
            {status.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="w-full max-w-[60ch] mx-auto mb-4">
          <TextField
            fullWidth
            label="Notes (optional)"
            color="success"
            multiline
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <button
          className="bg-green-400 w-full sm:w-[40ch] md:w-[50ch] lg:w-[60ch] px-6 py-2 rounded-lg cursor-pointer shadow hover:bg-green-500 hover:text-white"
          onClick={addWord}
        >
          ADD
        </button>
        <button
          className="bg-red-400 w-full sm:w-[40ch] md:w-[50ch] lg:w-[60ch] px-6 py-2 rounded-lg cursor-pointer shadow hover:bg-red-500 hover:text-white mt-4"
          onClick={clearInput}
        >
          Clear All
        </button>
        <Link to="/dash">
          <button className="mt-4 px-4 py-2 bg-gray-400 text-white rounded-lg cursor-pointer">
            Back
          </button>
        </Link>
      </div>
    </section>
  );
}

export default AddWord;
