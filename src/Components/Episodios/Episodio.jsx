
import useEpisodes from "../hooks/useEpisodes";
import { Link, useParams } from "react-router-dom"

import { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Episodio = () => {
    const { id } = useParams();
    const episode = useEpisodes();
    useEffect(() => {
        console.log(episode);
    }, [episode]);
    return (
        <>
            <Header />
            <Link to={"/Episodios"}><button type="button" className="btn btn-primary btn-lg">Regresar</button></Link>
            <div style={{ paddingTop: "1rem" }} className="g7 col-md-12">
                <div className="row g-2">
                    <div key={"personaje_" + episode.episode.name} className="card col-md-3" >
                        <h1>Id: {id}</h1>
                        <div className="card-body">
                            <h5 >Nombre {episode.episode.name}</h5>
                            <h5 >Fecha lanzamiento: {episode.episode.air_date}</h5>
                            <h5 >Episodio: {episode.episode.episode}</h5>
                        </div>
                    </div>
                    <div className="card col-md-9" >
                        <div className="col-md col-12 md:col-12" style={{ textAlign: "center" }}>
                            <h1>Personajes</h1>
                        </div>
                        <div className="col-md col-12 md:col-12" >
                            <div className="row row-cols-4" style={{ paddingTop: "1rem",paddingLeft:"1rem" }}>
                                {episode.episode.characters.map((url, name) => {
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

export default Episodio;