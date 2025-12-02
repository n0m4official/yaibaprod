import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function ProjectsPage() {
  return (
    <>
      <Hero title="Projects" subtitle="Current productions and upcoming releases." />

      <Container>
        <Section title="Yaiba: Condemnation">
          <p className="opacity-80 leading-relaxed">
            Placeholder text describing the project's themes, scope, and development state.
            Final details will be added later.
          </p>
        </Section>

        <Section title="Ashes of Allegory">
          <p className="opacity-80 leading-relaxed">
            Teaser placeholder. Description will be expanded once the script and logistics are finalized.
          </p>
        </Section>
      </Container>
    </>
  );
}
