// data/experiences.ts
import { ReactNode } from "react";

export interface Experience {
  year: string;
  title: string;
  company: string;
  content: ReactNode;
}

export const experiences: Experience[] = [
  {
    year: "2012 — 2025",
    title: "Sviluppatore web e grafico",
    company:
      "PAGUS MEDIA S.R.L. UNIPERSONALE – Vicenza (VI) agenzia di consulenza, web marketing e analisi / Lavoro Ibrido e Remoto",
    content: (
      <>
        <blockquote className="border-l-4 border-navy bg-grigio-chiaro p-5 my-8 italic text-sm font-sans text-grigio-scuro leading-relaxed">
          <strong>
            Consulenza Principale presso Iris Ceramica Group (MO):
          </strong>{" "}
          Sviluppo e manutenzione dell'ecosistema di siti web aziendali,
          ottimizzazione SEO a livello di codice e contenuti, coordinamento per
          il rilascio di nuovi progetti digitali.
        </blockquote>
        <blockquote className="border-l-4 border-navy bg-grigio-chiaro p-5 my-8 italic text-sm font-sans text-grigio-scuro leading-relaxed">
          <strong>Consulenza per Ferrari Maranello (08/2012 - 07/2013):</strong>{" "}
          Ideazione e impaginazione grafica di newsletter, banner per portali
          ufficiali e asset visivi per campagne social e advertising digitali.
        </blockquote>
        <ul className="list-disc list-inside font-sans text-sm text-grigio-scuro leading-relaxed mb-10">
          <li>
            Realizzazioni grafiche layout e asset digitali per siti web, portali
            e campagne pubblicitarie
          </li>
          <li>
            Programmazione di siti web custom in PHP/MySQL e sviluppo di temi e
            plugin per WordPress
          </li>
          <li>Manutenzione e aggiornamento siti Wordpress</li>
          <li>Gestione clienti</li>
          <li>Grafica per ADV social e digitali</li>
        </ul>
      </>
    ),
  },
  {
    year: "2008 — 2011",
    title: "Sviluppatore web e grafico",
    company:
      "BKEY CONSULTING S.R.L. - Vicenza (VI) agenzia di consulenza e web marketing / Lavoro Ibrido",
    content: (
      <>
        <blockquote className="border-l-4 border-navy bg-grigio-chiaro p-5 my-8 italic text-sm font-sans text-grigio-scuro leading-relaxed">
          <strong>
            Consulenza Principale presso Iris Ceramica Group (MO):
          </strong>{" "}
          Sviluppo siti web; collaborazione nella realizzazione e
          l'aggiornamento dei progetti web; ottimizzazione SEO dei siti web
        </blockquote>
        <ul className="list-disc list-inside font-sans text-sm text-grigio-scuro leading-relaxed mb-10">
          <li>
            Realizzazioni grafiche layout e asset digitali per siti web, portali
            e campagne pubblicitarie
          </li>
          <li>
            Programmazione di siti web custom in PHP/MySQL e sviluppo di temi e
            plugin per WordPress
          </li>
          <li>Manutenzione e aggiornamento siti Wordpress</li>
          <li>Gestione clienti</li>
          <li>Grafica per ADV social e digitali</li>
        </ul>
      </>
    ),
  },
  {
    year: "2007 — 2018",
    title: "Sviluppatore web e grafico",
    company:
      "DSM Lab - Casalecchio (BO) agenzia di comunicazione multimediale / Lavoro in Sede",
    content: (
      <ul className="list-disc list-inside font-sans text-sm text-grigio-scuro leading-relaxed mb-10">
        <li>Realizzazione grafiche per web desktop e mobile</li>
        <li>Sviluppo siti web desktop tablet e mobile</li>
      </ul>
    ),
  },
  {
    year: "2004 — 2006",
    title: "Sviluppatore web e grafico",
    company:
      "ComunicÓ Advertising – Bologna (BO) studio grafico / Lavoro in Sede",
    content: (
      <ul className="list-disc list-inside font-sans text-sm text-grigio-scuro leading-relaxed mb-10">
        <li>Realizzazioni grafiche web e per stampa in quadricromia</li>
        <li>Impaginazione di cataloghi e e flyer</li>
        <li>Creazione siti Web in HTML/CSS e Flash (ActionScript 2.0)</li>
      </ul>
    ),
  },
];
