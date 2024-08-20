import { NavBar } from '@/components/NavBar';
import '@/styles/global.css';
import { Home } from '@/components/Home';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Experience } from './components/Experience';

export function App() {
  return (
    <div className="w-full h-screen bg-dark">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}


