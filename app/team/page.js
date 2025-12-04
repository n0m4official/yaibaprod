"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import TeamPanel from "@/components/TeamPanel";

const members = [
  { 
    name: "Mat", 
    role: "Co-Founder / Director of Sound and Music / Lead Composer", 
    img: "/team/mat.jpg", 
    bio: `Mat is a co-founder of Yaiba Productions and leads the sound, music direction,and overall audio identity of our projects. His background in composition and sound design shapes the studio's sonic signature across all productions.`
  },
  { 
    name: "Raul", 
    role: "Co-Founder / Producer / Writer / Assistant Director", 
    img: "/team/raul.jpg",
    bio: `Raul contributes to writing, producing, and assisting with direction. His creative perspective shapes narrative structure and thematic development.`
  },
  {
    name: "Marco", 
    role: "Co-Founder / PR / Logistics / Prop master", 
    img: "/team/marco.jpg",
    bio: `Marco oversees logistics, PR coordination, and prop management. His eye for detail and organizational skills keep our productions running smoothly.`
  },
  { 
    name: "Aryan", 
    role: "Co-Founder / Director / Creative Lead / Narrative Architect", 
    img: "/team/aryan.jpg",
    bio: `Aryan drives the overarching creative direction of Yaiba Productions. His worldbuilding, narrative design, and visual style define the studio's identity.`
  },
];

export default function TeamPage() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Hero 
        title="Our Team" 
        subtitle="Meet the people behind Yaiba Productions."
      />

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">

          {members.map((m) => (
            <div 
              key={m.name}
              className="text-center cursor-pointer group"
              onClick={() => setSelected(m)}
            >
              {/* Image container with overlay */}
              <div className="relative w-full aspect-square bg-gray-800 rounded-lg overflow-hidden mb-4">

                {/* Image */}
                <img 
                  src={m.img} 
                  alt={m.name} 
                  className="object-cover w-full h-full transition duration-300 group-hover:opacity-60"
                />

                {/* Hover text overlay */}
                <div className="
                  absolute inset-0 flex items-center justify-center
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                ">
                  <span className="text-white font-semibold text-lg bg-black/60 px-3 py-1 rounded">
                    Click for more info
                  </span>
                </div>
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-bold">{m.name}</h3>
              <p className="opacity-70">{m.role}</p>
            </div>
          ))}

        </div>
      </Container>

      {/* Slide-In Panel */}
      <TeamPanel 
        member={selected} 
        onClose={() => setSelected(null)} 
      />
    </>
  );
}
