import { Link } from "react-router-dom";
import useLocaciones from "../hooks/useLocaciones";
const LocacionCard = ({name,dimension,id,type,residents,url}) => {
    const locaciones= useLocaciones();
    return (
        <>
            <div key={"personaje_" + name} className="card col-md-3" >
                <Link to={url+id} onClick={()=>{locaciones.locacion={name:name,dimension:dimension,residents:residents,type:type}}}>
                    <div key={"personaje_body_  " + name} className="card-body">
                        <h5 >{name}</h5>
                    </div>
                </Link>
            </div>
            
        </>
    );
}

export default LocacionCard;