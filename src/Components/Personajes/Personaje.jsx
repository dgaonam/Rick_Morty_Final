
import usePersonajes from "../hooks/usePersonajes";
import { Link, useParams } from "react-router-dom"

import { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Personaje = () => {
    const { id } = useParams();
    const personaje = usePersonajes();
    useEffect(() => {
        console.log(personaje.character.name);
    }, [personaje]);
    return (
        <>
            <Header />
            <Link to={"/Personajes"}><button type="button" className="btn btn-primary btn-lg">Regresar</button></Link>
            <div style={{ paddingTop: "1rem" }} className="g7 col-md-12">
                <div className="row g-2">
                    <div key={"personaje_" + personaje.character.name} className="card col-md-3" >
                        <h1>Id: {id}</h1>
                        <img src={personaje.character.image} alt={"imagen"} />
                        <div className="card-body">
                            <h5 >Nombre {personaje.character.name}</h5>
                            <h5 >Estatus: {personaje.character.status}</h5>
                            <h5 >Genero: {personaje.character.gender}</h5>
                        </div>
                    </div>
                    <div className="card col-md-9" >
                        <div className="col-md col-12 md:col-12" style={{ textAlign: "center" }}>
                            <h1>Episodios</h1>
                        </div>
                        <div className="col-md col-12 md:col-12" >
                            <div className="row row-cols-4" style={{ paddingTop: "1rem",paddingLeft:"1rem" }}>
                                {personaje.character.episodes.map((url, name) => {
                                    return (
                                        <>
                                            <div key={"personaje_"} className="card col-md-3" >
                                                {url}
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Personaje;