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
                Placeholder text describing the project's themes, tone, and narrative
                scope. A proper synopsis will be added once the script and visual
                direction are finalized.
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
