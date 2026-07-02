import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import video from "../assets/hero-video.mp4";

// Loading Animation Component
const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      {/* Loading Text */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.h2
          className="text-white text-lg font-light tracking-widest mb-2"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          LOADING YOUR EXPERIENCE
        </motion.h2>
        <motion.p
          className="text-gray-300 text-sm font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          {progress}%
        </motion.p>
      </motion.div>

      {/* Progress Bar */}
      <div className="relative w-full max-w-md mx-auto">
        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#771d1c] to-[#c6c7c9] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          />
        </div>

        {/* Glowing dots animation */}
        <div className="flex justify-center mt-4 space-x-2">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: dot * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: -100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setLogoAnimationComplete(true);
    }, 3000);

    const completeTimer = setTimeout(() => {
      setAnimationComplete(true);
    }, 6000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  const splashVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const logoVariants = {
    initial: {
      scale: 0.8,
      y: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    
   moveTopLeft: {
  x: "-45vw",
  y: "-60vh",
  scale: 0.35,
  opacity: 1,
  transition: {
    duration: 1.6,
    ease: [0.25, 0.46, 0.45, 0.94],
    delay: 2.5,
  },
},

  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 1.5,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.8,
        delay: 2.5,
      },
    },
  };

  const contentVariants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 1.5,
      },
    },
  };

  const backgroundOverlayVariants = {
    initial: { opacity: 0.6 },
    animate: {
      opacity: 0.6,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      {/* Splash Screen */}
      <AnimatePresence>
        {!animationComplete && (
          <motion.div
            className="fixed inset-0 z-50"
            variants={splashVariants}
            initial="initial"
            exit="exit"
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={video}
              autoPlay
              loop
              muted
              playsInline
            />
            <motion.div
              className="absolute inset-0 bg-black/70"
              variants={backgroundOverlayVariants}
              initial="initial"
              animate="animate"
            />

            {/* Splash Logo and Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

              <motion.div
                className="text-center"
                variants={logoVariants}
                initial="initial"
                animate={logoAnimationComplete ? "moveTopLeft" : "animate"}

              >
                {/* Logo Image */}
                <motion.div className="mb-8">
                  <img src={logo} alt="Logo" className="h-44 mx-auto" />
                </motion.div>

                {/* Brand Text */}
                <AnimatePresence>
                  {!logoAnimationComplete && (
                    <motion.div
                      variants={textVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <motion.h1
                        className="text-4xl md:text-6xl font-light tracking-widest text-white mb-4"
                        animate={{
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      ></motion.h1>
                      <motion.p
                        className="text-lg text-gray-300 font-light tracking-wider"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 0.8 }}
                      ></motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Loading Animation */}
            <LoadingAnimation />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
        <motion.div
          className="absolute inset-0 bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
        />

        {/* Top Logo and Text (Small versions that appear after drag) */}
        <motion.div
          className="absolute top-8 left-8 z-20 flex items-center space-x-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        ></motion.div>

        {/* Content */}
        {/* <motion.div
          className="relative z-10 text-center text-white px-6 mt-16"
          variants={contentVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-medium uppercase tracking-wider mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.span
              className="text-4xl md:text-6xl lg:text-7xl font-medium bg-gradient-to-r from-[#771d1c] to-[#c6c7c9] bg-clip-text font-bolder text-transparent mb-2 block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            >
              NAKASHI
            </motion.span>
            <motion.span
              className="text-4xl md:text-6xl lg:text-7xl font-medium bg-gradient-to-r from-[#771d1c] to-[#c6c7c9] bg-clip-text font-bolder text-transparent mb-2 block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            >
              EXPO
            </motion.span>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.8 }}
            >
              INNOVATION
            </motion.div>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-light tracking-wider opacity-90"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.8 }}
          >
            Our Stands Stand Out With Premium Craftsmanship, Unique Materials,
            and Innovative Design.
          </motion.p>
        </motion.div> */}

        {/* Scroll Indicator */}
        {/* <motion.div 
          className="absolute bottom-8 right-8 text-white text-sm opacity-70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <span>John Doe</span>
        </motion.div> */}
      </section>
    </>
  );
};

export default HeroSection;
