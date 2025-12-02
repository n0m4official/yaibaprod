import Section from "@/components/Section";

export default function HomePage() {
  return (
    <div>
      <section className="flex h-[70vh] items-center justify-center bg-[url('/placeholder.jpg')] bg-cover bg-center">
        <div className="backdrop-blur-md bg-black/40 p-8 rounded-xl text-center">
          <h1 className="text-5xl font-bold tracking-tight">Yaiba Productions</h1>
          <p className="mt-4 text-lg opacity-80">
            An independent creative studio crafting narrative-driven films and digital media.
          </p>
        </div>
      </section>

      <Section title="Our Mission">
        <p className="opacity-80">
          This is the temporary skeleton version of our studio website.  
          Final text, images, and team content will be added after review.
        </p>
      </Section>

      <Section title="Current Projects">
        <ul className="list-disc ml-6 opacity-80">
          <li>Placeholder project cards will go here.</li>
          <li>Trailers, stills, and full summaries will be added later.</li>
        </ul>
      </Section>
    </div>
  );
}
