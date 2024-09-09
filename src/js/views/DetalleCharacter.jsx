import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/Navbar.jsx";

const DetalleCharacter = () => {
  const { store, actions } = useContext(Context);
  const { uid } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await actions.getCharacterDetails(uid);
      setLoading(false);
    };
    fetchData();
  }, [uid, actions]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  const character = store.characterDetails;
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="card shadow-lg border-0">
          <div className="row g-0 mt-5">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                className="img-fluid rounded"
                style={{ maxWidth: "85%", height: "90%" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body p-4">
                <h3 className="card-title display-4 text-primary">
                  {character.name}
                </h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corrupti numquam nostrum atque sint odit. Deserunt odio
                  molestiae repellat nihil ex excepturi culpa rem, quasi dolorem
                  tempore ea, veniam repudiandae nostrum esse accusantium dicta
                  optio quibusdam libero quam atque, nam tenetur officiis harum?
                  Illum ullam enim fugiat voluptas exercitationem excepturi
                  praesentium.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <p className="card-text">
                      <strong>Height:</strong> {character.height}
                    </p>
                    <p className="card-text">
                      <strong>Mass:</strong> {character.mass}
                    </p>
                    <p className="card-text">
                      <strong>Hair Color:</strong> {character.hair_color}
                    </p>
                    <p className="card-text">
                      <strong>Skin Color:</strong> {character.skin_color}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="card-text">
                      <strong>Eye Color:</strong> {character.eye_color}
                    </p>
                    <p className="card-text">
                      <strong>Birth Year:</strong> {character.birth_year}
                    </p>
                    <p className="card-text">
                      <strong>Gender:</strong> {character.gender}
                    </p>
                    <p className="card-text">
                      <strong>Surface Water:</strong> {character.surface_water}
                    </p>
                  </div>
                </div>
                <button
                  className="btn btn-primary mt-3 d-flex align-items-center"
                  onClick={() => navigate(-1)}
                >
                  <i className="bi bi-arrow-left me-2"></i> Volver
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalleCharacter;