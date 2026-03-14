import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Taxis from './pages/Taxis'

function App() {


  return (
       <div className="app-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/taxis" element={<Taxis />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
