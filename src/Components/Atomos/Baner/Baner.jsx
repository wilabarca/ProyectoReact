import "../Baner/Baner.css";
import card from "../../../assets/Cards.png";

const Baner = () => {
    return (
        <div className="baner">
            <h1 className="clo-10">Nuestro Servicio</h1>
            <p className="info">Proveedor de servicios de Internet confiable</p>
            <p className="in-12">
                Internet Space: navega con velocidad y seguridad inigualables.
                ¡Conéctate y transforma tu <br></br>experiencia digital!
            </p>
            <img src={card} className="card-12"></img>
        </div>
    );
};

export default Baner;
