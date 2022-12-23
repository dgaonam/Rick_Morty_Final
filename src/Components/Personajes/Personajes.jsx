import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Character from '../Cards/Character';

const Personajes = () => {
    const [personajes, setPersonajes] = useState([]);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');
    const [paginas,setPaginas] =useState(0);
    const [pagina,setPagina] =useState(1);

    const obtenerApi = () => {
        axios.get('https://rickandmortyapi.com/api/character/?page='+pagina).then(
            (result) => {
                console.log(result);
                if (typeof result.data.results === 'undefined')
                    
                    setPersonajes(result.data);
                else {
                    setPaginas(result.data.info.pages);
                    setPersonajes(result.data.results);
                }
            }
        ).catch(
            (result) => {
                //console.log(result)
                console.log(result);
                return [];
            }
        );
    };

    const buscar = () => {
        axios.get('https://rickandmortyapi.com/api/character/?name=' + name + "&status=" + status + "&species=" + species + "&gender=" + gender+"&page="+pagina).then(
            (result) => {
                if (typeof result.data.results === 'undefined')
                    setPersonajes(result.data);
                else {
                    setPaginas(result.data.info.pages); 
                    setPersonajes(result.data.results);
                }
            }
        ).catch(
            (result) => {
                //console.log(result)
                return [];
            }
        );
    };

    const limpiar = () => {
        setName('');
        setStatus('');
        setGender('');
        setSpecies('');
        setPagina(1);
        obtenerApi();

    };

    useEffect(() => {
        obtenerApi();
    }, []);

    useEffect(() => {
        console.log("current page");
        buscar();
      }, [pagina]);

    const siguientePagina = () => {
        if (pagina <= paginas) {
          setPagina(pagina + 1)
          console.log(pagina);
        }else{
          console.log("llegaste a la ultima pagina");
        }
      }
      const anteriorPagina = () => {
        if (pagina > 1) {
          setPagina(pagina - 1)
          console.log(pagina);
        }else{
          console.log("llegaste a la primer pagina");
        }
      }

    return (
        <>
            <Header />
            <div style={{ paddingTop: "1rem" }} className="g7 col-md-12">
                <div className="col-md col-12 md:col-4">
                    <div className="form-floating " style={{ textAlign: 'center' }}>
                        <h1>Personajes</h1>
                    </div>
                </div>
                <div className="row g-2">
                    <div className="col-md col-12 md:col-4">
                        <div className="form-floating ">
                            <input type="email" className="form-control" id="floatingInput" value={name} onChange={(e) => setName(e.target.value)} />
                            <label for="floatingInput">Nombre</label>
                        </div>
                    </div>
                    <div className="col-md col-12 md:col-4">
                        <div className="form-floating">
                            <select className="form-select" value={status} onChange={(e) => { setStatus(e.target.value) }} id="floatingSelect" aria-label="Floating label select example">
                                <option selected></option>
                                <option value="live">Vive</option>
                                <option value="Dead">Muerto</option>
                                <option value="unknown">Desconocido</option>
                            </select>
                            <label for="floatingSelect">Estatus</label>
                        </div>
                    </div>
                    <div className="col-md col-12 md:col-4">
                        <div className="form-floating">
                            <select className="form-select" value={gender} onChange={(e) => { setGender(e.target.value) }} id="floatingSelect" aria-label="Floating label select example">
                                <option selected></option>
                                <option value="female">Mujer</option>
                                <option value="male">Hombre</option>
                                <option value="genderless">Sin genero</option>
                                <option value="unknown">Desconocido</option>
                            </select>
                            <label for="floatingSelect">Genero</label>
                        </div>
                    </div>
                </div>
                <div className="row g-2" style={{ paddingTop: "1rem" }}>
                    <div className="col-md col-4 md:col-4">
                        <div className="form-floating ">
                            <input type="email" className="form-control" id="floatingInput" value={species} onChange={(e) => setSpecies(e.target.value)} />
                            <label for="floatingInput">Especie</label>
                        </div>
                    </div>
                    <div className="col-md col-4 md:col-2">
                        <button type="button" className="btn btn-primary btn-lg" onClick={buscar}>Buscar</button>
                    </div>
                    <div className="col-md col-4 md:col-2">
                        <button type="button" className="btn btn-primary btn-lg" onClick={limpiar}>Limpiar</button>
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item">
                            <a class="page-link" onClick={anteriorPagina}>Anterior</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">Pagina {pagina} de {paginas}</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" onClick={siguientePagina}>Siguiente</a>
                        </li>
                    </ul>
                </nav>
                <div className="row row-cols-4" style={{ paddingTop: "1rem" }}>
                    {personajes.map((personaje) => {
                        return (
                            <>
                                <Character url={"/Personaje/"} name={personaje.name} image={personaje.image} id={personaje.id} status={personaje.status} episode={personaje.episode} gender={personaje.gender} />
                            </>
                        );
                    })}
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Personajes;