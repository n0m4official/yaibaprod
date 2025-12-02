import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Lightbox from "@/components/Lightbox";

export default function ProjectsPage() {
  return (
    <>
      <Hero
        title="Projects"
        subtitle="Current productions and upcoming releases."
      />

      <Container>
        {/* Yaiba: Condemnation */}
        <Section title="Yaiba: Condemnation">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            {/* Image Gallery Lightbox */}
            <Lightbox
              images={[
                { src: "/projects/condemnation1.jpg", alt: "Condemnation Image 1" },
                { src: "/projects/condemnation2.jpg", alt: "Condemnation Image 2" },
                { src: "/projects/condemnation3.jpg", alt: "Condemnation Image 3" }
              ]}
            />

            {/* Project Description */}
            <div>
              <p className="opacity-80 leading-relaxed">
                Yaiba: Condemnation is the opening chapter of the Yaiba series — the episode that pulls viewers into the fractured, neon-lit world of Allegory.

                Set in the aftermath of a crisis the city refuses to acknowledge, Condemnation follows the first ripples of a much larger storm. Power brokers reposition themselves, old debts start to surface, and the uneasy balance holding Allegory together shows its first cracks. As the episode unfolds, the audience is introduced to the forces shaping the city — syndicates, ideologues, and ghosts of the past — each moving quietly toward a confrontation no one is ready for.

                Condemnation sets the tone for the series: atmospheric, grounded, and character-driven. Instead of answers, Episode 1 delivers tension, hints, and unanswered questions — enough to let viewers feel the weight of what's coming without revealing its shape.

                It's the first step into Allegory.

                And it makes one thing clear:
                Nothing here stays buried forever.
              </p>
            </div>

          </div>
        </Section>

        {/* Ashes of Allegory */}
        <Section title="Ashes of Allegory">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Project Image */}
            {/*<div className="w-full overflow-hidden rounded-lg border border-white/10">
              <img
                src="/projects/ashes.png"
                alt="Ashes of Allegory"
                className="w-full h-full object-cover hover:opacity-90 transition"
              />
            </div>*/}

            {/* Project Description */}
            <div>
              <p className="opacity-80 leading-relaxed">
                Coming Soon
              </p>
            </div>

          </div>
        </Section>

      </Container>
    </>
  );
}
