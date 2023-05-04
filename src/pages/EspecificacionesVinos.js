import { useEffect } from 'react';
import { Link } from "react-router-dom";

// Import Vino Tinto data
import DataTinto from '../data/tinto.json';

// Import Vino Rosado data
import DataRosado from '../data/rosado.json';

// Import Vino Blanco data
import DataBlanco from '../data/blanco.json';

// Import Vino Tinto thumbnails
import * as ThumbsTinto from '../images/vinos/tinto/thumb-vino-*.png';

// Import Vino Rosado thumbnails
import * as ThumbsRosado from '../images/vinos/rosado/thumb-vino-*.png';

// Import Vino Blanco thumbnails
import * as ThumbsBlanco from '../images/vinos/blanco/thumb-vino-*.png';

const EspecificacionesVinos = () => {
    useEffect(() => {
        document.body.classList.add('especificaciones-vinos-layout')
        return () => {
            document.body.classList.remove('especificaciones-vinos-layout')
        }
    }, [])
    return (
        <div className="row">
            <div className="col-3 offset-2">
                
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-12">
                        <h1>Nombre</h1>
                    </div>
                    <div className="col-12">
                        <div className="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EspecificacionesVinos;