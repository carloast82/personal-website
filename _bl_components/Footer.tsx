import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-transparent">
      <div className="max-w-[1440px] mx-auto bg-[#111622] text-white p-8 lg:p-16 pb-12">
        {/* GRIGLIA PRINCIPALE DEL FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-12">
          {/* COLONNA 1: LOGO E FILOSOFIA (4 Colonne su Desktop) */}
          <div className="md:col-span-5 lg:col-span-4 space-y-4">
            {/* Logo integrato con testo ed elemento geometrico */}
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-carloastolfi-white.webp"
                alt="Logo Carlo Astolfi"
                className="max-w-[200px] h-auto object-contain"
              />
            </div>

            {/* Descrizione Professionale */}
            <p className="font-sans text-xs text-white/50 leading-relaxed max-w-sm pt-2">
              <strong className="text-white/80 font-semibold">
                Sviluppatore Web & Graphic Designer
              </strong>{" "}
              con oltre 20 anni di esperienza (dal 2004) nella progettazione e
              programmazione di piattaforme digitali.
            </p>
          </div>

          {/* COLONNA 2: NAVIGAZIONE INTERNA (4 Colonne su Desktop, divisa in 2 sub-colonne) */}
          <div className="md:col-span-4 lg:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Esplora il sito
            </h4>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-2">
              <div className="space-y-3">
                <a
                  href="#chi-sono"
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors block"
                >
                  Chi Sono
                </a>
                <a
                  href="#competenze"
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors block"
                >
                  Competenze
                </a>
                <a
                  href="#contatti"
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors block"
                >
                  Contatti
                </a>
              </div>
              <div className="space-y-3">
                <a
                  href="#esperienze"
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors block"
                >
                  Esperienze
                </a>
                <a
                  href="#portfolio"
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors block"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* COLONNA 3: LINK ESTERNI / DOWNLOAD (3 Colonne su Desktop) */}
          <div className="md:col-span-3 lg:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Risorse esterne
            </h4>

            <div className="space-y-4 pt-2">
              {/* Download CV */}
              <a
                href="/cv-carlo-astolfi.pdf"
                download
                className="group flex items-center gap-3 font-sans text-sm text-white/70 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-none flex items-center justify-center text-white/60 group-hover:bg-white/10 group-hover:text-white transition-all shrink-0">
                  <img
                    src="/images/download.webp"
                    alt="Download CV"
                    className="w-4 h-4 object-contain"
                  />
                </div>
                <span>Curriculum Vitae PDF</span>
              </a>

              {/* Profilo LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-sans text-sm text-white/70 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-none flex items-center justify-center text-white/60 group-hover:bg-white/10 group-hover:text-white transition-all shrink-0">
                  <img
                    src="/images/Vector.webp"
                    alt="LinkedIn"
                    className="w-4 h-4 object-contain"
                  />
                </div>
                <span>Il mio profilo LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* LINEA DI SEPARAZIONE E COPYRIGHT BAR */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[11px] text-white/30 tracking-wide text-center sm:text-left">
            © 2026 Carlo Astolfi. Tutti i diritti riservati.
          </p>
          <div className="flex gap-4 font-mono text-[10px] text-white/30">
            <Link
              href="/privacy"
              className="hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
