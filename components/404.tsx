<div className="min-h-screen flex flex-col items-center justify-start bg-bianco p-0">
  <Image
    src="/images/404.webp"
    alt="Progetto non trovato"
    width={1264}
    height={843}
    className="mb-10 max-w-4xl"
  />
  <h2 className="text-2xl font-semibold text-grigio-scuro mb-4">
    Progetto non trovato
  </h2>
  <button
    onClick={() => router.push("/#portfolio")}
    className="text-navy font-mono text-sm uppercase tracking-wider underline"
  >
    Torna al portfolio
  </button>
</div>;
