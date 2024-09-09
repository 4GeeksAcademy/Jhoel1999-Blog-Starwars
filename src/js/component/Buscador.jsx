import React, { useState } from "react";

export const Buscador = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Buscando:", query);
  };

  return (
    <div className="container mt-4">
      <div className="input-group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar..."
          className="form-control"
        />
        <button onClick={handleSearch} className="btn btn-primary">
          Buscar
        </button>
      </div>
    </div>
  );
};
