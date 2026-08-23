import { createFileRoute } from "@tanstack/react-router";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Md. Sheam Nasemur Rahman — Web Developer",
      },
      {
        name: "description",
        content:
          "Web developer and CSE undergraduate building reliable, user-friendly applications — full-stack products, research platforms and interactive 3D experiments.",
      },
      {
        property: "og:title",
        content: "Md. Sheam Nasemur Rahman — Web Developer",
      },
      {
        property: "og:description",
        content:
          "Web developer and CSE undergraduate building reliable, user-friendly applications — full-stack products, research platforms and interactive 3D experiments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
