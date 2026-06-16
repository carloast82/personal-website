import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Carlo Astolfi",
  description:
    "Informativa sulla privacy e sul trattamento dei dati personali del sito di Carlo Astolfi.",

  // 💡 CHICCA SEO: Impedisce a Google di mostrare i testi legali nei risultati di ricerca
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <main className="max-w-max-width mx-auto md:px-0 px-10">
        <section className="bg-bianco text-nero overflow-hidden border-b border-grigio-chiaro">
          <div className="container-site max-w-5xl pt-20 pb-20">
            {/* INTESTAZIONE PAGINA */}
            <header className="mb-12 border-b border-grigio-chiaro pb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-navy mb-2 block">
                Informativa Legale
              </span>
              <h1 className="font-serif text-3xl lg:text-4xl font-normal text-grigio-scuro mb-4">
                Privacy Policy
              </h1>
              <p className="font-mono text-xs text-grigio-medio">
                Ai sensi dell'Art. 13 del Regolamento UE 2016/679 (GDPR)
              </p>
            </header>

            {/* CORPO DEL TESTO */}
            <article className="font-sans text-sm lg:text-base text-grigio-scuro leading-relaxed space-y-8">
              <section className="space-y-3">
                <h2 className="font-serif text-xl lg:text-2xl text-grigio-scuro font-normal">
                  1. Titolare del Trattamento
                </h2>
                <p>
                  Il Titolare del Trattamento dei dati è il sig.{" "}
                  <strong className="text-grigio-scuro font-semibold">
                    Carlo Astolfi
                  </strong>{" "}
                  (Codice Fiscale: STLCRL82A23G916A), che gestisce questo sito
                  web a scopo puramente personale, informativo e come curriculum
                  vitae/portfolio professionale. Per qualsiasi comunicazione
                  relativa alla privacy, puoi scrivere all'indirizzo email:{" "}
                  <a
                    href="mailto:carloast82@gmail.com"
                    className="text-navy hover:underline font-medium"
                  >
                    carloast82@gmail.com
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-xl lg:text-2xl text-grigio-scuro font-normal">
                  2. Tipologia di Dati Trattati e Finalità
                </h2>
                <p>
                  Questo sito web è progettato per rispettare al massimo la
                  privacy dei visitatori. I dati vengono trattati esclusivamente
                  nelle seguenti modalità:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong className="text-grigio-scuro font-semibold">
                      Dati forniti volontariamente:
                    </strong>{" "}
                    Se decidi di scrivermi tramite il modulo di contatto o
                    direttamente via email, i dati che invii (come il tuo nome,
                    il tuo indirizzo email e il testo del messaggio) saranno
                    utilizzati al solo e unico scopo di risponderti o valutare
                    proposte di collaborazione lavorativa.
                  </li>
                  <li>
                    <strong className="text-grigio-scuro font-semibold">
                      Dati di navigazione:
                    </strong>{" "}
                    Questo sito non utilizza cookie di profilazione, non usa
                    script di tracciamento di terze parti (come Google
                    Analytics) e non effettua chiamate esterne. Anche i font di
                    Google sono integrati e caricati localmente sul server per
                    impedire il tracciamento degli indirizzi IP da parte di
                    terzi.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-xl lg:text-2xl text-grigio-scuro font-normal">
                  3. Base Giuridica e Conservazione dei Dati
                </h2>
                <p>
                  La base giuridica del trattamento è il tuo esplicito consenso,
                  espresso nel momento in cui decidi liberamente di compilare il
                  modulo di contatto e premere invio. I dati ricevuti saranno
                  conservati nella mia casella di posta elettronica per il tempo
                  strettamente necessario a gestire la conversazione o
                  l'eventuale selezione, e non saranno mai ceduti, venduti o
                  comunicati a soggetti terzi.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-xl lg:text-2xl text-grigio-scuro font-normal">
                  4. Diritti dell'Interessato
                </h2>
                <p>
                  In quanto utente (interessato), il GDPR ti garantisce il
                  diritto di richiedere in qualsiasi momento l'accesso ai tuoi
                  dati, la loro rettifica, la cancellazione immediata ("diritto
                  all'oblio") o la limitazione del trattamento. Puoi esercitare
                  ognuno di questi diritti inviando una semplice richiesta via
                  email a{" "}
                  <span className="text-grigio-scuro font-medium">
                    carloast82@gmail.com
                  </span>
                  .
                </p>
              </section>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
