import neflix from "../../../assets/neflix.png";
import pather from "../../../assets/parther.png";
import seccion from "../../../assets/Section 5.png";
import "../Informacion/Informacion.css";
const Informacion = () => {
    return (
        <div className=" iformacion-12">
            <h1 className="conectate-56">
                Conéctate a un mundo lleno de entretenimiento sin límites con nuestro
                servicio de internet, donde cada clic te lleva a descubrir nuevas
                historias en Netflix.
            </h1>
            <img src={neflix} className="imagen-12"></img>
            <img src={pather} className="imagen-13"></img>
            <img src={seccion} className="imagen-14"></img>
        </div>
    );
};

export default Informacion;
