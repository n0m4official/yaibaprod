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
            Yaiba productions goal is to bring people and business together in a way that showcases the unique importance of creativity and self expression. We have nurtured an environment that tries to motivate all to become creative and express themselves. In times where dreams and passion have become obscured by the hassles of greed, and the specter of AI use, Yaiba looks to challenge that norm and forge passion where fear runs rampant. Through diversity, through creativity, and through passion, we will hone the edge to become our greatest selves.
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
