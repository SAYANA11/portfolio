import React, { useState } from "react";
import "./Add.css";

const Add = ({ works, setWorks }) => {
  const [newWork, setNewWork] = useState("");

  const addWork = () => {
    if (newWork.trim()) {
      setWorks([...works, newWork]);
      setNewWork("");
    }
  };

  return (
    <div className="add-container">
      <h2>Add a New Work</h2>
      <input
        type="text"
        placeholder="Enter work title"
        value={newWork}
        onChange={(e) => setNewWork(e.target.value)}
      />
      <button onClick={addWork}>Add Work</button>
    </div>
  );
};

export default Add;