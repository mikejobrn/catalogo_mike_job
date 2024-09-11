import './NotFound.css';
import { Link } from 'react-router-dom'; // Substitui o useHistory

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="error-code">404</h1>
            <p className="error-message">Oops! Página não encontrada.</p>
            <div className="astronaut-container">
                <div className="astronaut"></div>
            </div>
            <Link to="/" className="go-home-button">Voltar para Home</Link>
        </div>
    );
};

export default NotFound;