import React, { useState } from "react";
import "./Add.css";

const Add = ({ works, setWorks }) => {
  const [newWork, setNewWork] = useState({
    title: "",
    description: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWork({ ...newWork, [name]: value });
  };

  const handleImageUpload = (e) => {
    setNewWork({ ...newWork, image: e.target.files[0] });
  };

  const addWork = () => {
    if (newWork.title.trim() && newWork.description.trim() && newWork.image) {
      setWorks([...works, newWork]);
      setNewWork({ title: "", description: "", image: null });
    }
  };

  return (
    <div className="add-container">
      <h2>Add a New Work</h2>
      <input
        type="text"
        name="title"
        placeholder="Enter work title"
        value={newWork.title}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        placeholder="Enter work description"
        value={newWork.description}
        onChange={handleInputChange}
      />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={addWork}>Add Work</button>
    </div>
  );
};

export default Add;