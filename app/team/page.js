import Hero from "@/components/Hero";
import Container from "@/components/Container";

const members = [
  { name: "Mat", role: "Co-Founder / Director of Sound and Music / Lead Composer", img: "/team/mat.jpg" },
  { name: "Marco", role: "Co-Founder / PR / Logistics / Prop master", img: "/team/marco.jpg" },
  { name: "Raul", role: "Co-Founder / Producer / Writer / Assistant Director", img: "/team/raul.jpg" },
  { name: "Aryan", role: "Co-Founder / Director / Creative Lead / Narrative Architect", img: "/team/aryan.jpg" },
];

export default function TeamPage() {
  return (
    <>
      <Hero title="Our Team" subtitle="Meet the people behind Yaiba Productions." />

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {members.map((m) => (
            <div key={m.name} className="text-center">
              <div className="w-full aspect-square bg-gray-800 rounded-lg overflow-hidden mb-4">
                <img src={m.img} alt={m.name} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold">{m.name}</h3>
              <p className="opacity-70">{m.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
