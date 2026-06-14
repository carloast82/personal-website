import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "Chi Sono", href: "#chi-sono" },
    { name: "La Mia Filosofia", href: "#filosofia" },
    { name: "Esperienze", href: "#esperienze" },
    { name: "Competenze", href: "#competenze" },
    { name: "Portfolio Progetti", href: "#progetti" },
    { name: "Contatti", href: "#contatti" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-none transition-all">
      <div className="container-site h-30 flex items-center justify-between">
        {/* LOGO (Ispirato al tuo monogramma su Desktop.jpg) */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/images/logo-carloastolfi.webp"
            alt="Logo Carlo Astolfi"
            width={192}
            height={100}
          />
        </Link>

        {/* MENU DI NAVIGAZIONE (Centrale/Destra) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-sm font-medium text-gray-600 hover:text-blue transition-colors py-2"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* BOTTONE CALL TO ACTION (Scrica il mio CV) */}
        <div className="hidden md:block">
          <a
            href="/cv-carlo-astolfi.pdf" // Metterai il file dentro la cartella /public
            download
            className="font-sans text-xs font-semibold tracking-wider uppercase bg-navy hover:bg-senape/90 text-white hover:text-nero px-5 py-2.5 rounded-lg transition-all duration-300 block text-center"
          >
            Il mio curriculum in PDF
          </a>
        </div>
      </div>
    </header>
  );
}
