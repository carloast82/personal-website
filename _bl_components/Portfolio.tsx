export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-bianco p-6 lg:p-16 border-t border-grigio-chiaro"
    >
      <div className="container-site">
        {/* INTESTAZIONE */}
        <div className="col-span-full text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-navy">
            Galleria lavori
          </span>
          <h2 className="font-semibold text-grigio-scuro title-line">
            Portfolio Progetti
          </h2>
          <p className="font-sans text-sm text-grigio-scuro mt-4 max-w-xl mx-auto">
            Clicca su ciascun progetto per visualizzarne i dettagli, la
            descrizione e le immagini addizionali di layout.
          </p>
        </div>

        {/* CONTENITORE GRIGLIA PORTFOLIO */}
        {/* CONTENITORE GRIGLIA PRINCIPALE */}
        {/* Su mobile 1 colonna, su tablet 2 colonne, su desktop 4 colonne. */}
        {/* auto-rows fissa l'altezza modulare di base per calcolare i rowspan precisi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[250px]">
          {/* IMAGINE 1: Verticale Stretta (1 Colonna x 2 Righe) */}
          <a
            href="#"
            className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm md:col-span-1 md:row-span-2"
          >
            <img
              src="/images/portfolio/ariostea.webp"
              alt="Ariostea"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-mono text-xs uppercase tracking-wider">
                Progetto: Ariostea
                <br /> / Gruppo Iris Ceramica S.p.A.
              </span>
            </div>
          </a>

          {/* IMMAGINE 2: Il Blocco Gigante (2 Colonne x 2 Righe) - Stile "Verde Persia" dell'immagine */}
          <a
            href="#"
            className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm sm:col-span-2 md:col-span-2 md:row-span-2"
          >
            <img
              src="/images/portfolio/Iris_fmg.webp"
              alt="Iris FMG"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-mono text-xs uppercase tracking-wider">
                Progetto: Iris FMG
                <br /> / Iris Ceramica Group S.p.A.
              </span>
            </div>
          </a>

          {/* IMMAGINE 3: Verticale Stretta (1 Colonna x 2 Righe) */}
          <a
            href="#"
            className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm md:col-span-1 md:row-span-2"
          >
            <img
              src="/images/portfolio/fondazione_icg.webp"
              alt="Semi di Futuro"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-mono text-xs uppercase tracking-wider">
                Progetto: Semi di Futuro
                <br /> / Fondazione Iris Ceramica Group
              </span>
            </div>
          </a>

          {/* IMMAGINE 4: Verticale Stretta (1 Colonna x 2 Righe) */}
          <a
            href="#"
            className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm md:col-span-1 md:row-span-2"
          >
            <img
              src="/images/portfolio/graphicom.webp"
              alt="Graphicom"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-mono text-xs uppercase tracking-wider">
                Progetto: Graphicom
              </span>
            </div>
          </a>

          {/* IMMAGINE 5: Orizzontale Larga (2 Colonne x 2 Riga) */}
          <a
            href="#"
            className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm sm:col-span-2 md:col-span-2 md:row-span-2"
          >
            <img
              src="/images/portfolio/ferrari.webp"
              alt="Ferrari"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-mono text-xs uppercase tracking-wider">
                Progetto: Ferrari S.p.A.
              </span>
            </div>
          </a>

          {/* IMMAGINE 6: Verticale Stretta (1 Colonna x 1 Righe) */}
          <a
            href="#"
            className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm md:col-span-1 md:row-span-1"
          >
            <img
              src="/images/portfolio/iris_ceramica.webp"
              alt="Bottega d'Arte"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-mono text-xs uppercase tracking-wider">
                Progetto: Bottega d'Arte
                <br /> / Iris Ceramica Group S.p.A.
              </span>
            </div>
          </a>

          {/* IMMAGINE 7: Orizzontale Larga (1 Colonne x 1 Riga) */}
          <a
            href="#"
            className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm sm:col-span-2 md:col-span-1 md:row-span-1"
          >
            <img
              src="/images/portfolio/bkey_consulting.webp"
              alt="Bkey Consulting"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-mono text-xs uppercase tracking-wider">
                Progetto: Bkey Consulting
              </span>
            </div>
          </a>

          {/* IMMAGINE 8: Verticale Stretta (1 Colonna x 2 Righe) */}
          <a
            href="#"
            className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm md:col-span-1 md:row-span-2"
          >
            <img
              src="/images/portfolio/enricocapra.webp"
              alt="Enrico Capra"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-mono text-xs uppercase tracking-wider">
                Progetto: Enrico Capra
              </span>
            </div>
          </a>

          {/* IMMAGINE 9: Secondo Blocco Grande (2 Colonne x 2 Righe) per bilanciare il fondo */}
          <a
            href="#"
            className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm sm:col-span-2 md:col-span-2 md:row-span-2"
          >
            <img
              src="/images/portfolio/iris_ceramica_group.webp"
              alt="ICG Showrooms"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-mono text-xs uppercase tracking-wider">
                Progetto: ICG Showrooms
                <br /> / Iris Ceramica Group S.p.A.
              </span>
            </div>
          </a>

          {/* IMMAGINE 10: Verticale Stretta finale (1 Colonna x 2 Righe) */}
          <a
            href="#"
            className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm md:col-span-1 md:row-span-2"
          >
            <img
              src="/images/portfolio/farmaciapianeriemauro.webp"
              alt="Farmacia Pianeri e Mauro"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-mono text-xs uppercase tracking-wider">
                Progetto: Farmacia Pianeri e Mauro
              </span>
            </div>
          </a>

          {/* IMMAGINE 10: Verticale Stretta finale (1 Colonna x 2 Righe) */}
          <a
            href="#"
            className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm md:col-span-2 md:row-span-2"
          >
            <img
              src="/images/portfolio/pagusmedia.webp"
              alt="Pagus Media"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs object-top"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-mono text-xs uppercase tracking-wider">
                Progetto: Pagus Media
              </span>
            </div>
          </a>

          {/* IMMAGINE 9: Secondo Blocco Grande (1 Colonne x 2 Righe) per bilanciare il fondo */}
          <a
            href="#"
            className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm sm:col-span-2 md:col-span-1 md:row-span-2"
          >
            <img
              src="/images/portfolio/marchesenutrizionista.webp"
              alt="Marchese Nutrizionista"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-mono text-xs uppercase tracking-wider">
                Progetto: Marchese Nutrizionista
              </span>
            </div>
          </a>

          {/* IMMAGINE 9: Secondo Blocco Grande (1 Colonne x 1 Righe) per bilanciare il fondo */}
          <a
            href="#"
            className="group relative block w-full h-full overflow-hidden rounded-2xl border border-grigio-chiaro/50 shadow-sm sm:col-span-2 md:col-span-1 md:row-span-1"
          >
            <img
              src="/images/portfolio/gerber_rauth.webp"
              alt="Gerber Rauth"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-xs object-top"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-mono text-xs uppercase tracking-wider">
                Progetto: Gerber Rauth
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
