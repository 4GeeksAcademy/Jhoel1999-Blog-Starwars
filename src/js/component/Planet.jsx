import React, { useContext, useEffect } from "react";
import { CardPlanet } from "./CardPlanet.jsx";
import { Context } from "../store/appContext";

export const Planet = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPlanets();
  }, []);

  return (
    <div className="container bg-gradient p-4 rounded">
      <h2 className="mb-3 text-danger">Planets</h2>
      <div className="row flex-nowrap overflow-auto">
        {store.planets &&
          store.planets.length > 0 &&
          store.planets.map((planets, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <CardPlanet
                key={planets.id}
                name={planets.name}
                id={planets.id}
              />
            </div>
          ))}
      </div>
    </div>
  );
};