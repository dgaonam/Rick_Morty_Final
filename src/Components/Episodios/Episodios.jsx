import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import EpisodeCard from '../Cards/EpisodeCard';

const Episodios = () => {
    const [episodios, setEpisodios] = useState([]);
    const [name, setName] = useState('');
    const [episode, setEpisode] = useState('');
    const [paginas,setPaginas] =useState(0);
    const [pagina,setPagina] =useState(1);

    const obtenerApi = () => {
        axios.get('https://rickandmortyapi.com/api/episode/?page='+pagina).then(
            (result) => {
                if (typeof result.data.results === 'undefined')
                    setEpisodios(result.data);
                else {
                    setPaginas(result.data.info.pages); 
                    setEpisodios(result.data.results);
                }
            }
        ).catch(
            (result) => {
                //console.log(result)
                return [];
            }
        );
    };

    const buscar = () => {
        axios.get('https://rickandmortyapi.com/api/episode/?name=' + name  + "&episode=" + episode+"&page="+pagina).then(
            (result) => {
                if (typeof result.data.results === 'undefined')
                    setEpisodios(result.data);
                else {
                    setPaginas(result.data.info.pages); 
                    setEpisodios(result.data.results);
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
        setEpisode('');
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
            <Header/>
            <div style={{ paddingTop: "1rem" }} className="g7 col-md-12">
                <div className="col-md col-12 md:col-4">
                    <div className="form-floating " style={{textAlign:'center'}}>
                        <h1>Episodios</h1>
                    </div>
                </div>
                <div className="row g-2">
                    <div className="col-md col-12 md:col-4">
                        <div className="form-floating ">
                            <input type="email" className="form-control" id="floatingInput" value={name} onChange={(e) => setName(e.target.value)} />
                            <label for="floatingInput">Nombre</label>
                        </div>
                    </div>
                    
                    <div className="col-md col-4 md:col-4">
                        <div className="form-floating ">
                            <input type="email" className="form-control" id="floatingInput" value={episode} onChange={(e) => setEpisode(e.target.value)} />
                            <label for="floatingInput">Episodio</label>
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
                    {episodios.map((episodio) => {
                        return (
                            <>
                                <EpisodeCard url={"/Episodio/"} id={episodio.id} name={episodio.name} characters={episodio.characters} episode={episodio.episode} air_date={episodio.air_date} />
                            </>
                        );
                    })}
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default Episodios;