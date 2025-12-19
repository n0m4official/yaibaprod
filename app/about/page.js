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
            Yaiba Productions started as a passion project, originally created to support a local student club. At the time, we were just a small group working for a small community, but as Project: Yaiba began to take shape, we realised the vision behind it resonated far deeper than we ever anticipated.
            <br/><br/>
            The support we received was overwhelming. As interest grew from our local neighbourhood to supporters across the globe, the momentum became impossible to ignore. To keep up with the energy and give the project the home it deserved, we decided to step out on our own and establish Yaiba Productions as an independent entity. We’ve come a long way from those first meetings, but we carry that same grassroots excitement into everything we create today.
          </p>
        </Section>

        <Section title="Our Mission">
          <p className="opacity-80">
            Yaiba productions goal is to bring people and business together in a way that showcases the unique importance of creativity and self expression. We have nurtured an environment that tries to motivate all to become creative and express themselves. In times where dreams and passion have become obscured by the hassles of greed, and the specter of AI use, Yaiba looks to challenge that norm and forge passion where fear runs rampant. 
            <br/> <br/>
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
