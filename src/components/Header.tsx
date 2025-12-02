import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
    setIsMobileMenuOpen(false);
  };
  const navItems = [{
    label: "Home",
    id: "hero"
  }, {
    label: "About",
    id: "about"
  }, {
    label: "Skills",
    id: "skills"
  }, {
    label: "Experience",
    id: "experience"
  }, {
    label: "Projects",
    id: "projects"
  }, {
    label: "Contact",
    id: "contact"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-elegant" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="mx-0 flex-col flex items-end justify-between">
          

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors relative group">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>)}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4 animate-fade-in">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-left text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </button>)}
          </nav>}
      </div>
    </header>;
};
export default Header;