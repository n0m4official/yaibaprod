export default function Section({ title, children }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
