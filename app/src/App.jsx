import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Propiedades from './pages/Propiedades.jsx';
import PropiedadDetalle from './pages/PropiedadDetalle.jsx';
import Perfil from './pages/Perfil.jsx';
import Mapa from './pages/Mapa.jsx';
import Contacto from './pages/Contacto.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propiedades" element={<Propiedades />} />
          <Route path="/propiedad/:id" element={<PropiedadDetalle />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
