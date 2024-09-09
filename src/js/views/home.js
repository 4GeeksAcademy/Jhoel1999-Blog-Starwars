import React from "react";
import { Navbar } from "../component/Navbar.jsx";
import { Character } from "../component/Character.jsx";
import { Planet } from "../component/Planet.jsx";
import { Vehicle } from "../component/Vehicle.jsx";
import { Buscador} from "../component/Buscador.jsx";

export const Home = () => (
    <>
      <div className="container" style={{ paddingTop: "120px" }}>
	  	<Navbar />
        <Buscador />
        <Character />
        <Planet />
        <Vehicle />
      </div>
    </>
  );