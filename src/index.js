import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Components/Home/Home';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Personajes from './Components/Personajes/Personajes';
import PersonajesContext from './Components/context/PersonajesContext';
import EpisodesContext from './Components/context/EpisodesContext';
import Error from './Components/Error/Error';
import Episodios from './Components/Episodios/Episodios';
import Episodio from './Components/Episodios/Episodio';
import Locaciones from './Components/Locaciones/Locaciones';
import Personaje from './Components/Personajes/Personaje';

const data = {
 character:{}
};

const dataEpisode = {
  episode:{}
 };

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error/>
  },{
    path: "/Personajes",
    element:  <PersonajesContext.Provider value={data}><Personajes/></PersonajesContext.Provider> ,
    PersonajesContext
  },{
    path: "/Personaje/:id",
    element:  <PersonajesContext.Provider value={data}><Personaje/></PersonajesContext.Provider>
  },{
    path: "/Episodios",
    element: <EpisodesContext.Provider value={dataEpisode}><Episodios/></EpisodesContext.Provider>,
  },{
    path: "/Episodio/:id",
    element: <EpisodesContext.Provider value={dataEpisode}><Episodio/></EpisodesContext.Provider>,
  },{
    path: "/Locaciones",
    element: <Locaciones/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
);


