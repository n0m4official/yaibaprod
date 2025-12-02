import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <>
      <Hero title="About Us" subtitle="Who we are and what we create." />

      <Container>
        <Section title="Our Story">
          <p className="opacity-80 leading-relaxed">
            {/* Aryan's text will be inserted here once provided */}
            This section will include the full studio origin story as written by Aryan.
          </p>
        </Section>

        <Section title="Our Mission">
          <p className="opacity-80">
            Reiterated mission statement goes here for a cohesive narrative across the site.
          </p>
        </Section>

        <Section title="Creative Space">
          <p className="opacity-80">
            Yaiba Productions serves as a home for filmmakers, writers, composers, and digital
            artists. We focus on experimentation, practical staging, and cyber-inspired storytelling
            environments.
          </p>
        </Section>
      </Container>
    </>
  );
}
