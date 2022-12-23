import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="d-flex flex-wrap py-3 mb-5 border-bottom">

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">Proyecto Final</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/Personajes">Personajes</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/Episodios">Episodios</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/Locaciones">Locaciones</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
        </>
    );
}

export default Header;