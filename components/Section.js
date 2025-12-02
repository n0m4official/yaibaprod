export default function Section({ title, children }) {
  return (
    <section className="py-16 border-b border-white/5">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}