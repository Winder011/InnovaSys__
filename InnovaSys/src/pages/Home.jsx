import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home-page">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>InnovaSys</h1>
        <p>
          Solicita tu viaje con una experiencia moderna, segura y confiable, con
          conductores capacitados listos para llevarte a tu destino.
        </p>
        <Link to="/taxis" className="cta-btn">
          Solicitar Taxi
        </Link>
      </div>
    </section>
  )
}

export default Home