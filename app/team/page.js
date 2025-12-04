"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import TeamPanel from "@/components/TeamPanel";

const members = [
  { 
    name: "Mat / NØM4", 
    role: "Co-Founder / Director of Sound and Music / Lead Composer / Lead Developer", 
    img: "/team/mat.jpg", 
    bio: `Mat Dixon is a co-founder of Yaiba Productions and a software developer specializing in digital systems and audio design. He leads the studio's technical development across web platforms, production tools, and interactive features. Mat contributes experience in cybersecurity, aviation, and music production to the team's creative and technical workflows. He also serves as the lead composer for Yaiba's projects and performs as the DJ and music producer "NØM4." In addition to his technical roles, he portrays the enigmatic character N0M4 on screen.`
  },
  { 
    name: "Raul", 
    role: "Co-Founder / Lead Producer / Writer / Assistant Director / Cinematography Lead", 
    img: "/team/raul.jpg",
    bio: `Born in Kuala Lumpur, Malaysia, Raul Ponniah is a co-founder of Yaiba Productions and the producer overseeing all Yaiba-related media projects. He also portrays the lead role of Goryō. Raul blends the diversity of his background with a strong creative vision, contributing to both the narrative and organizational foundations of the studio. His commitment to empowerment, opportunity, and collaborative filmmaking helps drive Yaiba's mission and long-term growth.`
  },
  {
    name: "Marco", 
    role: "Co-Founder / Head of PR / Logistics / Prop Master", 
    img: "/team/marco.jpg",
    bio: `Marco Vitelli is a co-founder of Yaiba Productions and the lead actor portraying Sigfrido. He is a student in SAIT's Information Technology program and brings a background in technical work, theatre, and on-set operations. Marco provides steady guidance during production, ensuring that projects remain organized, efficient, and creatively focused. His leadership helps unify the team's strengths, while his coordination with external partners supports the studio's growth and long-term vision.`
  },
  { 
    name: "Aryan", 
    role: "Co-Founder / Director / Creative Lead / Narrative Architect / Writer", 
    img: "/team/aryan.jpg",
    bio: `Aryan drives the overarching creative direction of Yaiba Productions. His worldbuilding, narrative design, and visual style define the studio's identity.`
  },
  {
    name: "Alyssa",
    role: "Technical Operator / Costume Designer / Makeup Artist",
    img: "/team/alyssa.jpg",
    bio: `Alyssa is a technical operator and behind-the-scenes contributor at Yaiba Productions. She specializes in costume design and makeup artistry, helping to bring the studio's characters to life through visual aesthetics. Alyssa's attention to detail and creative skills enhance the overall production quality, ensuring that each project meets the studio's high standards.`
  },
  {
    name: "Nesh",
    role: "Cinematographer / Editor / Visual Effects Artist",
    img: "/team/nesh.jpg",
    bio: `Nesh is a cinematographer, editor, and visual effects artist at Yaiba Productions. He brings technical expertise and creative vision to the studio's projects, contributing to the visual storytelling through his skills in camera work, editing, and VFX. Nesh's contributions help elevate the production value and immersive experience of Yaiba's media content.`
  },
  {
    name: "Ioanne",
    role: "Actor",
    img: "/team/ioanne.jpg",
    bio: `Ioanne is an actor at Yaiba Productions, bringing characters to life through his performances. His dedication to his craft and ability to embody diverse roles contribute significantly to the studio's storytelling efforts. Ioanne's work helps create engaging and memorable experiences for the audience.`
  },
  {
    name: "Lou",
    role: "Actor / Business Development Manager",
    img: "/team/lou.jpg",
    bio: `Lou is an actor and business development manager at Yaiba Productions. He plays a key role in both the creative and operational aspects of the studio. As an actor, Lou brings depth and authenticity to his roles, while his business acumen supports the studio's growth and strategic initiatives. His dual contributions help drive Yaiba's success in the competitive media landscape.`
  },
  {
    name: "Michael",
    role: "Actor",
    img: "/team/michael.jpg",
    bio: `Michael is an actor at Yaiba Productions, contributing his talent and passion to the studio's projects. His performances help bring the studio's narratives to life, engaging audiences and enhancing the overall storytelling experience. Michael's dedication to his craft is evident in his work, making him a valuable member of the Yaiba team.`
  }
];

export default function TeamPage() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Hero 
        title="Our Team" 
        subtitle="Meet the people behind Yaiba Productions."
        className="bg-black"
      />

      <Container className="bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">

          {members.map((m) => (
            <div 
              key={m.name}
              className="text-center cursor-pointer group bg-black"
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
