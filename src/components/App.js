import React, { useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="app">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PlantPage searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
}

export default App;
