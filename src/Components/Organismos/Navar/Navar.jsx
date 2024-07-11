import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import "../Navar/Navar.css";

const Navar = () => {
    return (
        <nav>
            <h1>Internet</h1>
            <h2>Space</h2>
            <p>Registrarse</p>
            <il>Idioma</il>
            <FontAwesomeIcon
                icon={faLanguage}
                style={{
                    color: "#1c1c1c",
                    position: "absolute",
                    marginLeft: "1430px",
                    marginTop: "2px",
                    height: "40%",
                }}
            />
        </nav>
    );
};

export default Navar;
