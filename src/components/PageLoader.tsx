import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="relative">
            {/* Animated logo/text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                Portfolio
              </motion.h1>
            </motion.div>

            {/* Animated circles */}
            <div className="absolute -inset-20 flex items-center justify-center">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="absolute w-32 h-32 rounded-full border-2 border-primary/20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.4,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Loading bar */}
            <motion.div 
              className="mt-8 w-48 h-1 bg-muted rounded-full overflow-hidden mx-auto"
            >
              <motion.div
                className="h-full bg-gradient-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;

