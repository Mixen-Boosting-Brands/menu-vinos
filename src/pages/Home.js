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
            <div className="col-6 col-lg-4 offset-lg-2">
                <div className="boton-home boton-home-vinos">
                    <div className="overlay">
                        <span>Vinos</span>
                    </div>
                    <Link to="/catalogo">
                        <span>Vinos</span>
                    </Link>
                </div>
            </div>
            <div className="col-6 col-lg-3 offset-lg-1">
                <div className="boton-home boton-home-postres">
                    <div className="overlay">
                        <span>Postres</span>
                    </div>
                    <Link to="/postres">
                        <span>Postres</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;