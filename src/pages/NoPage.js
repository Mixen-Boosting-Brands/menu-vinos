
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const NoPage = () => {
    useEffect(() => {
        document.body.classList.add('no-page-layout')
        return () => {
            document.body.classList.remove('no-page-layout')
        }
    }, [])
    
    return (
        <div className="row">
            <div className="col-12 text-center">
                <h1>Error</h1>
                <p>
                    Error al cargar la información.
                </p>
                <Link to="/">
                    <FontAwesomeIcon icon={faHouse} /> Home
                </Link>
            </div>
        </div>
    );
};

export default NoPage;