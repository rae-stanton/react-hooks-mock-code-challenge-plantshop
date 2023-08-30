import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ searchQuery }) {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(setPlants);
  }, []);

  function deletePlant(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setPlants((currentPlants) => currentPlants.filter((plant => plant.id !== id)))
      }
    })
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ul className="cards">
      {filteredPlants.map((plant) => (
        <PlantCard
          key={plant.id}
          id={plant.id}
          name={plant.name}
          image={plant.image}
          price={plant.price}
          onDelete={() => deletePlant(plant.id)}
        />
      ))}
    </ul>
  );
}

export default PlantList;
// {
//   "id": 1,
//   "name": "Aloe",
//   "image": "./images/aloe.jpg",
//   "price": 15.99
// }
