
import useLocaciones from "../hooks/useLocaciones";
import { Link, useParams } from "react-router-dom"

import { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Locacion = () => {
    const { id } = useParams();
    const Locacion = useLocaciones();
    useEffect(() => {
        console.log(Locacion);
    }, [Locacion]);
    return (
        <>
            <Header />
            <Link to={"/Locaciones"}><button type="button" className="btn btn-primary btn-lg">Regresar</button></Link>
            <div style={{ paddingTop: "1rem" }} className="g7 col-md-12">
                <div className="row g-2">
                    <div key={"personaje_" + Locacion.locacion.name} className="card col-md-3" >
                        <h1>Id: {id}</h1>
                        <div className="card-body">
                            <h5 >Nombre {Locacion.locacion.name}</h5>
                            <h5 >Dimencion: {Locacion.locacion.dimension}</h5>
                            <h5 >Tipo: {Locacion.locacion.type}</h5>
                        </div>
                    </div>
                    <div className="card col-md-9" >
                        <div className="col-md col-12 md:col-12" style={{ textAlign: "center" }}>
                            <h1>Residentes</h1>
                        </div>
                        <div className="col-md col-12 md:col-12" >
                            <div className="row row-cols-4" style={{ paddingTop: "1rem",paddingLeft:"1rem" }}>
                                {Locacion.locacion.residents.map((url, name) => {
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

export default Locacion;