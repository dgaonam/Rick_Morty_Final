import { Link } from "react-router-dom";
import useEpisodes from "../hooks/useEpisodes";
const LocacionCard = ({name,air_date,id,characters,episode,url}) => {
    const episodes= useEpisodes();
    return (
        <>
            <div className="card col-md-3" >
                <Link to={url+id} onClick={()=>{episodes.episode={name:name,episode:episode,characters:characters,air_date:air_date}}}>
                    <div key={"personaje_body_  " + name} className="card-body">
                        <h5 >{name}</h5>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default LocacionCard;