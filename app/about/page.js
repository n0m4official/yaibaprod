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
            {/* Text will be inserted here once provided */}
          </p>
        </Section>

        <Section title="Our Mission">
          <p className="opacity-80">
            Yaiba productions goal is to bring people and business together in a way that showcases the unique importance of creativity and self expression. We have nurtured an environment that tries to motivate all to become creative and express themselves. In times where dreams and passion have become obscured by the hassles of greed, and the specter of AI use, Yaiba looks to challenge that norm and forge passion where fear runs rampant. <br/> <br/>
            Through diversity, through creativity, and through passion, we will hone the edge to become our greatest selves.
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
