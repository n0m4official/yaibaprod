import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function ContactPage() {
  return (
    <>
      <Hero title="Contact Us" subtitle="For inquiries, collaborations, and media requests." />

      <Container>
        <Section title="Email">
          <p className="opacity-80">
            {/* Replace with real studio email */}
            yaiba.productions.studios@gmail.com
          </p>
        </Section>

        <Section title="Send Us a Message">
          <form className="space-y-4 max-w-xl">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-gray-900 border border-white/10"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-gray-900 border border-white/10"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 rounded h-32 bg-gray-900 border border-white/10"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Submit
            </button>
          </form>
        </Section>
      </Container>
    </>
  );
}
