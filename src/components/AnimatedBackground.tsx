import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const orbs = [
    {
      size: "w-96 h-96",
      position: "top-0 -left-48",
      color: "bg-primary/20",
      duration: 20,
      delay: 0,
    },
    {
      size: "w-80 h-80",
      position: "top-1/4 -right-40",
      color: "bg-secondary/15",
      duration: 25,
      delay: 2,
    },
    {
      size: "w-64 h-64",
      position: "bottom-1/4 left-1/4",
      color: "bg-accent/10",
      duration: 30,
      delay: 4,
    },
    {
      size: "w-72 h-72",
      position: "bottom-0 right-1/4",
      color: "bg-primary/15",
      duration: 22,
      delay: 1,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-subtle opacity-60"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Floating orbs */}
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.size} ${orb.position} ${orb.color} rounded-full blur-3xl`}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
