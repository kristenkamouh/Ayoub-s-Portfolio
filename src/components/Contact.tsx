import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  const handleEmailClick = () => {
    window.location.href = "mailto:jadsayoub5@hotmail.com";
  };

  const handleCVDownload = () => {
    const link = document.createElement('a');
    link.href = '/Jad_Ayoub_CV.docx';
    link.download = 'Jad_Ayoub_CV.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-body font-medium text-primary">Available for opportunities</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-xl mx-auto">
            Got an idea or project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            {/* Email highlight */}
            <motion.a
              href="mailto:jadsayoub5@hotmail.com"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-between p-6 rounded-2xl bg-muted/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300 mb-8 group/email"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-1">Email me at</p>
                  <p className="text-lg md:text-xl font-body font-semibold text-foreground">jadsayoub5@hotmail.com</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover/email:text-primary group-hover/email:translate-x-1 group-hover/email:-translate-y-1 transition-all duration-300" />
            </motion.a>

            {/* Info row */}
            <div className="flex flex-wrap items-center gap-6 mb-10">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-body">Lebanon</span>
              </div>
              <div className="w-px h-4 bg-border hidden sm:block" />
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-body">Available for new projects</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleEmailClick}
                size="lg"
                className="flex-1 bg-primary text-primary-foreground hover:shadow-glow hover:scale-[1.02] transition-all duration-300 font-body text-base h-14 rounded-xl"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send an Email
              </Button>
              <Button
                onClick={handleCVDownload}
                variant="outline"
                size="lg"
                className="flex-1 border-2 border-border hover:bg-muted hover:border-primary/30 hover:scale-[1.02] transition-all duration-300 font-body text-base h-14 rounded-xl"
              >
                Download CV
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Social & Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col items-center"
        >
          <p className="text-sm font-body text-muted-foreground mb-4">Or connect with me on</p>
          <a
            href="https://www.linkedin.com/in/jadayoub05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground border border-border hover:border-primary transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-body font-medium">LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20 text-muted-foreground text-sm font-body"
        >
          <p>© {new Date().getFullYear()} Jad. Crafted with passion.</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
