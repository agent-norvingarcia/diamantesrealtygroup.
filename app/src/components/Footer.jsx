function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-center text-sm text-white/70 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Norvin García · Diamantes Realty Group</p>
        <p>Asesoría inmobiliaria premium en Nicaragua.</p>
      </div>
    </footer>
  );
}

export default Footer;
