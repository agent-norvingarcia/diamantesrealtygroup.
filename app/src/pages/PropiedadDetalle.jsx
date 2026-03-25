import { Link, useParams } from 'react-router-dom';
import { properties } from '../data/properties.js';

function PropiedadDetalle() {
  const { id } = useParams();
  const property = properties.find((item) => item.id === Number(id));

  if (!property) {
    return (
      <section className="rounded-2xl border border-red-400/30 bg-red-400/10 p-6">
        <p>Propiedad no encontrada.</p>
        <Link className="mt-4 inline-block underline" to="/propiedades">
          Volver al listado
        </Link>
      </section>
    );
  }

  return (
    <section className="grid gap-8 py-8 lg:grid-cols-2">
      <img src={property.imagen} alt={property.titulo} className="h-full max-h-[420px] w-full rounded-2xl object-cover" />
      <article className="space-y-5">
        <h2 className="text-3xl font-bold">{property.titulo}</h2>
        <p className="text-2xl font-semibold text-premium-500">US$ {property.precio.toLocaleString()}</p>
        <p className="text-white/80">{property.descripcion}</p>
        <ul className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
          <li>📍 {property.ubicacion}</li>
          <li>🛏️ {property.habitaciones} habitaciones</li>
          <li>🛁 {property.banos} baños</li>
          <li>📐 {property.area} m²</li>
        </ul>
      </article>
    </section>
  );
}

export default PropiedadDetalle;
