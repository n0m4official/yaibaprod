import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Yaiba Productions"
        subtitle="Forged in Creativity, Tempered by Passion."
      />

      <Container>
        <Section title="Our Mission">
          <p className="opacity-80 leading-relaxed">
            We are a Calgary-based film collective focused on crafting visually striking,
            narrative-driven works that blend practical locations, immersive world building, and
            disciplined production methodology. As independent creators, we aim to bring
            authentic stories to life through meaningful collaboration and cinematic craft.
          </p>
        </Section>

        <Section title="Active Project">
          <p className="opacity-80">
            We currently have one production in development, the narrative short film Yaiba: Condemnation.
          </p>

          <Link
            href="/projects"
            className="inline-block mt-4 px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
          >
            View All Projects
          </Link>
        </Section>
      </Container>
    </>
  );
}
