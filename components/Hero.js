export default function Hero({ title, subtitle }) {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.jpg')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black" />

      <div className="relative z-10 text-center animate-fade-in px-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
}
