import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "../Header/Header.css";
import Sesion from "../../Atomos/Sesion/Sesion";

const Header = () => {
    return (
        <header>
            <h1 className="ti-lo">Servicio de Internet Space</h1>
            <FontAwesomeIcon
                icon={faGlobe}
                style={{
                    color: "#ffffff",
                    marginLeft: "1%",
                    marginRight: "1%",
                    marginTop: "1%",
                    marginBottom: "1%",
                    fontSize: "30px",
                }}
            />
            <Sesion></Sesion>
        </header>
    );
};

export default Header;
