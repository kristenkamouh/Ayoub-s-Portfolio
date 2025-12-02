import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { ExternalLink, X } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import autocadHomeDesign from "@/assets/autocad-home-design.jpeg";
import communicationGuide from "@/assets/communication-guide.png";
import visualLearning from "@/assets/visual-learning.png";
import microscopeDesign from "@/assets/microscope-design.jpeg";
import big5Test from "@/assets/ayoub-big5.jpeg";
interface Project {
  title: string;
  description: string;
  tags: string[];
  viewType?: "modal" | "download" | "link";
  viewLabel?: string;
  mediaType?: "image" | "document";
  mediaUrl?: string;
  downloadUrl?: string;
  externalUrl?: string;
}

const projects: Project[] = [{
  title: "Self-Driving Car",
  description: "A self-driving car that demonstrates the use of Arduino and basic components for autonomous navigation. Overcoming challenges such as obstacle detection and navigation control.",
  tags: ["C++", "TinkerCAD"],
  viewType: "download",
  viewLabel: "Download Report",
  mediaType: "document",
  downloadUrl: "/LabReport.docx"
}, {
  title: "Home Design",
  description: "Designing my own home using AutoCAD.",
  tags: ["AutoCAD"],
  viewType: "modal",
  viewLabel: "View Design",
  mediaType: "image",
  mediaUrl: autocadHomeDesign
}, {
  title: "Microscope Design",
  description: "Model and assemble a mechanical system using SolidWorks. Produce 2D drawings and perform motion simulation and stress analysis of the system.",
  tags: ["SOLIDWORKS"],
  viewType: "modal",
  viewLabel: "View Details",
  mediaType: "image",
  mediaUrl: microscopeDesign
}, {
  title: "Big 5 Test",
  description: "An interactive personality assessment tool based on the Big Five personality traits model.",
  tags: ["Psychology", "Assessment"],
  viewType: "modal",
  viewLabel: "View Results",
  mediaType: "image",
  mediaUrl: big5Test
}, {
  title: "Visual Learning",
  description: "An educational platform designed to enhance learning through visual content and interactive elements.",
  tags: ["Education", "Interactive"],
  viewType: "modal",
  viewLabel: "View Project",
  mediaType: "image",
  mediaUrl: visualLearning
}, {
  title: "Good vs Bad Communication",
  description: "A guide exploring effective communication strategies and common pitfalls in interpersonal interactions.",
  tags: ["Communication", "Guide"],
  viewType: "modal",
  viewLabel: "View Guide",
  mediaType: "image",
  mediaUrl: communicationGuide
}];
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ url: string; type: "image" | "document" } | null>(null);
  
  const handleViewClick = (project: Project) => {
    if (project.viewType === "modal" && project.mediaUrl) {
      setModalContent({ 
        url: project.mediaUrl, 
        type: project.mediaType || "image" 
      });
      setModalOpen(true);
    } else if (project.viewType === "download" && project.downloadUrl) {
      const link = document.createElement('a');
      link.href = project.downloadUrl;
      link.download = `${project.title}.${project.mediaType === "document" ? "docx" : "pdf"}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (project.viewType === "link" && project.externalUrl) {
      window.open(project.externalUrl, "_blank", "noopener,noreferrer");
    }
  };
  return <section id="projects" className="py-32 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Title and Subtitle */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-display font-bold mb-4 text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-xl text-muted-foreground font-body"
          >
            Some of my recent work and personal projects
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title} 
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-elegant flex flex-col">
                <CardHeader className="flex-grow">
                  <CardTitle className="font-display text-2xl group-hover:text-primary transition-colors mb-3">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="font-body text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs font-body bg-primary/5 border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  {project.viewType && (
                    <Button 
                      size="sm" 
                      className="w-full bg-primary text-primary-foreground font-body hover:bg-primary/90" 
                      onClick={() => handleViewClick(project)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {project.viewLabel || "View Project"}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] p-4 bg-card border-border overflow-auto">
          <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors">
            <X className="h-6 w-6 text-foreground" />
            <span className="sr-only">Close</span>
          </DialogClose>
          {modalContent && (
            <>
              {modalContent.type === "image" ? (
                <div className="flex items-center justify-center p-4">
                  <img 
                    src={modalContent.url} 
                    alt="Project preview" 
                    className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg" 
                  />
                </div>
              ) : (
                <div className="p-8">
                  <iframe 
                    src={modalContent.url} 
                    className="w-full h-[80vh] border-0 rounded-lg"
                    title="Document preview"
                  />
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>;
};
export default Projects;
