import { motion } from 'framer-motion';

function Perfil() {
  return (
    <motion.section
      className="mx-auto grid max-w-4xl gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-[240px_1fr]"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
        alt="Norvin García"
        className="h-60 w-full rounded-2xl object-cover"
      />
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Norvin García</h2>
        <p className="text-white/75">
          Agente inmobiliario enfocado en propiedades residenciales y de inversión en Nicaragua.
          Mi misión es brindarte transparencia, seguridad y resultados.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="rounded-full bg-white/10 px-4 py-2">Instagram: @norvinrealty</span>
          <span className="rounded-full bg-white/10 px-4 py-2">LinkedIn: /norvingarcia</span>
          <span className="rounded-full bg-white/10 px-4 py-2">WhatsApp: +505 8888 8888</span>
        </div>
      </div>
    </motion.section>
  );
}

export default Perfil;
