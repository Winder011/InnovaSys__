function TaxiCard({ driver }) {
  return (
    <article className="taxi-card">
      <img src={driver.img} alt={`Vehículo de ${driver.name}`} className="taxi-image" />
      <div className="taxi-info">
        <h3>{driver.name}</h3>
        <p>
          <strong>Modelo:</strong> {driver.car}
        </p>
        <p>
          <strong>Placa:</strong> {driver.plate}
        </p>
      </div>
      <a href="tel:+506XXXXXXXX" className="call-btn">
        Llamar Taxi
      </a>
    </article>
  )
}

export default TaxiCard