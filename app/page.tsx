// Next.js App Router version - Home page combining all sections
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/sections/Hero";
import { Experience } from "../components/sections/Experience";
import { Research } from "../components/sections/Research";
import { Projects } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { CompetitiveProgramming } from "../components/sections/CompetitiveProgramming";
import { Education } from "../components/sections/Education";
import { Certifications } from "../components/sections/Certifications";
import { Design } from "../components/sections/Design";
import { Videos } from "../components/sections/Videos";
import { Blogs } from "../components/sections/Blogs";
import { Hobbies } from "../components/sections/Hobbies";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Research />
        <Projects />
        <Skills />
        <Certifications />
        <CompetitiveProgramming />
        <Education />
        <Videos />
        <Design />

        <Blogs />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
