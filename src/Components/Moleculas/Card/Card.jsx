import imge from "../../../assets/logotipo.png";
import Button from "../../Atomos/Button/Button";
import "../Card/Card.css";

const Card = () => {
    return (
        <div className="card">
            <div className="col-9">
                <p className="inter">Internet Space</p>
                <p className="mejor-10 ">es mejor</p>
                <p className="cuan-12">cuando es</p>
                <p className="rapido-13">rápido.</p>
                <p className="context-99 ">
                    Internet Space: conexión rápida y confiable para explorar sin{" "}
                </p>
                <p className="parrafo-67">
                    límites. ¡Vive la mejor experiencia en línea!
                </p>
            </div>
            <img src={imge} alt="Logo" />
            <Button name="Paquetes"></Button>
        </div>
    );
};

export default Card;
