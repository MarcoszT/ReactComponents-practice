import '../src/styles.css'
import Counter from './components/counter/index'
import Login from './components/counter/login'
import Practice from './components/counter/practice'
import Acordeon from './components/counter/acordeon'
import Acordeon2 from './components/counter/acordeon2'
import AcordeonDos from './components/practicando/acordeonDos'
import Galery from './components/counter/galery'
import GaleriaDos from './components/practicando/galeriaDos'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Filter from './components/filter/filter'
import Filtros from './components/filter/filtros'
import Michi from './components/michi/michi'
import MemoryCards from './components/memoryCards/memoryCards'
import Topos from './components/topos/topos'
import Crud from './components/book/crud'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Link to="/counter">Counter</Link>
              <br />
              <Link to="/login">Login</Link>
              <br />
              <Link to="/practice">Practicando</Link>
              <br />
              <Link to="/acordeon">Acordeon</Link>
              <br />
              <Link to="/acordeon2">Acordeon2</Link>
              <br />
              <Link to="/galery">Galeria</Link>
              <br />
              <Link to="/acordeonDos">AcordeonDos</Link>
              <br />
              <Link to="/galeriaDos">GaleriaDos</Link>
              <br />
              <Link to="/filter">Filtros</Link>
              <br />
              <Link to="/filtros">FiltrosDos</Link>
              <br />
              <Link to="/michi">TIK TAK TOE</Link>
              <br />
              <Link to="/memoryCards">Juego de Cartas</Link>
              <br />
              <Link to="/topos">Juego de Topos</Link>
              <br />
              <Link to="/crud">CRUD</Link>
            </div>
          }
        />
        <Route path="counter" element={<Counter />} />
        <Route path="login" element={<Login />} />
        <Route path="practice" element={<Practice />} />
        <Route path="acordeon" element={<Acordeon />} />
        <Route path="acordeon2" element={<Acordeon2 />} />
        <Route path="galery" element={<Galery />} />
        <Route path="acordeonDos" element={<AcordeonDos />} />
        <Route path="galeriaDos" element={<GaleriaDos />} />
        <Route path="filter" element={<Filter />} />
        <Route path="filtros" element={<Filtros />} />
        <Route path="michi" element={<Michi />} />
        <Route path="memoryCards" element={<MemoryCards />} />
        <Route path="topos" element={<Topos />} />
        <Route path="crud" element={<Crud />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
