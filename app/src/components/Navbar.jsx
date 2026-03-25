import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/propiedades', label: 'Propiedades' },
  { to: '/perfil', label: 'Perfil' },
  { to: '/contacto', label: 'Contacto' }
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-sm font-semibold uppercase tracking-[0.24em] text-premium-500">
          Norvin García
        </Link>

        <button
          className="rounded-md border border-white/20 px-3 py-1 text-sm md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          Menú
        </button>

        <ul
          className={`absolute left-0 top-16 w-full bg-black/95 p-4 md:static md:flex md:w-auto md:items-center md:gap-2 md:bg-transparent md:p-0 ${
            open ? 'block' : 'hidden md:flex'
          }`}
        >
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? 'bg-white text-neutral-950 shadow-premium'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
