import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="brand">
        <img src="/img/logo_1.png" alt="InnovaSys logo" className="brand-logo" />
        <span>InnovaSys</span>
      </Link>
      <nav className="nav-links" aria-label="Navegación principal">
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <NavLink to="/taxis">Taxis</NavLink>
      </nav>
    </header>
  )
}

export default Header