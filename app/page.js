"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Container from "@/components/Container";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Yaiba Productions"
        subtitle="A Calgary-based film collective dedicated to cinematic storytelling, practical locations, and immersive worldbuilding."
      />

      <Container>
        <Section title="Our Mission">
          <p className="opacity-80 leading-relaxed">
            Yaiba Productions is an independent creative studio focused on crafting
            visually striking films, narrative-driven experiences, and digital content.
            This website is a structural prototype — full studio information will be
            added once the team finalizes our branding direction.
          </p>
        </Section>

        <Section title="Active Projects">
          <div className="space-y-4 opacity-80">
            <p>
              This section will display project cards, trailers, posters, and BTS
              content for our ongoing productions.
            </p>
            <ul className="list-disc ml-6">
              <li><span className="opacity-70">Project placeholders here</span></li>
              <li><span className="opacity-70">Future project grid layout</span></li>
            </ul>
          </div>
        </Section>
      </Container>
    </>
  );
}
