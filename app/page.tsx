// Next.js App Router version - Modular, recruiter-optimized personal portfolio
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/sections/Hero";
import { Experience } from "../components/sections/Experience";
import { Projects } from "../components/sections/Projects";
import { Research } from "../components/sections/Research";
import { Skills } from "../components/sections/Skills";
import { Education } from "../components/sections/Education";
import { CreativeStudio } from "../components/sections/CreativeStudio";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";
import { siteConfig } from "../lib/portfolio-data";

export default function HomePage() {
  const { sections } = siteConfig;

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {sections.hero.enabled && <Hero />}
        {sections.experience.enabled && <Experience />}
        {sections.projects.enabled && <Projects />}
        {sections.publications.enabled && <Research />}
        {sections.skills.enabled && <Skills />}
        {sections.credentials.enabled && <Education />}
        {sections.creative.enabled && <CreativeStudio />}
        {sections.contact.enabled && <Contact />}
      </main>
      <Footer />
    </>
  );
}
