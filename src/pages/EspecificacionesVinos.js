import { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

const EspecificacionesVinos = () => {
    const location = useLocation();

    switch (location.state[7].pathname) {
        case '/tinto':
            useEffect(() => {
                document.body.classList.add('especificaciones-vinos-layout', 'especificaciones-vinos-layout-tinto')
                return () => {
                    document.body.classList.remove('especificaciones-vinos-layout', 'especificaciones-vinos-layout-tinto')
                }
            }, [])
            break;
        case '/rosado':
            useEffect(() => {
                document.body.classList.add('especificaciones-vinos-layout', 'especificaciones-vinos-layout-rosado')
                return () => {
                    document.body.classList.remove('especificaciones-vinos-layout', 'especificaciones-vinos-layout-rosado')
                }
            }, [])
            break;
        case '/blanco':
            useEffect(() => {
                document.body.classList.add('especificaciones-vinos-layout', 'especificaciones-vinos-layout-blanco')
                return () => {
                    document.body.classList.remove('especificaciones-vinos-layout', 'especificaciones-vinos-layout-blanco')
                }
            }, [])
            break;
        default:
    }

    const nombre = location.state[0];
    const uva = location.state[1];
    const region = location.state[2];
    const maridaje = location.state[3];
    const precioPorBotella = location.state[4];
    const precioPorCopa = location.state[5];
    const thumbnail = location.state[6];

    const navigate = useNavigate();

    return (
        <div className="row">
            <div className="col-3 offset-2 my-auto">
                <img src={thumbnail} alt="" className="thumbnail-vino img-fluid" />
            </div>
            <div className="col-6 my-auto">
                <div className="row">
                    <div className="col-12">
                        <h1>{nombre}</h1>
                    </div>
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <FontAwesomeIcon icon={faWineGlass} />
                                        </th>
                                        <td>Uva: {uva}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <FontAwesomeIcon icon={faLocationDot} />
                                        </th>
                                        <td>Región: {region}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <FontAwesomeIcon icon={faUtensils} />
                                        </th>
                                        <td>Maridaje: {maridaje}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <FontAwesomeIcon icon={faDollarSign} />
                                        </th>
                                        <td>Precio por botella: {precioPorBotella}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <FontAwesomeIcon icon={faDollarSign} />
                                        </th>
                                        <td>Precio por copa: {precioPorCopa}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <a className="boton-regresar" onClick={() => navigate(-1)}>
                            <FontAwesomeIcon icon={faLeftLong} /> Regresar
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EspecificacionesVinos;