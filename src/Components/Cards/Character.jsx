import { Link } from "react-router-dom";
import usePersonajes from "../hooks/usePersonajes";
import { useEffect } from "react";
const Character = ({name,image,id,status,episode,gender,url}) => {
    const personaje= usePersonajes();
    
    return (
        <>
            <div key={"personaje_" + name} className="card col-md-3" >
                <Link to={url+id} onClick={()=>{personaje.character={name:name,image:image,episodes:episode,status:status,gender:gender}}}>
                    <img key={"personaje_img_" + name} src={image} />
                    <div key={"personaje_body_  " + name} className="card-body">
                        <h5 >{name}</h5>
                    </div>
                </Link>
            </div>
            
        </>
    );
}

export default Character;