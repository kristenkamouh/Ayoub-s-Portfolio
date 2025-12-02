import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, MessageSquare, Brain, Users, Wrench, Pencil } from "lucide-react";

interface Skill {
  name: string;
  icon: any;
  level: number; // 0-100
  category: "technical" | "soft";
}

const skills: Skill[] = [
  {
    name: "C++",
    icon: Code,
    level: 85,
    category: "technical"
  },
  {
    name: "Python",
    icon: Code,
    level: 80,
    category: "technical"
  },
  {
    name: "AutoCAD",
    icon: Pencil,
    level: 75,
    category: "technical"
  },
  {
    name: "SOLIDWORKS",
    icon: Wrench,
    level: 70,
    category: "technical"
  },
  {
    name: "Communication",
    icon: MessageSquare,
    level: 90,
    category: "soft"
  },
  {
    name: "Problem Solving",
    icon: Brain,
    level: 88,
    category: "soft"
  },
  {
    name: "Teamwork",
    icon: Users,
    level: 92,
    category: "soft"
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Title and Subtitle */}
        <div className="mb-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-display font-bold mb-4 text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Core Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-xl text-muted-foreground font-body"
          >
            Technical expertise and soft skills I bring to the table
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border border-border rounded-xl p-6"
          >
            <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-2">
              <Code className="w-6 h-6 text-primary" />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.filter(skill => skill.category === "technical").map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-body font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm font-body text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-secondary/5 via-background to-primary/5 border border-border rounded-xl p-6"
          >
            <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-2">
              <Brain className="w-6 h-6 text-secondary" />
              Soft Skills
            </h3>
            <div className="space-y-6">
              {skills.filter(skill => skill.category === "soft").map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-secondary" />
                        </div>
                        <span className="font-body font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm font-body text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
