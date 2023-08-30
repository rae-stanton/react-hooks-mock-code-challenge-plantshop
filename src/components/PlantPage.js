import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ searchQuery, setSearchQuery }) {
  return (
    <main>
      <NewPlantForm />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PlantList searchQuery={searchQuery} />
    </main>
  );
}

export default PlantPage;
