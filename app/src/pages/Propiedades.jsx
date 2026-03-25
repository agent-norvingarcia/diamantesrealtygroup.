import PropertyCard from '../components/PropertyCard.jsx';
import { properties } from '../data/properties.js';

function Propiedades() {
  return (
    <section className="py-8">
      <h2 className="mb-6 text-3xl font-bold">Propiedades disponibles</h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}

export default Propiedades;
