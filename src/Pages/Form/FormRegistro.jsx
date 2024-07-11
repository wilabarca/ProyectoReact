import img from "./../../assets/regis.png";
import imagen from "./../../assets/Google.png";
import imagenes from "./../../assets/Meta.png";
import logo from "./../../assets/Aple.png";
import "./FormRegistro.css";

const FormRegistro = () => {
    const handleRegisterClick = () => {
        alert("Usuario Registrado");
    };

    return (
        <form className="form-registro">
            <div className="title-12">
                <h1>Registrarse</h1>
            </div>
            <div className="form-group">
                <label htmlFor="usuario">
                    <input type="text" id="usuario" placeholder="Usuario" />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="contraseña">
                    <input type="password" id="contraseña" placeholder="Contraseña" />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="confirmar-contraseña">
                    <input
                        type="password"
                        id="confirmar-contraseña"
                        placeholder="Confirmar Contraseña"
                    />
                </label>
            </div>
            <div className="footer">
                <img src={imagen} className="google" alt="Google"></img>
                <img src={imagenes} className="Meta-1" alt="Meta"></img>
                <img src={logo} className="aple-2" alt="Apple"></img>
            </div>
            <button
                type="button"
                className="form-button"
                onClick={handleRegisterClick}
            >
                Registrarse
            </button>
            <img src={img} className="imagen" alt="Background"></img>
        </form>
    );
};

export default FormRegistro;
