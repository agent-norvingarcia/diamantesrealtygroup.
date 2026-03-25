function Contacto() {
  return (
    <section className="mx-auto max-w-3xl py-8">
      <h2 className="mb-4 text-3xl font-bold">Contáctame</h2>
      <p className="mb-8 text-white/70">Déjame tus datos y te contactaré para asesorarte en tu próxima inversión.</p>
      <form className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
        <input
          className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-premium-500"
          type="text"
          placeholder="Nombre"
        />
        <input
          className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-premium-500"
          type="email"
          placeholder="Correo electrónico"
        />
        <textarea
          className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-premium-500"
          rows="5"
          placeholder="¿Qué tipo de propiedad estás buscando?"
        />
        <button
          className="rounded-full bg-premium-500 px-6 py-3 font-semibold text-neutral-950 transition hover:scale-[1.02]"
          type="button"
        >
          Enviar solicitud
        </button>
      </form>
    </section>
  );
}

export default Contacto;
