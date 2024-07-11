import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faMeta, faApple } from "@fortawesome/free-brands-svg-icons";

const FooterIcons = () => {
    return (
        <div className="footer-icons">
            <FontAwesomeIcon icon={faGoogle} style={{ color: "#b5b5b5" }} />
            <FontAwesomeIcon icon={faMeta} style={{ color: "#2474ff" }} />
            <FontAwesomeIcon icon={faApple} style={{ color: "#000000" }} />
        </div>
    );
};

export default FooterIcons;
