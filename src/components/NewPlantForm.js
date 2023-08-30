import React, { useState } from "react";

function NewPlantForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the new plant object
    const newPlant = {
      name,
      image,
      price: parseFloat(price)
    };

    // Make a POST request to json-server
    const response = await fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    });

    if (response.ok) {
      console.log("Plant added successfully!");
      // Reset form
      setName("");
      setImage("");
      setPrice("");
      // Optionally, update the UI or re-fetch the plants list here
    } else {
      console.error("Error adding plant:", response.statusText);
    }
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

