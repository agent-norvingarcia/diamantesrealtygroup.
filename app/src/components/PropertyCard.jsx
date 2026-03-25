import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function PropertyCard({ property }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl"
    >
      <img src={property.imagen} alt={property.titulo} className="h-52 w-full object-cover" />
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold">{property.titulo}</h3>
        <p className="text-sm text-white/70">{property.ubicacion}</p>
        <p className="text-2xl font-bold text-premium-500">US$ {property.precio.toLocaleString()}</p>
        <Link
          to={`/propiedad/${property.id}`}
          className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-premium-500"
        >
          Ver detalle
        </Link>
      </div>
    </motion.article>
  );
}

export default PropertyCard;
