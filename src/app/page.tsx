const etapas = [
  {
    titulo: "1. Fase luminosa",
    descripcion:
      "Ocurre en los tilacoides de los cloroplastos. La luz solar excita a la clorofila y provoca la separación de moléculas de agua, liberando oxígeno y generando energía en forma de ATP y NADPH.",
  },
  {
    titulo: "2. Fase oscura o ciclo de Calvin",
    descripcion:
      "Se desarrolla en el estroma del cloroplasto. Utiliza el ATP y el NADPH para transformar dióxido de carbono en glucosa, que la planta almacenará como fuente de energía.",
  },
];

const elementosClave = [
  {
    nombre: "Luz solar",
    detalle:
      "Aporta la energía inicial necesaria para activar la clorofila y desencadenar el proceso.",
  },
  {
    nombre: "Agua (H₂O)",
    detalle:
      "Se divide en oxígeno, que se libera a la atmósfera, e hidrógeno, que se usa para formar glucosa.",
  },
  {
    nombre: "Dióxido de carbono (CO₂)",
    detalle:
      "Gas que las plantas toman del aire y que, junto con el hidrógeno, se convierte en glucosa.",
  },
  {
    nombre: "Clorofila",
    detalle:
      "Pigmento verde que capta la luz solar y le da su color característico a las hojas.",
  },
];

const datosCuriosos = [
  "Aproximadamente el 50 % del oxígeno de la atmósfera proviene de organismos marinos fotosintéticos como el fitoplancton.",
  "La fotosíntesis apareció hace más de 2 400 millones de años y transformó la composición de la atmósfera terrestre.",
  "Almacenar energía en glucosa permite a las plantas crecer, reproducirse y servir de base energética para casi todas las cadenas alimentarias.",
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-emerald-100 via-white to-white text-zinc-900">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-6 py-24 sm:px-12 lg:px-20">
        <header className="flex flex-col gap-6 text-center sm:text-left">
          <span className="inline-flex items-center gap-2 self-center rounded-full bg-emerald-200 px-4 py-1 text-sm font-medium text-emerald-900 sm:self-start">
            Biología · Procesos esenciales
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            ¿Qué es la fotosíntesis?
          </h1>
          <p className="text-lg leading-relaxed text-zinc-700 sm:text-xl">
            La fotosíntesis es el proceso mediante el cual las plantas, algas y
            algunas bacterias transforman la energía de la luz en energía química
            almacenada en forma de glucosa. Gracias a ella, se produce oxígeno y se
            sostiene la mayor parte de la vida en la Tierra.
          </p>
          <div className="rounded-3xl border border-emerald-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <p className="text-base text-zinc-700">
              <strong>Ecuación global:</strong> 6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ +
              6 O₂
            </p>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <article className="flex flex-col gap-6 rounded-3xl border border-emerald-200 bg-white/80 p-8 shadow-sm backdrop-blur">
            <h2 className="text-2xl font-semibold">Etapas principales</h2>
            <p className="text-base text-zinc-700">
              Aunque el término “fase oscura” puede llevar a confusión, ambas
              etapas ocurren durante el día. La diferencia está en que solo la fase
              luminosa depende directamente de la luz.
            </p>
            <div className="flex flex-col gap-6">
              {etapas.map((etapa) => (
                <div key={etapa.titulo} className="rounded-2xl bg-emerald-50 p-6">
                  <h3 className="text-xl font-semibold text-emerald-900">
                    {etapa.titulo}
                  </h3>
                  <p className="mt-2 text-base text-emerald-950">
                    {etapa.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <aside className="flex flex-col gap-6 rounded-3xl border border-emerald-200 bg-emerald-900 p-8 text-emerald-50 shadow-sm">
            <h2 className="text-2xl font-semibold">Elementos clave</h2>
            <ul className="flex flex-col gap-4 text-base leading-relaxed">
              {elementosClave.map((elemento) => (
                <li key={elemento.nombre}>
                  <span className="font-semibold">{elemento.nombre}:</span>{" "}
                  {elemento.detalle}
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">¿Por qué es vital?</h2>
            <p className="mt-4 text-base text-zinc-700">
              La fotosíntesis mantiene el equilibrio de gases en la atmósfera,
              aporta el oxígeno que respiramos y crea la materia orgánica que sirve
              de alimento directo o indirecto a todos los seres vivos. Sin este
              proceso, la mayoría de los ecosistemas colapsarían rápidamente.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Dato rápido</h2>
            <p className="mt-4 text-base text-zinc-700">
              El color verde de las hojas se debe a la clorofila, que refleja la
              luz verde mientras absorbe la luz roja y azul para maximizar la
              captura de energía.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-200 bg-white/90 p-8 shadow-sm backdrop-blur">
          <h2 className="text-2xl font-semibold">Tres ideas para recordar</h2>
          <ul className="mt-4 space-y-4 text-base text-zinc-700">
            {datosCuriosos.map((dato) => (
              <li
                key={dato}
                className="rounded-2xl border border-emerald-100 bg-emerald-50 px-5 py-4"
              >
                {dato}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
