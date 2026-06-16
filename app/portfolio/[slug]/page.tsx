import { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioItems } from "@/data/portfolioData";
import DettaglioProgettoClient from "@/components/portfolio/DettaglioProgettoClient";

interface Props {
  params: Promise<{ slug: string }>;
}

// ============================================================================
// 1. GESTIONE SEO & METADATI DINAMICI (Server-Side)
// ============================================================================
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;

  // Cerchiamo il progetto nel file dati usando lo slug dell'URL
  const progetto = portfolioItems.find(
    (item) => item.slug === resolvedParams.slug,
  );

  // Se l'utente digita uno slug inventato, diamo un titolo di fallback
  if (!progetto) {
    return {
      title: "Progetto non trovato | Portfolio",
    };
  }

  // Generiamo i metadati reali pescando le info dall'oggetto
  return {
    title: `${progetto.progetto} | Il Mio Portfolio`,
    description: progetto.descrizione
      ? progetto.descrizione.substring(0, 160)
      : "Scopri i dettagli del mio progetto portfolio.",
  };
}

// ============================================================================
// 2. RENDER DELLA PAGINA (Server-Side)
// ============================================================================
export default async function Page({ params }: Props) {
  const resolvedParams = await params;

  // Cerchiamo il progetto anche per il componente del layout
  const progetto = portfolioItems.find(
    (item) => item.slug === resolvedParams.slug,
  );

  // Se lo slug non esiste nel file dati, Next.js mostra automaticamente la pagina 404
  if (!progetto) {
    notFound();
  }

  // Passiamo l'intero oggetto "progetto" come prop al file client
  return (
    <>
      <main className="max-w-max-width mx-auto px-0 overflow-x-hidden w-full">
        <div className="w-full px-0 mx-0 mt-10">
          <DettaglioProgettoClient progetto={progetto} />;
        </div>
      </main>
    </>
  );
}
