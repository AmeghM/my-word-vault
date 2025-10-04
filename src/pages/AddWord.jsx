import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

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
      alert("Please fill the fields");
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

    alert("Word added successfully!");
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
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "60ch" } }}
        >
          <TextField
            label="Add the word"
            color="success"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </Box>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "60ch" } }}
        >
          <TextField
            label="Definition"
            color="success"
            multiline
            rows={2}
            value={definition}
            onChange={(e) => setDefinition(e.target.value)}
          />
        </Box>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "60ch" } }}
        >
          <TextField
            label="Example"
            color="success"
            multiline
            rows={2}
            value={example}
            onChange={(e) => setExample(e.target.value)}
          />
        </Box>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "60ch" } }}
        >
          <TextField
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
        </Box>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "60ch" } }}
        >
          <TextField
            label="Notes (optional)"
            color="success"
            multiline
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Box>
        <button
          className="bg-green-400 w-[60ch] px-6 py-2 rounded-lg cursor-pointer mt-3"
          onClick={addWord}
        >
          ADD
        </button>
        <button
          className="bg-green-400 w-[60ch] px-6 py-2 rounded-lg cursor-pointer mt-3"
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
