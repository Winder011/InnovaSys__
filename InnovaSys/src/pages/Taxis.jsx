import TaxiCard from '../components/TaxiCard'
import { drivers } from '../data/drivers'

function Taxis() {
  return (
    <section className="taxis-page">
      <h1>Taxis disponibles</h1>
      <p className="subtitle">Elige un conductor y llama directamente.</p>
      <div className="taxi-grid">
        {drivers.map((driver) => (
          <TaxiCard key={driver.plate} driver={driver} />
        ))}
      </div>
    </section>
  )
}

export default Taxis