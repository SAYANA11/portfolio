import React, { useState } from "react";
import "./Add.css";

const Add = ({ addWork }) => {
  const [newWork, setNewWork] = useState({
    title: "",
    description: "",
    images: [],
  });
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWork({ ...newWork, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const fileReaders = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert file to base64
      fileReaders.push(
        new Promise((resolve) => {
          reader.onload = () => resolve(reader.result); // Resolve with base64 string
        })
      );
    });

    Promise.all(fileReaders).then((base64Images) => {
      setNewWork({ ...newWork, images: [...newWork.images, ...base64Images] });
      setImagePreviews([...imagePreviews, ...base64Images]);
    });
  };

  const handleSubmit = () => {
    if (newWork.title.trim() && newWork.description.trim() && newWork.images.length > 0) {
      addWork(newWork); // Send the new work to the JSON server
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
      <button onClick={handleSubmit}>Add Work</button>
    </div>
  );
};

export default Add;