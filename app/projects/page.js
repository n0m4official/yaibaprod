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
                The flagship original series from Yaiba Productions — a gritty, stylized neo-noir set in Allegory, a near-future city rebuilt in the shadow of a conflict that reshaped the world. Power in Allegory is a fragile illusion, divided between old-world syndicates, digital ghosts, corporate warlords, and a rising religious movement that promises salvation at a cost no one wants to admit.

                At its core, Yaiba explores what happens when fractured families, forgotten soldiers, and buried truths collide in a city where every alliance has a price and every shadow hides a story. Rather than following a single perspective, Yaiba introduces a cast whose motives, histories, and loyalties intersect in ways that challenge what the city believes it knows about itself.

                Visually and tonally, the project blends modern cyberpunk style, crime-drama tension, and character-driven storytelling, presented with a grounded realism and a strong cinematic identity. Our team aims to build a world that feels lived-in — shaped by culture, conflict, and the unspoken rules that govern life in Allegory.

                Project: Yaiba is designed to unfold piece by piece through film, short-form media, worldbuilding content, and interactive storytelling. Each release reveals just enough to pull viewers deeper into the city — never giving everything away, but always expanding the mystery.

                This is only the beginning.
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
