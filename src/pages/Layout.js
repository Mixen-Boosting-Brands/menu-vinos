import { Outlet, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { faIceCream } from '@fortawesome/free-solid-svg-icons';

const Layout = () => {
    return (
        <>
            <nav>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faHouse} /> Home
                        </NavLink>
                    </li>
                    <li className="list-inline-item">
                        <NavLink to="/catalogo">
                            <FontAwesomeIcon icon={faWineBottle} /> Vinos
                        </NavLink>
                    </li>
                    <li className="list-inline-item">
                        <NavLink to="/postres">
                            <FontAwesomeIcon icon={faIceCream} /> Postres
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <section className="container-fluid">
                <Outlet />
            </section>

            <footer>
                <Link to="/">
                    <div className="logo"></div>
                </Link>
            </footer>
        </>
    )
};

export default Layout;