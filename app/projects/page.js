"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Lightbox from "@/components/Lightbox";
import Link from "next/link";

const SECRET_SEQUENCE = ["Y", "A", "I", "B", "A"];

export default function ProjectsPage() {
  const [progress, setProgress] = useState(0);

  function handleLetterClick(letter) {
    const upper = letter.toUpperCase();
    const expected = SECRET_SEQUENCE[progress];

    let nextIndex;

    if (upper === expected) {
      // Correct next letter in sequence
      nextIndex = progress + 1;
    } else if (upper === SECRET_SEQUENCE[0]) {
      // Wrong letter, but it matches the first one → restart sequence from 1
      nextIndex = 1;
    } else {
      // Completely wrong → reset
      nextIndex = 0;
    }

    if (nextIndex === SECRET_SEQUENCE.length) {
      // Sequence completed → reset and redirect
      setProgress(0);
      window.location.href = "https://yaiba-arg.vercel.app";
    } else {
      setProgress(nextIndex);
    }
  }

  const clickableYaibaTitle = (
    <>
      {/* "Yaiba" with individually clickable letters */}
      <span
        onClick={() => handleLetterClick("Y")}
        className="cursor-pointer select-none"
      >
        Y
      </span>
      <span
        onClick={() => handleLetterClick("A")}
        className="cursor-pointer select-none"
      >
        a
      </span>
      <span
        onClick={() => handleLetterClick("I")}
        className="cursor-pointer select-none"
      >
        i
      </span>
      <span
        onClick={() => handleLetterClick("B")}
        className="cursor-pointer select-none"
      >
        b
      </span>
      <span
        onClick={() => handleLetterClick("A")}
        className="cursor-pointer select-none"
      >
        a
      </span>
      {": Condemnation"}
    </>
  );

  return (
    <>
      <Hero
        title="Projects"
        subtitle="Current productions and upcoming releases."
      />

      <Container>
        {/* Yaiba: Condemnation */}
        <Section title={clickableYaibaTitle}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Image Gallery Lightbox */}
            <Lightbox
              images={[
                {
                  src: "/projects/condemnation1.jpg",
                  alt: "Condemnation Image 1",
                },
                {
                  src: "/projects/condemnation2.jpg",
                  alt: "Condemnation Image 2",
                },
                {
                  src: "/projects/condemnation3.jpg",
                  alt: "Condemnation Image 3",
                },
              ]}
            />

            {/* Project Description */}
            <div>
              <p className="opacity-80 leading-relaxed">
                Yaiba: Condemnation is the opening chapter of the Yaiba series —
                the episode that pulls viewers into the fractured, neon-lit
                world of Allegory.
                <br />
                <br />
                Set in the aftermath of a crisis the city refuses to
                acknowledge, Condemnation follows the first ripples of a much
                larger storm. Power brokers reposition themselves, old debts
                start to surface, and the uneasy balance holding Allegory
                together shows its first cracks. As the episode unfolds, the
                audience is introduced to the forces shaping the city —
                syndicates, ideologues, and ghosts of the past — each moving
                quietly toward a confrontation no one is ready for.
                <br />
                <br />
                Condemnation sets the tone for the series: atmospheric,
                grounded, and character-driven. Instead of answers, Episode 1
                delivers tension, hints, and unanswered questions — enough to
                let viewers feel the weight of what&apos;s coming without
                revealing its shape.
                <br />
                <br />
                It&apos;s the first step into Allegory.
                <br />
                <br />
                And it makes one thing clear:
                <br />
                Nothing here stays buried forever.
              </p>
              <Link href="/bts" className="inline-block mt-4 px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition">
                View Behind The Scenes
              </Link>
            </div>
          </div>
        </Section>

        {/* Ashes of Allegory */}
        <Section title="Ashes of Allegory">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Project Image (commented out for now) */}
            {/* 
            <div className="w-full overflow-hidden rounded-lg border border-white/10">
              <img
                src="/projects/ashes.png"
                alt="Ashes of Allegory"
                className="w-full h-full object-cover hover:opacity-90 transition"
              />
            </div>
            */}

            {/* Project Description */}
            <div>
              <p className="opacity-80 leading-relaxed">Coming Soon</p>
            </div>
          </div>
        </Section>
      </Container>
    </>
  );
}
