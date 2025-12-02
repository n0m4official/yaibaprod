export default function Hero({ title, subtitle }) {
  return (
    <section className="relative h-[70vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/placeholder.jpg')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black" />

      <div className="relative z-10 text-center animate-fade-in">
        <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg opacity-80 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
