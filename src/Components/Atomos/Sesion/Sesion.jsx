import { Link } from 'react-router-dom';
import '../Sesion/Sesion.css';

const Sesion = () => {
    return (
        <Link to='/FormRegistro'>
            <button type='submit' className="sesion">
                Iniciar Sesion
            </button>
        </Link>
    );
};

export default Sesion;
