import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Job {
  position: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
}

const jobs: Job[] = [
  {
    position: "Salesperson",
    company: "Socodile Holding S.A.R.L",
    period: "2023 - Present",
    description: "Processing orders and payments, maintaining good relationships with clients, and contacting and meeting potential clients",
    current: true,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Title and Subtitle */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-display font-bold mb-4 text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center"
          >
            Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-xl text-muted-foreground font-body text-center"
          >
            My professional journey and work experience
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-semibold text-foreground">
                          {job.position}
                        </h3>
                        <p className="text-lg font-body text-muted-foreground">
                          {job.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-body font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {job.period}
                    </span>
                    {job.current && (
                      <span className="text-xs font-body font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground font-body leading-relaxed">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
