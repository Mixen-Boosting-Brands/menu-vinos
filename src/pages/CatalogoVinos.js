import { useEffect } from 'react';
import { Link } from "react-router-dom";

const CatalogoVinos = () => {
    useEffect(() => {
        document.body.classList.add('catalogo-vinos-layout')
        return () => {
            document.body.classList.remove('catalogo-vinos-layout')
        }
    }, [])

    return (
        <div className="row">
            <div className="col-12">
                <div className="row">
                    <div className="col-6 offset-3 col-md-6 offset-md-3">
                        <div className="boton-catalogo boton-catalogo-tinto">
                            <Link to="/tinto">
                                <h1>Tinto</h1>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-md-5 offset-md-1 col-lg-3 offset-lg-3">
                        <div className="boton-catalogo boton-catalogo-rosado">
                            <Link to="/rosado">
                                <h1>Rosado</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-md-5 col-lg-3">
                        <div className="boton-catalogo boton-catalogo-blanco">
                            <Link to="/blanco">
                                <h1>Blanco</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogoVinos;