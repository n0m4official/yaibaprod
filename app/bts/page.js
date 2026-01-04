"use client";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function BehindTheScenesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Behind The Scenes"
        subtitle="Discover the stories, processes, and people that bring our projects to life."
      />

      {/* Main Content */}
      <Container>
          {/* Gallery Section */}
          <Section
            title="Gallery"
            className="bg-gray-700 hover:bg-gray-600 transition rounded-lg p-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Gallery Images */}
              <img
                src="/bts/bts (1).jpg"
              alt="Behind the Scenes 1" />
              <img
                src="/bts/bts (2).jpg"
              alt="Behind the Scenes 2" />
              <img
                src="/bts/bts (3).jpg"
              alt="Behind the Scenes 3" />
              <img
                src="/bts/bts (4).jpg"
              alt="Behind the Scenes 4" />
              <img
                src="/bts/bts (5).jpg"
              alt="Behind the Scenes 5" />
              <img 
                src="/bts/bts (6).jpg"
              alt="Behind the Scenes 6" />
              <img
                src="/bts/bts (7).jpg"
              alt="Behind the Scenes 7" />
              <img
                src="/bts/bts (8).jpg"
              alt="Behind the Scenes 8" />
              <img
                src="/bts/bts (9).jpg"
              alt="Behind the Scenes 9" />
              <img
                src="/bts/bts (10).jpg"
              alt="Behind the Scenes 10" />
              <img
                src="/bts/bts (11).jpg"
              alt="Behind the Scenes 11" />
              <img
                src="/bts/bts (12).jpg"
              alt="Behind the Scenes 12" />
              <img
                src="/bts/bts (13).jpg"
              alt="Behind the Scenes 13" />
              <img
                src="/bts/bts (14).jpg"
              alt="Behind the Scenes 14" />
              <img
                src="/bts/bts (15).jpg"
              alt="Behind the Scenes 15" />
              <img
                src="/bts/bts (16).jpg"
              alt="Behind the Scenes 16" />
              <img
                src="/bts/bts (17).jpg"
              alt="Behind the Scenes 17" />
              <img
                src="/bts/bts (18).jpg"
              alt="Behind the Scenes 18" />
              <img
                src="/bts/bts (19).jpg"
              alt="Behind the Scenes 19" />
              <img
                src="/bts/bts (20).jpg"
              alt="Behind the Scenes 20" />
              <img
                src="/bts/bts (21).jpg"
              alt="Behind the Scenes 21" />
            </div>
          </Section>
      </Container>
    </>
  );
}
