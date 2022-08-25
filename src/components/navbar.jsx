import { Link } from 'react-router-dom';

function NavbarComponent() {


    return (
        <nav>
            {/* <ul>
                <li><Link to={'/'}>Inicio</Link></li>
                <li><Link to={'/'}>Sobre nosotros</Link></li>
            </ul> */}
            <h1 className="title">Mantenimiento<span className="lp">LP</span></h1>
            <ul>
                <li><Link to={'/'}>Inicio</Link></li>
                <li><Link to={'/'}>Servicios</Link></li>
                <li><Link to={'/'}>Contacto</Link></li>
            </ul>
        </nav>
    )

}

export default NavbarComponent;