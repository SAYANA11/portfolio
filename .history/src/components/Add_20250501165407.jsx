import React, { useState } from "react";
import "./Add.css";

const Add = ({ works, setWorks }) => {
  const [newWork, setNewWork] = useState({
    title: "",
    description: "",
    images: [], // Store multiple images
  });
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWork({ ...newWork, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    const filePreviews = files.map((file) => URL.createObjectURL(file));
    setNewWork({ ...newWork, images: [...newWork.images, ...files] });
    setImagePreviews([...imagePreviews, ...filePreviews]);
  };

  const addWork = () => {
    if (newWork.title.trim() && newWork.description.trim() && newWork.images.length > 0) {
      setWorks([...works, newWork]); // Add new work to the works array
      setNewWork({ title: "", description: "", images: [] });
      setImagePreviews([]);
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
      <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
      <div className="image-preview-container">
        {imagePreviews.map((preview, index) => (
          <img key={index} src={preview} alt={`Preview ${index}`} className="image-preview" />
        ))}
      </div>
      <button onClick={addWork}>Add Work</button>
    </div>
  );
};

export default Add;