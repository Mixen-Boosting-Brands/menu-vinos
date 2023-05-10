import { useEffect } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        document.body.classList.add('home-layout')
        return () => {
            document.body.classList.remove('home-layout')
        }
    }, [])
    return (
        <div className="row">
            <div className="col-4">
                <div className="boton-home boton-home-vinos">
                    <div className="overlay">
                        <span>Vinos</span>
                    </div>
                    <Link to="/catalogo">
                        <span>Vinos</span>
                    </Link>
                </div>
            </div>
            <div className="col-4">
                <div className="boton-home boton-home-postres">
                    <div className="overlay">
                        <span>Postres</span>
                    </div>
                    <Link to="/postres">
                        <span>Postres</span>
                    </Link>
                </div>
            </div>
            <div className="col-4">
                <div className="boton-home boton-home-mixologia">
                    <div className="overlay">
                        <span>Mixología</span>
                    </div>
                    <Link to="/mixologia">
                        <span>Mixología</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;