import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Code2 } from 'lucide-react';
import Container from './ui/Container';
import Section from './ui/Section';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const socialLinks = [
    {
      href: "https://github.com/Azyura203",
      icon: Github,
      label: "GitHub",
      color: "hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
    },
    {
      href: "https://www.linkedin.com/in/saikyawgaung/",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      href: "mailto:saikyawgaung@gmail.com",
      icon: Mail,
      label: "Email",
      color: "hover:bg-red-600 hover:text-white"
    }
  ];

  return (
    <Section className="min-h-screen flex items-center relative overflow-hidden" size="lg">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{
            scale: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
            x: { duration: 0.2 },
            y: { duration: 0.2 },
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: mousePosition.x * -1.5,
            y: mousePosition.y * -1.5,
          }}
          transition={{
            scale: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            },
            x: { duration: 0.2 },
            y: { duration: 0.2 },
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <Container>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium border border-green-500/20"
                whileHover={{ scale: 1.05, borderColor: 'rgba(34, 197, 94, 0.4)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>Available for opportunities</span>
              </motion.div>

              <h1 className="text-display leading-none">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Hi, I'm
                </motion.span>
                <motion.span
                  className="block relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                      Kyaw Gaung
                    </span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-2xl"
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </span>
                </motion.span>
              </h1>

              <motion.p
                className="text-subheading text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                AKA <span className="font-semibold text-foreground relative inline-block group">
                  Kane
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                </span>
              </motion.p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-body text-muted-foreground max-w-2xl leading-relaxed"
            >
              A passionate junior developer exploring the full stack and DevOps world.
              I'm focused on learning, building, and gaining experience through hands-on
              work and collaboration. Currently dreaming of running my own software company:
              <span className="font-semibold text-blue-600"> KANEDEV</span>.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                className="btn btn-primary group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="#contact"
                className="btn btn-secondary group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative p-3 glass rounded-2xl text-muted-foreground transition-all duration-300 focus-ring group ${link.color}`}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 relative z-10" />
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                    }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              className="relative glass rounded-3xl p-6 shadow-2xl border border-border/50 overflow-hidden group"
              whileHover={{ y: -6, rotateX: 2, rotateY: 2 }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="flex items-center gap-2 mb-6 relative z-10">
                <div className="flex gap-2">
                  <motion.div
                    className="w-3 h-3 bg-red-500 rounded-full"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 bg-yellow-500 rounded-full"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    whileHover={{ scale: 1.2 }}
                  />
                </div>
                <div className="text-sm text-muted-foreground ml-4 font-mono flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  kane@portfolio:~
                </div>
              </div>

              <div className="font-mono text-sm space-y-4 relative z-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">$</span>
                    <motion.span
                      className="text-foreground"
                      initial={{ width: 0 }}
                      animate={{ width: 'auto' }}
                    >
                      whoami
                    </motion.span>
                  </div>
                  <motion.div
                    className="text-muted-foreground ml-6"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    Kyaw Gaung (Kane) - Junior Developer
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">$</span>
                    <span className="text-foreground">cat skills.txt</span>
                  </div>
                  <motion.div
                    className="text-muted-foreground ml-6"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 }}
                  >
                    Full Stack Development, DevOps,<br />
                    Problem Solving, Creative Thinking
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.0 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">$</span>
                    <span className="text-foreground">echo $DREAM</span>
                  </div>
                  <motion.div
                    className="text-blue-600 ml-6 font-semibold flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.2 }}
                  >
                    <Sparkles className="w-4 h-4" />
                    "Building KANEDEV - My future software company"
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.4 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-green-500">$</span>
                  <span className="text-foreground">_</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-blue-600 font-bold"
                  >
                    |
                  </motion.span>
                </motion.div>
              </div>

              <motion.div
                className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 glass rounded-2xl p-3 shadow-xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: 'spring' }}
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              <Code2 className="w-6 h-6 text-blue-600" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Hero;
