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
                        Vinos
                    </div>
                    <Link to="/Vinos">
                        <span>Vinos</span>
                    </Link>
                </div>
            </div>
            <div className="col-6 col-lg-3 offset-lg-1">
                <div className="boton-home boton-home-postres">
                    <div className="overlay">
                        Postres
                    </div>
                    <Link to="/Postres">
                        <span>Postres</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;