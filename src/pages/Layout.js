import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/Vinos">Vinos</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/Postres">Postres</Link>
                    </li>
                </ul>
            </nav>

            <div className="container">
                <Outlet />
            </div>
        </>
    )
};

export default Layout;