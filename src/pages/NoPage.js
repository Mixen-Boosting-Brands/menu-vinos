
import { useEffect } from 'react';
import { Link } from "react-router-dom";

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
                <h1>Error 404</h1>
                <p>Página no encontrada.</p>
            </div>
        </div>
    );
};

export default NoPage;