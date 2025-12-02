import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";
const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      <AnimatedBackground />
      
      <motion.div initial={{
      opacity: 0,
      y: 30
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8
    }} className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="inline-block mb-6">
          <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body">SOFTWARE ENGINEER</span>
        </motion.div>

        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="text-6xl md:text-8xl font-display font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight py-[10px]">Jad Ayoub</motion.h1>

        <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-body font-light">
          Building beautiful digital experiences with code and creativity
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" onClick={() => scrollToSection('projects')} className="bg-primary text-primary-foreground hover:shadow-glow transition-all duration-300 font-body">
            View My Work
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="border-border hover:bg-muted font-body">
            Get In Touch
          </Button>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 1.2
      }} className="mt-24">
          <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="Scroll to about section">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </button>
        </motion.div>
      </motion.div>
    </section>;
};
export default Hero;