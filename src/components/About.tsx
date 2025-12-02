import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ayoubPhoto from "@/assets/ayoub.jpeg";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* About Me Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          {/* Title and Subtitle */}
          <div className="mb-8 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-display font-bold mb-4 text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xl text-muted-foreground font-body"
            >
              Get to know more about my journey and expertise
            </motion.p>
          </div>

          {/* Photo and Text Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Photo Box */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl shadow-elegant overflow-hidden"
              style={{ aspectRatio: '1 / 1' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
              <div className="relative w-full h-full flex items-center justify-center p-8">
                <img 
                  src={ayoubPhoto} 
                  alt="Jad Ayoub" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </motion.div>

            {/* Text Box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl shadow-elegant flex flex-col justify-center p-8"
              style={{ aspectRatio: '1 / 1' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl" />
              
              <div className="relative space-y-6 text-base text-muted-foreground font-body leading-relaxed">
                <p className="text-foreground/90">
                  I'm a Computer and Communications Engineer with a strong interest in software
                  development and artificial intelligence. My core skills include C++, Python,
                  problem-solving, and analytical thinking, and I enjoy building efficient,
                  well-structured solutions to technical challenges.
                </p>
                <p className="text-foreground/80">
                  Throughout my academic journey, I've worked on several coursework projects that
                  strengthened my understanding of programming, algorithms, and systems. I'm
                  particularly drawn to AI and its applications, and I'm continuously expanding my
                  knowledge through self-learning, hands-on practice, and exploring new technologies.
                </p>

                {/* Decorative accent line */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="h-1 w-32 bg-gradient-to-r from-primary to-secondary rounded-full origin-left"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default About;
