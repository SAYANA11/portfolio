import React, { useState } from "react";
import "./Add.css";

const Add = ({ works, setWorks }) => {
  const [newWork, setNewWork] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWork({ ...newWork, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewWork({ ...newWork, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const addWork = () => {
    if (newWork.title.trim() && newWork.description.trim() && newWork.image) {
      setWorks([...works, newWork]); // Add new work to the works array
      setNewWork({ title: "", description: "", image: null });
      setImagePreview(null);
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
      {imagePreview && (
        <div className="image-preview">
          <img src={imagePreview} alt="Preview" />
        </div>
      )}
      <button onClick={addWork}>Add Work</button>
    </div>
  );
};

export default Add;