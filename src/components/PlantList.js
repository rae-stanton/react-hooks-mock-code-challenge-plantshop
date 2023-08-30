import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ searchQuery }) {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(setPlants);
  }, []);

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
