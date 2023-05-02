import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="row">
            <div className="col-6 col-lg-6 offset-lg-1">
                <div className="boton-home">
                    <div className="overlay">
                        Vinos
                    </div>
                    <Link to="/Vinos">
                        <span>Vinos</span>
                    </Link>
                </div>
            </div>
            <div className="col-6 col-lg-3 offset-lg-1">
                <div className="boton-home">
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