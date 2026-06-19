import { data } from "framer-motion/client";

export interface ImmagineDettaglio {
  thumbPath: string;
  bigPath: string;
  alt: string;
  blocco: number;
  sequenza: number;
  mdRowSpan: number;
  mdColSpan: number;
}

export interface PortfolioItem {
  id: string;
  progetto: string;
  path: string;
  blocco: number; // 1, 2, 3, 4
  sequenza: number; // Ordine all'interno del blocco
  mdColSpan: number;
  mdRowSpan: number;
  smColSpan?: number; // Opzionale per i layout responsive intermedi
  variant: "revealLeftToRight" | "revealVertical" | "revealRightToLeft";
  slug: string;
  categoria: string[];
  cliente: string;
  anno: string;
  tipo: string[];
  attivita: string[];
  descrizione: string;
  tecnologie: string[];
  notaCrediti: string;
  immaginiDettaglio: ImmagineDettaglio[];
}

export const portfolioItems: PortfolioItem[] = [
  // --- BLOCCO 1 ---
  {
    id: "carlo-astolfi-cv",
    progetto: "Carlo Astolfi CV",
    path: "/images/portfolio/carloastolfi.webp",
    blocco: 1,
    sequenza: 1,
    mdColSpan: 1,
    mdRowSpan: 3,
    variant: "revealLeftToRight",
    slug: "carlo-astolfi-cv",
    categoria: ["Personale", "Siti Web"],
    cliente: "Carlo Astolfi",
    anno: "2026",
    tipo: ["Portfolio", "CV Web"],
    attivita: ["Design UI/UX", "Sviluppo Frontend", "Branding personale"],
    descrizione: `Questo sito nasce con l'obiettivo di presentare il mio percorso e le mie competenze in modo chiaro, diretto e interattivo. 
      Ho scelto di svilupparlo utilizzando Next.js e Tailwind CSS, una decisione presa per approfondire sul campo queste tecnologie d'avanguardia. 
      Inoltre, ho integrato nel flusso di lavoro l'utilizzo proattivo di IA e modelli LLM, sfruttandoli per ottimizzare lo sviluppo. 
      Il risultato è un progetto moderno, con un design pulito, che riflette la mia attitudine al continuo aggiornamento tecnico.`,
    tecnologie: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Figma",
      "Gemini",
      "Copilot",
    ],
    notaCrediti: "",
    immaginiDettaglio: [
      {
        thumbPath:
          "/images/portfolio/carlo-astolfi-cv/thumb/01-carloastolfi.webp",
        bigPath: "/images/portfolio/carlo-astolfi-cv/big/01-carloastolfi.webp",
        alt: "Carlo Astolfi CV",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/carlo-astolfi-cv/thumb/02-carloastolfi.webp",
        bigPath: "/images/portfolio/carlo-astolfi-cv/big/02-carloastolfi.webp",
        alt: "Carlo Astolfi CV",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/carlo-astolfi-cv/thumb/03-carloastolfi.webp",
        bigPath: "/images/portfolio/carlo-astolfi-cv/big/03-carloastolfi.webp",
        alt: "Carlo Astolfi CV",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 1,
      },
      {
        thumbPath:
          "/images/portfolio/carlo-astolfi-cv/thumb/04-carloastolfi.webp",
        bigPath: "/images/portfolio/carlo-astolfi-cv/big/04-carloastolfi.webp",
        alt: "Carlo Astolfi CV",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 2,
      },

      {
        thumbPath:
          "/images/portfolio/carlo-astolfi-cv/thumb/05-carloastolfi.webp",
        bigPath: "/images/portfolio/carlo-astolfi-cv/big/05-carloastolfi.webp",
        alt: "Carlo Astolfi CV",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 1,
      },
    ],
  },

  {
    id: "ariostea",
    progetto: "Ariostea",
    path: "/images/portfolio/ariostea.webp",
    blocco: 1,
    sequenza: 2,
    mdColSpan: 1,
    mdRowSpan: 3,
    variant: "revealLeftToRight",
    slug: "ariostea",
    categoria: ["Siti Web", "Branding"],
    cliente: "Ariostea / Iris Ceramica Group",
    anno: "2017",
    tipo: ["Sito Web aziendale", "Digital Design"],
    attivita: [
      "Web design",
      "UI design",
      "SEO",
      "Sviluppo",
      "Data Entry",
      "DB Management",
    ],
    descrizione:
      "Ho curato l'intero ciclo di sviluppo di questo progetto: partendo dallo studio dei wireframe e della grafica, fino alla creazione dei template statici. Sul fronte tecnico, ho gestito la programmazione dinamica in PHP e l'organizzazione del database MySQL. Il sito è stato inoltre ottimizzato lato SEO, sia nella struttura del layout che nella gestione dei metadati. Il risultato è un'interfaccia pulita e una navigazione intuitiva, progettata per dare massimo risalto alle immagini di prodotto e ai contenuti editoriali nel rispetto dell'identità del brand.",
    tecnologie: [
      "Photoshop",
      "Illustrator",
      "PHP",
      "HTML5",
      "SCSS",
      "Bootstrap",
    ],
    notaCrediti:
      "Sito web realizzato come web developer e web designer in Pagus Media S.r.l",
    immaginiDettaglio: [
      {
        thumbPath: "/images/portfolio/ariostea/thumb/01-ariostea.webp",
        bigPath: "/images/portfolio/ariostea/big/01-ariostea.webp",
        alt: "Ariostea",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/ariostea/thumb/02-ariostea.webp",
        bigPath: "/images/portfolio/ariostea/big/02-ariostea.webp",
        alt: "Ariostea",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 2,
      },
      {
        thumbPath: "/images/portfolio/ariostea/thumb/03-ariostea.webp",
        bigPath: "/images/portfolio/ariostea/big/03-ariostea.webp",
        alt: "Ariostea",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/ariostea/thumb/04-ariostea.webp",
        bigPath: "/images/portfolio/ariostea/big/04-ariostea.webp",
        alt: "Ariostea",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 4,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/ariostea/thumb/05-ariostea.webp",
        bigPath: "/images/portfolio/ariostea/big/05-ariostea.webp",
        alt: "Ariostea",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/ariostea/thumb/06-ariostea.webp",
        bigPath: "/images/portfolio/ariostea/big/06-ariostea.webp",
        alt: "Ariostea",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 2,
      },

      {
        thumbPath: "/images/portfolio/ariostea/thumb/07-ariostea.webp",
        bigPath: "/images/portfolio/ariostea/big/07-ariostea.webp",
        alt: "Ariostea",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
    ],
  },

  {
    id: "iris-fmg",
    progetto: "Iris FMG",
    path: "/images/portfolio/Iris_fmg.webp",
    blocco: 1,
    sequenza: 3,
    mdColSpan: 2,
    mdRowSpan: 3,
    smColSpan: 1,
    variant: "revealVertical",
    slug: "iris-fmg",
    categoria: ["Concept", "Siti Web"],
    cliente: "FMG / Iris Ceramica Group",
    anno: "2021",
    tipo: ["Concept Grafico", "Sito Istituzionale"],
    attivita: ["Graphic design", "UI concept"],
    descrizione: `Il progetto ha riguardato la proposta grafica e lo studio dell'interfaccia utente (UI), con l'obiettivo di delineare un'esperienza visiva moderna, coerente e intuitiva.
Il lavoro si è concentrato sullo sviluppo concept della Home Page, definendo l'identità visiva del sito per poi declinarne il layout e lo stile sulle diverse sezioni interne.
Ogni pagina è stata strutturata per garantire armonia visiva, fluidità di navigazione e una chiara gerarchia delle informazioni. Il progetto è stato interamente finalizzato a livello di mockup visivo e non ha previsto una successiva fase di sviluppo tecnico o pubblicazione online.`,
    tecnologie: ["Adobe XD", "Figma", "HTML5", "CSS"],
    notaCrediti:
      "Concept grafico realizzato come web developer e web designer in Pagus Media S.r.l",
    immaginiDettaglio: [
      {
        thumbPath: "/images/portfolio/iris-fmg/thumb/01-irisfmg.webp",
        bigPath: "/images/portfolio/iris-fmg/big/01-irisfmg.webp",
        alt: "Iris FMG",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/iris-fmg/thumb/02-irisfmg.webp",
        bigPath: "/images/portfolio/iris-fmg/big/02-irisfmg.webp",
        alt: "Iris FMG",
        blocco: 1,
        sequenza: 2,
        mdRowSpan: 4,
        mdColSpan: 2,
      },
      {
        thumbPath: "/images/portfolio/iris-fmg/thumb/03-irisfmg.webp",
        bigPath: "/images/portfolio/iris-fmg/big/03-irisfmg.webp",
        alt: "Iris FMG",
        blocco: 1,
        sequenza: 3,
        mdRowSpan: 3,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/iris-fmg/thumb/04-irisfmg.webp",
        bigPath: "/images/portfolio/iris-fmg/big/04-irisfmg.webp",
        alt: "Iris FMG",
        blocco: 1,
        sequenza: 4,
        mdRowSpan: 1,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/iris-fmg/thumb/05-irisfmg.webp",
        bigPath: "/images/portfolio/iris-fmg/big/05-irisfmg.webp",
        alt: "Iris FMG",
        blocco: 2,
        sequenza: 5,
        mdRowSpan: 4,
        mdColSpan: 2,
      },
      {
        thumbPath: "/images/portfolio/iris-fmg/thumb/06-irisfmg.webp",
        bigPath: "/images/portfolio/iris-fmg/big/06-irisfmg.webp",
        alt: "Iris FMG",
        blocco: 2,
        sequenza: 6,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
      {
        thumbPath: "/images/portfolio/iris-fmg/thumb/07-irisfmg.webp",
        bigPath: "/images/portfolio/iris-fmg/big/07-irisfmg.webp",
        alt: "Iris FMG",
        blocco: 2,
        sequenza: 7,
        mdRowSpan: 2,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/iris-fmg/thumb/08-irisfmg.webp",
        bigPath: "/images/portfolio/iris-fmg/big/08-irisfmg.webp",
        alt: "Iris FMG",
        blocco: 2,
        sequenza: 8,
        mdRowSpan: 2,
        mdColSpan: 1,
      },
    ],
  },

  // --- BLOCCO 2 ---
  {
    id: "fondazione-irisceramicagroup",
    progetto: "Fondazione Iris Ceramica Group",
    path: "/images/portfolio/fondazione_icg.webp",
    blocco: 2,
    sequenza: 1,
    mdColSpan: 1,
    mdRowSpan: 3,
    variant: "revealRightToLeft",
    slug: "fondazione-irisceramicagroup",
    categoria: ["Siti Web"],
    cliente: "Iris Ceramica Group",
    anno: "2025",
    tipo: ["Progetto Sociale"],
    attivita: ["Sviluppo web", "Data Entry"],
    descrizione:
      "Ho sviluppato la piattaforma digitale per questa organizzazione no profit (nata nel 2019 dall'impegno del gruppo industriale verso l'ambiente, il territorio e la collettività). Il sito è stato realizzato in WordPress utilizzando Elementor Pro e Advanced Custom Fields (ACF) per garantire una gestione dinamica e su misura. Oltre alla configurazione tecnica, mi sono occupato del data entry di tutti i contenuti e della digitalizzazione dello storico degli eventi, strutturando il layout per comunicare le iniziative sociali e culturali con la massima chiarezza e leggibilità.",
    tecnologie: ["Wordpress", "Elementor", "ACF"],
    notaCrediti:
      "Sito web realizzato come web developer e web designer in Pagus Media S.r.l",
    immaginiDettaglio: [
      {
        thumbPath:
          "/images/portfolio/fondazione-irisceramica-group/thumb/01-fondazione.webp",
        bigPath:
          "/images/portfolio/fondazione-irisceramica-group/big/01-fondazione.webp",
        alt: "Fondazione Iris Ceramica Group",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/fondazione-irisceramica-group/thumb/02-fondazione.webp",
        bigPath:
          "/images/portfolio/fondazione-irisceramica-group/big/02-fondazione.webp",
        alt: "Fondazione Iris Ceramica Group",
        blocco: 1,
        sequenza: 2,
        mdRowSpan: 4,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/fondazione-irisceramica-group/thumb/03-fondazione.webp",
        bigPath:
          "/images/portfolio/fondazione-irisceramica-group/big/03-fondazione.webp",
        alt: "Fondazione Iris Ceramica Group",
        blocco: 1,
        sequenza: 3,
        mdRowSpan: 2,
        mdColSpan: 1,
      },
      {
        thumbPath:
          "/images/portfolio/fondazione-irisceramica-group/thumb/04-fondazione.webp",
        bigPath:
          "/images/portfolio/fondazione-irisceramica-group/big/04-fondazione.webp",
        alt: "Fondazione Iris Ceramica Group",
        blocco: 1,
        sequenza: 4,
        mdRowSpan: 2,
        mdColSpan: 1,
      },
      {
        thumbPath:
          "/images/portfolio/fondazione-irisceramica-group/thumb/05-fondazione.webp",
        bigPath:
          "/images/portfolio/fondazione-irisceramica-group/big/05-fondazione.webp",
        alt: "Fondazione Iris Ceramica Group",
        blocco: 2,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/fondazione-irisceramica-group/thumb/06-fondazione.webp",
        bigPath:
          "/images/portfolio/fondazione-irisceramica-group/big/06-fondazione.webp",
        alt: "Fondazione Iris Ceramica Group",
        blocco: 2,
        sequenza: 2,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
    ],
  },
  {
    id: "ferrari",
    progetto: "Ferrari S.p.A.",
    path: "/images/portfolio/ferrari.webp",
    blocco: 2,
    sequenza: 2,
    mdColSpan: 2,
    mdRowSpan: 3,
    smColSpan: 1,
    variant: "revealVertical",
    slug: "ferrari",
    categoria: ["Advertising", "Digital"],
    cliente: "Ferrari S.p.A.",
    anno: "2011-2013",
    tipo: ["Campagna Digital", "Asset Grafici"],
    attivita: [
      "Progettazione banner",
      "Visual social",
      "Advertising",
      "Wallpapers",
      "Newsletter",
    ],
    descrizione:
      "Ho curato la progettazione visiva e la realizzazione dei materiali digitali per una campagna di advertising multipiattaforma. Il progetto ha previsto la creazione di formati ad alto impatto per diversi touchpoint: dai banner web ai visual per i social network, fino a wallpaper dedicati. Sfruttando Photoshop e Illustrator per la parte di grafica editoriale, e HTML/CSS per i formati web interattivi, ho sviluppato layout moderni e coerenti, pensati per catturare l'attenzione dell'utente e massimizzare l'engagement sui canali digitali.",
    tecnologie: ["Photoshop", "Illustrator", "HTML5", "CSS"],
    notaCrediti:
      "Concept grafico realizzato come web developer e web designer in Pagus Media S.r.l",
    immaginiDettaglio: [
      {
        thumbPath: "/images/portfolio/ferrari/thumb/01-ferrari.webp",
        bigPath: "/images/portfolio/ferrari/big/01-ferrari.webp",
        alt: "Ferrari",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 4,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/ferrari/thumb/02-ferrari.webp",
        bigPath: "/images/portfolio/ferrari/big/02-ferrari.webp",
        alt: "Ferrari",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 3,
      },
      {
        thumbPath: "/images/portfolio/ferrari/thumb/03-ferrari.webp",
        bigPath: "/images/portfolio/ferrari/big/03-ferrari.webp",
        alt: "Ferrari",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 3,
      },
      {
        thumbPath: "/images/portfolio/ferrari/thumb/04-ferrari.webp",
        bigPath: "/images/portfolio/ferrari/big/04-ferrari.webp",
        alt: "Ferrari",
        blocco: 2,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/ferrari/thumb/05-ferrari.webp",
        bigPath: "/images/portfolio/ferrari/big/05-ferrari.webp",
        alt: "Ferrari",
        blocco: 2,
        sequenza: 1,
        mdRowSpan: 1,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/ferrari/thumb/06-ferrari.webp",
        bigPath: "/images/portfolio/ferrari/big/06-ferrari.webp",
        alt: "Ferrari",
        blocco: 2,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
      {
        thumbPath: "/images/portfolio/ferrari/thumb/07-ferrari.webp",
        bigPath: "/images/portfolio/ferrari/big/07-ferrari.webp",
        alt: "Ferrari",
        blocco: 2,
        sequenza: 1,
        mdRowSpan: 1,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/ferrari/thumb/08-ferrari.webp",
        bigPath: "/images/portfolio/ferrari/big/08-ferrari.webp",
        alt: "Ferrari",
        blocco: 2,
        sequenza: 1,
        mdRowSpan: 1,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/ferrari/thumb/09-ferrari.webp",
        bigPath: "/images/portfolio/ferrari/big/09-ferrari.webp",
        alt: "Ferrari",
        blocco: 2,
        sequenza: 1,
        mdRowSpan: 1,
        mdColSpan: 2,
      },
    ],
  },
  {
    id: "bottega-darte",
    progetto: "Bottega d'Arte by Iris Ceramica",
    path: "/images/portfolio/iris_ceramica.webp",
    blocco: 2,
    sequenza: 3,
    mdColSpan: 1,
    mdRowSpan: 1,
    variant: "revealVertical",
    slug: "bottega-darte",
    categoria: ["Siti Web", "Graphic Design"],
    cliente: "Iris Ceramica Group",
    anno: "2022",
    tipo: ["Concept Grafico", "Sito Web"],
    attivita: ["Brand identity", "Web design", "Sviluppo visual"],
    descrizione: `Ho curato la progettazione e lo sviluppo di una pagina web dedicata al lancio di una nuova collezione speciale di Iris Ceramica. 
      Il lavoro è partito dalla definizione della brand identity e del web design su Photoshop, con l'obiettivo di valorizzare l'estetica artigianale del prodotto. 
      Sul fronte tecnico, ho implementato la pagina in HTML, CSS e PHP, curando lo sviluppo dei visual e ottimizzando il layout affinché l'esperienza d'uso fosse fluida, curata nei dettagli e reattiva sia su desktop che su mobile.`,
    tecnologie: ["Photoshop", "CSS", "PHP", "HTML5", "Bootstrap"],
    notaCrediti:
      "Sito web realizzato come web developer e web designer in Pagus Media S.r.l",
    immaginiDettaglio: [
      {
        thumbPath:
          "/images/portfolio/bottega-darte/thumb/01-bottega-darte.webp",
        bigPath: "/images/portfolio/bottega-darte/big/01-bottega-darte.webp",
        alt: "Bottega d'Arte",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 1,
      },
      {
        thumbPath:
          "/images/portfolio/bottega-darte/thumb/02-bottega-darte.webp",
        bigPath: "/images/portfolio/bottega-darte/big/02-bottega-darte.webp",
        alt: "Bottega d'Arte",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/bottega-darte/thumb/03-bottega-darte.webp",
        bigPath: "/images/portfolio/bottega-darte/big/03-bottega-darte.webp",
        alt: "Bottega d'Arte",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 1,
      },
      {
        thumbPath:
          "/images/portfolio/bottega-darte/thumb/04-bottega-darte.webp",
        bigPath: "/images/portfolio/bottega-darte/big/04-bottega-darte.webp",
        alt: "Bottega d'Arte",
        blocco: 2,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/bottega-darte/thumb/05-bottega-darte.webp",
        bigPath: "/images/portfolio/bottega-darte/big/05-bottega-darte.webp",
        alt: "Bottega d'Arte",
        blocco: 2,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 1,
      },
    ],
  },
  {
    id: "bkey-consulting",
    progetto: "Bkey Consulting",
    path: "/images/portfolio/bkey_consulting.webp",
    blocco: 2,
    sequenza: 4,
    mdColSpan: 1,
    mdRowSpan: 2,
    smColSpan: 1,
    variant: "revealLeftToRight",
    slug: "bkey-consulting",
    categoria: ["Siti Web", "Marketing"],
    cliente: "Bkey Consulting",
    anno: "2017",
    tipo: ["Sito istituzionale", "Web design"],
    attivita: ["Progettazione UX", "Sviluppo web", "Contenuti aziendali"],
    descrizione: `Per questo progetto aziendale mi sono occupato dell'intero sviluppo tecnico, traducendo fedelmente il design fornito in template statici (HTML/CSS3/JavaScript/jQuery) e convertendoli successivamente in codice dinamico. 
      Ho sviluppato da zero un sistema di backend gestionale custom in PHP e MySQL, collegandolo al sito per consentire una gestione flessibile dei contenuti aziendali. 
      L'architettura del codice è stata strutturata per garantire un layout leggero, una perfetta leggibilità dei testi e la massima efficacia delle call-to-action.`,
    tecnologie: ["PHP", "jQuery", "HTML5", "CSS3", "Bootstrap"],
    notaCrediti:
      "Sito web realizzato come web developer e web designer in Pagus Media S.r.l",
    immaginiDettaglio: [
      {
        thumbPath:
          "/images/portfolio/bkey-consulting/thumb/01-bkeyconsulting.webp",
        bigPath: "/images/portfolio/bkey-consulting/big/01-bkeyconsulting.webp",
        alt: "Bkey Consulting",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/bkey-consulting/thumb/02-bkeyconsulting.webp",
        bigPath: "/images/portfolio/bkey-consulting/big/02-bkeyconsulting.webp",
        alt: "Bkey Consulting",
        blocco: 1,
        sequenza: 2,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/bkey-consulting/thumb/03-bkeyconsulting.webp",
        bigPath: "/images/portfolio/bkey-consulting/big/03-bkeyconsulting.webp",
        alt: "Bkey Consulting",
        blocco: 1,
        sequenza: 3,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/bkey-consulting/thumb/05-bkeyconsulting.webp",
        bigPath: "/images/portfolio/bkey-consulting/big/05-bkeyconsulting.webp",
        alt: "Bkey Consulting",
        blocco: 2,
        sequenza: 2,
        mdRowSpan: 3,
        mdColSpan: 3,
      },
      {
        thumbPath:
          "/images/portfolio/bkey-consulting/thumb/04-bkeyconsulting.webp",
        bigPath: "/images/portfolio/bkey-consulting/big/04-bkeyconsulting.webp",
        alt: "Bkey Consulting",
        blocco: 2,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 1,
      },
    ],
  },

  // --- BLOCCO 3 ---
  {
    id: "enrico-capra",
    progetto: "Enrico Capra",
    path: "/images/portfolio/enricocapra.webp",
    blocco: 3,
    sequenza: 1,
    mdColSpan: 1,
    mdRowSpan: 3,
    variant: "revealLeftToRight",
    slug: "enrico-capra",
    categoria: ["Siti Web"],
    cliente: "Enrico Capra",
    anno: "2022",
    tipo: ["Sito Vetrina"],
    attivita: ["Sviluppo web"],
    descrizione: `Per questo progetto mi sono occupato interamente dello sviluppo web su piattaforma WordPress. 
      Partendo dai layout grafici approvati, ho realizzato il sito vetrina rispettando minuziosamente ogni linea guida visiva per garantire la massima fedeltà con il design originale. 
      Il sito è stato strutturato per mettere in primo piano il profilo professionale, i servizi e lo storytelling del cliente, traducendo l'identità visiva in un layout moderno, leggero e perfettamente bilanciato.`,
    tecnologie: ["Wordpress", "UX Builder", "PHP", "HTML5", "CSS"],
    notaCrediti:
      "Sito web realizzato come web developer e web designer in Pagus Media S.r.l",
    immaginiDettaglio: [
      {
        thumbPath: "/images/portfolio/enrico-capra/thumb/01-enricocapra.webp",
        bigPath: "/images/portfolio/enrico-capra/big/01-enricocapra.webp",
        alt: "Enrico Capra",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 2,
      },
      {
        thumbPath: "/images/portfolio/enrico-capra/thumb/02-enricocapra.webp",
        bigPath: "/images/portfolio/enrico-capra/big/02-enricocapra.webp",
        alt: "Enrico Capra",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
      {
        thumbPath: "/images/portfolio/enrico-capra/thumb/03-enricocapra.webp",
        bigPath: "/images/portfolio/enrico-capra/big/03-enricocapra.webp",
        alt: "Enrico Capra",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
      {
        thumbPath: "/images/portfolio/enrico-capra/thumb/04-enricocapra.webp",
        bigPath: "/images/portfolio/enrico-capra/big/04-enricocapra.webp",
        alt: "Enrico Capra",
        blocco: 2,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/enrico-capra/thumb/05-enricocapra.webp",
        bigPath: "/images/portfolio/enrico-capra/big/05-enricocapra.webp",
        alt: "Enrico Capra",
        blocco: 2,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
    ],
  },
  {
    id: "icg-showrooms",
    progetto: "ICG Showrooms",
    path: "/images/portfolio/iris_ceramica_group.webp",
    blocco: 3,
    sequenza: 2,
    mdColSpan: 2,
    mdRowSpan: 3,
    smColSpan: 1,
    variant: "revealRightToLeft",
    slug: "icg-showrooms",
    categoria: ["Siti Web", "Branding"],
    cliente: "Iris Ceramica Group",
    anno: "2020",
    tipo: ["Sito Web aziendale"],
    attivita: [
      "Web design",
      "UI design",
      "SEO",
      "Sviluppo",
      "Data Entry",
      "DB Management",
    ],
    descrizione:
      "Proposta di sito per showrooms aziendali con un focus sui prodotti e sul contesto espositivo. Il progetto valorizza immagini di ambiente e schede prodotto, offrendo una navigazione chiara per clienti e partner.",
    tecnologie: ["Adobe XD", "Photoshop", "PHP", "HTML5", "SCSS", "Bootstrap"],
    notaCrediti:
      "Concept grafico realizzato come web developer e web designer in Pagus Media S.r.l",
    immaginiDettaglio: [
      {
        thumbPath:
          "/images/portfolio/icg-showrooms/thumb/01-icg-showrooms.webp",
        bigPath: "/images/portfolio/icg-showrooms/big/01-icg-showrooms.webp",
        alt: "Homepage showrooms",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/icg-showrooms/thumb/02-icg-showrooms.webp",
        bigPath: "/images/portfolio/icg-showrooms/big/02-icg-showrooms.webp",
        alt: "Sezione prodotti",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 4,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/icg-showrooms/thumb/03-icg-showrooms.webp",
        bigPath: "/images/portfolio/icg-showrooms/big/03-icg-showrooms.webp",
        alt: "Mockup desktop",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/icg-showrooms/thumb/04-icg-showrooms.webp",
        bigPath: "/images/portfolio/icg-showrooms/big/04-icg-showrooms.webp",
        alt: "Visual showroom",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/icg-showrooms/thumb/05-icg-showrooms.webp",
        bigPath: "/images/portfolio/icg-showrooms/big/05-icg-showrooms.webp",
        alt: "Layout mobile",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/icg-showrooms/thumb/06-icg-showrooms.webp",
        bigPath: "/images/portfolio/icg-showrooms/big/06-icg-showrooms.webp",
        alt: "Dettaglio brand",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
    ],
  },
  {
    id: "farmacia-pianeri-e-mauro",
    progetto: "Farmacia Pianeri e Mauro",
    path: "/images/portfolio/farmaciapianeriemauro.webp",
    blocco: 3,
    sequenza: 3,
    mdColSpan: 1,
    mdRowSpan: 3,
    variant: "revealVertical",
    slug: "farmacia-pianeri-e-mauro",
    categoria: ["Siti Web"],
    cliente: "Farmacia Pianeri e Mauro",
    anno: "2023",
    tipo: ["Sito Vetrina"],
    attivita: ["Sviluppo web", "Data Entry"],
    descrizione: `Per questo progetto aziendale mi sono occupato della migrazione tecnica e dello sviluppo su piattaforma WordPress. 
      Partendo dalle indicazioni grafiche fornite, ho realizzato un tema personalizzato rispettando in modo preciso il design originale. 
      Ho gestito l'intera ottimizzazione delle pagine e l'attività di data entry, strutturando un catalogo prodotti chiaro e una navigazione intuitiva. 
      Il codice è stato ottimizzato in ottica SEO per garantire la massima visibilità alla farmacia sul territorio.`,
    tecnologie: ["Wordpress", "Divi", "PHP", "HTML5", "CSS3", "SCSS"],
    notaCrediti:
      "Sito web realizzato come web developer e web designer in Pagus Media S.r.l",
    immaginiDettaglio: [
      {
        thumbPath:
          "/images/portfolio/farmacia-pianeri-e-mauro/thumb/07-farmacia-pianeri-e-mauro.webp",
        bigPath:
          "/images/portfolio/farmacia-pianeri-e-mauro/big/07-farmacia-pianeri-e-mauro.webp",
        alt: "Homepage farmacia",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 4,
        mdColSpan: 1,
      },
      {
        thumbPath:
          "/images/portfolio/farmacia-pianeri-e-mauro/thumb/01-farmacia-pianeri-e-mauro.webp",
        bigPath:
          "/images/portfolio/farmacia-pianeri-e-mauro/big/01-farmacia-pianeri-e-mauro.webp",
        alt: "Sezione prodotti",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/farmacia-pianeri-e-mauro/thumb/05-farmacia-pianeri-e-mauro.webp",
        bigPath:
          "/images/portfolio/farmacia-pianeri-e-mauro/big/05-farmacia-pianeri-e-mauro.webp",
        alt: "Navigazione intuitiva",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 4,
        mdColSpan: 1,
      },
      {
        thumbPath:
          "/images/portfolio/farmacia-pianeri-e-mauro/thumb/03-farmacia-pianeri-e-mauro.webp",
        bigPath:
          "/images/portfolio/farmacia-pianeri-e-mauro/big/03-farmacia-pianeri-e-mauro.webp",
        alt: "Dettaglio grafico",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/farmacia-pianeri-e-mauro/thumb/04-farmacia-pianeri-e-mauro.webp",
        bigPath:
          "/images/portfolio/farmacia-pianeri-e-mauro/big/04-farmacia-pianeri-e-mauro.webp",
        alt: "Navigazione intuitiva",
        blocco: 2,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/farmacia-pianeri-e-mauro/thumb/02-farmacia-pianeri-e-mauro.webp",
        bigPath:
          "/images/portfolio/farmacia-pianeri-e-mauro/big/02-farmacia-pianeri-e-mauro.webp",
        alt: "Design mobile",
        blocco: 2,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 1,
      },
      {
        thumbPath:
          "/images/portfolio/farmacia-pianeri-e-mauro/thumb/06-farmacia-pianeri-e-mauro.webp",
        bigPath:
          "/images/portfolio/farmacia-pianeri-e-mauro/big/06-farmacia-pianeri-e-mauro.webp",
        alt: "Navigazione intuitiva",
        blocco: 2,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 1,
      },
    ],
  },

  // --- BLOCCO 4 ---
  {
    id: "pagus-media",
    progetto: "Pagus Media",
    path: "/images/portfolio/pagusmedia.webp",
    blocco: 4,
    sequenza: 1,
    mdColSpan: 2,
    mdRowSpan: 4,
    variant: "revealVertical",
    slug: "pagus-media",
    categoria: ["Sito web", "Web Agency"],
    cliente: "Pagus Media",
    anno: "2022",
    tipo: ["Branding aziendale", "Sito istituzionale"],
    attivita: ["Sviluppo web", "Data Entry"],
    descrizione: `Per questo progetto aziendale mi sono occupato dello sviluppo del sito web istituzionale su piattaforma WordPress. 
      Partendo dalle indicazioni grafiche fornite dal team, ho realizzato un tema personalizzato rispettando in modo preciso il design originale. 
      Ho gestito l'intera ottimizzazione delle pagine e l'attività di data entry, strutturando la presentazione dei servizi dell'agenzia e del portfolio casi di studio attraverso una navigazione intuitiva. Il codice è stato interamente ottimizzato in ottica SEO per valorizzare il posizionamento del brand sui motori di ricerca.`,
    tecnologie: ["Wordpress", "Divi", "PHP", "HTML5", "CSS3", "SCSS"],
    notaCrediti:
      "Sito web realizzato come web developer e web designer in Pagus Media S.r.l",
    immaginiDettaglio: [
      {
        thumbPath: "/images/portfolio/pagusmedia/thumb/01-pagusmedia.webp",
        bigPath: "/images/portfolio/pagusmedia/big/01-pagusmedia.webp",
        alt: "Homepage Pagus Media",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 4,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/pagusmedia/thumb/02-pagusmedia.webp",
        bigPath: "/images/portfolio/pagusmedia/big/02-pagusmedia.webp",
        alt: "Sezione servizi",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 4,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/pagusmedia/thumb/03-pagusmedia.webp",
        bigPath: "/images/portfolio/pagusmedia/big/03-pagusmedia.webp",
        alt: "Design portfolio",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 4,
        mdColSpan: 2,
      },
      {
        thumbPath: "/images/portfolio/pagusmedia/thumb/04-pagusmedia.webp",
        bigPath: "/images/portfolio/pagusmedia/big/04-pagusmedia.webp",
        alt: "Visual identity",
        blocco: 2,
        sequenza: 1,
        mdRowSpan: 4,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/pagusmedia/thumb/05-pagusmedia.webp",
        bigPath: "/images/portfolio/pagusmedia/big/05-pagusmedia.webp",
        alt: "Visual identity",
        blocco: 2,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
      {
        thumbPath: "/images/portfolio/pagusmedia/thumb/06-pagusmedia.webp",
        bigPath: "/images/portfolio/pagusmedia/big/06-pagusmedia.webp",
        alt: "Visual identity",
        blocco: 2,
        sequenza: 1,
        mdRowSpan: 4,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/pagusmedia/thumb/07-pagusmedia.webp",
        bigPath: "/images/portfolio/pagusmedia/big/07-pagusmedia.webp",
        alt: "Visual identity",
        blocco: 2,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
    ],
  },
  {
    id: "marchese-nutrizionista",
    progetto: "Marchese Nutrizionista",
    path: "/images/portfolio/marchesenutrizionista.webp",
    blocco: 4,
    sequenza: 2,
    mdColSpan: 1,
    mdRowSpan: 3,
    smColSpan: 1,
    variant: "revealRightToLeft",
    slug: "marchese-nutrizionista",
    categoria: ["Siti Web", "Health"],
    cliente: "Marchese Nutrizionista",
    anno: "2022",
    tipo: ["Sito personale", "Servizi digitali"],
    attivita: ["Sviluppo web", "Data Entry"],
    descrizione: `Per questo progetto l'obiettivo principale era l'ottimizzazione dei tempi di consegna. 
      Ho gestito lo sviluppo su WordPress partendo da un layout base, modificando, riassemblando e personalizzando i diversi componenti tramite il builder Divi per ottenere una messa online in tempi brevissimi. 
      Mi sono occupato del data entry e della strutturazione dei contenuti, organizzando la presentazione delle aree di specializzazione, delle modalità di consulenza e dei dettagli di contatto all'interno di un'interfaccia chiara, accessibile e coerente con le esigenze del professionista.`,
    tecnologie: ["Wordpress", "Divi", "PHP", "HTML5", "CSS3", "SCSS"],
    notaCrediti:
      "Sito web realizzato come web developer e web designer in Pagus Media S.r.l",
    immaginiDettaglio: [
      {
        thumbPath:
          "/images/portfolio/marchese-nutrizionista/thumb/01-marchese-nutrizionista.webp",
        bigPath:
          "/images/portfolio/marchese-nutrizionista/big/01-marchese-nutrizionista.webp",
        alt: "Pagina servizi",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 4,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/marchese-nutrizionista/thumb/02-marchese-nutrizionista.webp",
        bigPath:
          "/images/portfolio/marchese-nutrizionista/big/02-marchese-nutrizionista.webp",
        alt: "Sezione contatti",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 1,
      },
      {
        thumbPath:
          "/images/portfolio/marchese-nutrizionista/thumb/03-marchese-nutrizionista.webp",
        bigPath:
          "/images/portfolio/marchese-nutrizionista/big/03-marchese-nutrizionista.webp",
        alt: "Design responsive",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 3,
        mdColSpan: 1,
      },
      {
        thumbPath:
          "/images/portfolio/marchese-nutrizionista/thumb/04-marchese-nutrizionista.webp",
        bigPath:
          "/images/portfolio/marchese-nutrizionista/big/04-marchese-nutrizionista.webp",
        alt: "Design responsive",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
      {
        thumbPath:
          "/images/portfolio/marchese-nutrizionista/thumb/05-marchese-nutrizionista.webp",
        bigPath:
          "/images/portfolio/marchese-nutrizionista/big/05-marchese-nutrizionista.webp",
        alt: "Homepage Marchese Nutrizionista",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
    ],
  },
  {
    id: "gerber-rauth",
    progetto: "Gerber Rauth",
    path: "/images/portfolio/gerber_rauth.webp",
    blocco: 4,
    sequenza: 3,
    mdColSpan: 1,
    mdRowSpan: 2,
    smColSpan: 1,
    variant: "revealLeftToRight",
    slug: "gerber-rauth",
    categoria: ["Siti Web", "Corporate"],
    cliente: "Gerber Rauth",
    anno: "2023",
    tipo: ["Sito aziendale", "Concept Grafico"],
    attivita: ["Sviluppo web", "Data Entry"],
    descrizione: `Il progetto per Gerber Rauth si è focalizzato sulla modernizzazione dell'identità digitale aziendale, introducendo un layout più pulito e funzionale. 
    La struttura è stata ripensata per supportare al meglio le diverse sezioni operative, migliorando la navigazione tra i servizi offerti e le informazioni corporate. L'intervento ha incluso sia l'adeguamento grafico che l'ottimizzazione dei contenuti, per garantire una presentazione professionale e immediata per clienti e partner.`,
    tecnologie: ["Wordpress", "Flatsome", "PHP", "HTML5", "CSS3", "SCSS"],
    notaCrediti:
      "Sito web realizzato come web developer e web designer in Pagus Media S.r.l",
    immaginiDettaglio: [
      {
        thumbPath: "/images/portfolio/gerber-rauth/thumb/01-gerber-rauth.webp",
        bigPath: "/images/portfolio/gerber-rauth/big/01-gerber-rauth.webp",
        alt: "Homepage Gerber Rauth",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 4,
        mdColSpan: 2,
      },
      {
        thumbPath: "/images/portfolio/gerber-rauth/thumb/02-gerber-rauth.webp",
        bigPath: "/images/portfolio/gerber-rauth/big/02-gerber-rauth.webp",
        alt: "Sezione servizi",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
      {
        thumbPath: "/images/portfolio/gerber-rauth/thumb/03-gerber-rauth.webp",
        bigPath: "/images/portfolio/gerber-rauth/big/03-gerber-rauth.webp",
        alt: "Mockup desktop",
        blocco: 1,
        sequenza: 1,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
    ],
  },
  {
    id: "graphicom",
    progetto: "Graphicom",
    path: "/images/portfolio/graphicom.webp",
    blocco: 4,
    sequenza: 4,
    mdColSpan: 1,
    mdRowSpan: 2,
    variant: "revealRightToLeft",
    slug: "graphicom",
    categoria: ["Graphic Design", "Siti Web"],
    cliente: "Graphicom",
    anno: "2023",
    tipo: ["Sito aziendale"],
    attivita: ["Sviluppo web", "Data Entry"],
    descrizione: `Sito aziendale realizzato per Graphicom, con un'alternanza di elementi visivi dinamici e contenuti di impatto. Il sito è studiato per una presentazione grafica forte, adatta alla promozione di servizi creativi.
      Per questo progetto mi sono occupato dello sviluppo web su piattaforma WordPress. Partendo dai layout grafici dedicati, ho realizzato i template personalizzati utilizzando il builder Flatsome, garantendo la massima fedeltà e precisione tecnica rispetto al design originale.
      Ho gestito l'ottimizzazione del codice e l'attività di data entry per strutturare la presentazione dei servizi di stampa e delle lavorazioni, traducendo il progetto visivo in un sito aziendale solido, leggero e facile da navigare.`,
    tecnologie: ["Wordpress", "Flatsome", "PHP", "HTML5", "CSS3", "SCSS"],
    notaCrediti:
      "Sito web realizzato come web developer e web designer in Pagus Media S.r.l",
    immaginiDettaglio: [
      {
        thumbPath: "/images/portfolio/graphicom/thumb/01-graphicom.webp",
        bigPath: "/images/portfolio/graphicom/big/01-graphicom.webp",
        alt: "Homepage Graphicom",
        blocco: 1,
        sequenza: 2,
        mdRowSpan: 4,
        mdColSpan: 2,
      },
      {
        thumbPath: "/images/portfolio/graphicom/thumb/02-graphicom.webp",
        bigPath: "/images/portfolio/graphicom/big/02-graphicom.webp",
        alt: "Sezione portfolio",
        blocco: 1,
        sequenza: 3,
        mdRowSpan: 4,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/graphicom/thumb/03-graphicom.webp",
        bigPath: "/images/portfolio/graphicom/big/03-graphicom.webp",
        alt: "Design mobile",
        blocco: 1,
        sequenza: 4,
        mdRowSpan: 2,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/graphicom/thumb/04-graphicom.webp",
        bigPath: "/images/portfolio/graphicom/big/04-graphicom.webp",
        alt: "Dettaglio visual",
        blocco: 1,
        sequenza: 5,
        mdRowSpan: 2,
        mdColSpan: 1,
      },
      {
        thumbPath: "/images/portfolio/graphicom/thumb/05-graphicom.webp",
        bigPath: "/images/portfolio/graphicom/big/05-graphicom.webp",
        alt: "Tipografia e colori",
        blocco: 2,
        sequenza: 6,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
      {
        thumbPath: "/images/portfolio/graphicom/thumb/06-graphicom.webp",
        bigPath: "/images/portfolio/graphicom/big/06-graphicom.webp",
        alt: "Mockup desktop",
        blocco: 2,
        sequenza: 7,
        mdRowSpan: 4,
        mdColSpan: 2,
      },
      {
        thumbPath: "/images/portfolio/graphicom/thumb/07-graphicom.webp",
        bigPath: "/images/portfolio/graphicom/big/07-graphicom.webp",
        alt: "Mockup desktop",
        blocco: 2,
        sequenza: 7,
        mdRowSpan: 2,
        mdColSpan: 2,
      },
    ],
  },
];
