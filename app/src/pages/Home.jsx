import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="grid gap-8 py-10 lg:grid-cols-2 lg:items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="mb-4 text-sm uppercase tracking-[0.24em] text-premium-500">Diamantes Realty Group</p>
        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
          Tu próximo hogar, guiado por la experiencia de Norvin García.
        </h1>
        <p className="mb-8 max-w-xl text-white/70">
          Descubre propiedades exclusivas, asesoría estratégica y un servicio personalizado para
          comprar o vender con confianza.
        </p>
        <Link
          to="/propiedades"
          className="inline-flex rounded-full bg-premium-500 px-6 py-3 font-semibold text-neutral-950 transition hover:scale-105"
        >
          Ver propiedades
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative overflow-hidden rounded-3xl border border-white/10"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
          alt="Casa premium"
          className="h-full min-h-80 w-full object-cover"
        />
      </motion.div>
    </section>
  );
}

export default Home;
