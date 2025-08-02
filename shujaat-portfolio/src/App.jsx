import { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaReact,
  FaLaravel,
  FaGitAlt,
  FaDatabase,
  FaCode,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaDownload,
  FaPlay,
  FaEye,
  FaUsers,
  FaCoffee,
  FaAward,
  FaBars,
  FaTimes,
  FaChevronUp,
  FaDocker,
  FaServer,
  FaCloud,
  FaTerminal,
  FaUbuntu,
  FaLinux,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiDjango,
  SiMysql,
  SiWordpress,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNginx,
  SiGunicorn,
  SiKubernetes,
  SiDigitalocean,
  SiGit,
  SiPython,
} from "react-icons/si";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, AnimatePresence, useSpring } from "framer-motion";

// Galaxy-themed Particle Background with stars and nebula effects
const GalaxyBackground = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const [nebulaClouds, setNebulaClouds] = useState([]);

  useEffect(() => {
    // Generate stars
    const starArray = [];
    for (let i = 0; i < 200; i++) {
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 0.5,
        twinkleSpeed: Math.random() * 3 + 1,
        brightness: Math.random() * 0.5 + 0.5,
      });
    }
    setStars(starArray);

    // Generate shooting stars
    const shootingStarArray = [];
    for (let i = 0; i < 5; i++) {
      shootingStarArray.push({
        id: i,
        startX: Math.random() * 100,
        startY: Math.random() * 50,
        endX: Math.random() * 100,
        endY: Math.random() * 50 + 50,
        delay: Math.random() * 10,
      });
    }
    setShootingStars(shootingStarArray);

    // Generate nebula clouds
    const nebulaArray = [];
    for (let i = 0; i < 3; i++) {
      nebulaArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: i === 0 ? "purple" : i === 1 ? "blue" : "pink",
        size: Math.random() * 400 + 200,
      });
    }
    setNebulaClouds(nebulaArray);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      {/* Animated galaxy gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 30%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
            "radial-gradient(ellipse at 60% 70%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 20%, rgba(119, 198, 255, 0.3) 0%, transparent 50%)",
            "radial-gradient(ellipse at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Nebula clouds */}
      {nebulaClouds.map((nebula) => (
        <motion.div
          key={`nebula-${nebula.id}`}
          className={`absolute rounded-full filter blur-3xl opacity-20 ${
            nebula.color === "purple"
              ? "bg-purple-500"
              : nebula.color === "blue"
              ? "bg-blue-500"
              : "bg-pink-500"
          }`}
          style={{
            width: nebula.size,
            height: nebula.size,
            left: `${nebula.x}%`,
            top: `${nebula.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 30 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${
              star.brightness
            })`,
          }}
          animate={{
            opacity: [
              star.brightness * 0.5,
              star.brightness,
              star.brightness * 0.5,
            ],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.twinkleSpeed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={`shooting-${star.id}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.8)",
          }}
          animate={{
            x: [`0%`, `${star.endX - star.startX}%`],
            y: [`0%`, `${star.endY - star.startY}%`],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 10,
            ease: "easeOut",
          }}>
          <div className="absolute inset-0 w-20 h-0.5 bg-gradient-to-r from-white to-transparent -translate-y-1/2 -translate-x-full" />
        </motion.div>
      ))}

      {/* Cosmic dust particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            className="absolute w-0.5 h-0.5 bg-blue-200 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Enhanced Glass Card with galaxy glow effects
const GlassCard = ({
  children,
  className = "",
  hover = true,
  glow = false,
}) => (
  <motion.div
    className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden ${
      glow ? "shadow-purple-500/25" : ""
    } ${className}`}
    whileHover={
      hover
        ? {
            y: -8,
            scale: 1.02,
            boxShadow: glow
              ? "0 25px 50px rgba(147, 51, 234, 0.3)"
              : "0 25px 50px rgba(0, 0, 0, 0.5)",
          }
        : {}
    }
    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}>
    {glow && (
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    )}
    <div className="relative z-10">{children}</div>
  </motion.div>
);

// Scroll to top button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg backdrop-blur-xl border border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <FaChevronUp className="text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Enhanced personal info with more details
  const personalInfo = {
    name: "Shujaat Mallick",
    title: "Frontend Developer & DevOps Engineer",
    subtitle: "Creating Digital Excellence",
    location: "House No L-309, North Karachi, Karachi",
    phone: "+92 (311) 2957276",
    email: "shujaatmallick@gmail.com",
    github: "https://github.com/Shujaat-mallick01/",
    linkedin: "https://www.linkedin.com/in/shujaat-mallick-b45912279/",
    instagram: "https://www.instagram.com/shujaatmallickofficial/",
    summary:
      "Passionate Frontend Developer with expertise in creating stunning, responsive web applications using cutting-edge technologies. Experienced in DevOps practices, server management, and cloud infrastructure. I transform complex ideas into elegant, scalable digital experiences.",
  };

  const experience = {
    company: "DK Digital Solutions, Karachi",
    role: "Frontend Developer & DevOps Engineer",
    duration: "October 2023 - Present",
    responsibilities: [
      "Architected and developed 15+ responsive web applications using React, Vue.js, and Angular with 99.9% uptime",
      "Managed Linux servers (Ubuntu) and configured Nginx for optimal performance and security",
      "Deployed applications using Docker, Gunicorn, and implemented CI/CD pipelines",
      "Optimized application performance, achieving 40% faster load times and improved Core Web Vitals",
      "Integrated complex APIs and managed cloud infrastructure on AWS and DigitalOcean",
    ],
  };

  const education = [
    {
      institution: "NED University of Engineering and Technology, Karachi",
      degree: "Master in Data Science",
      duration: "January 2025 - Present",
      description:
        "Advanced studies in machine learning, big data analytics, statistical modeling, and AI applications.",
      icon: "🎓",
      gpa: "Current",
    },
    {
      institution: "NED University of Engineering and Technology, Karachi",
      degree: "Bachelors in Applied Physics",
      duration: "September 2019 - September 2023",
      description:
        "Specialized in computational physics, electronics, and mathematical modeling.",
      icon: "🔬",
      gpa: "Honors",
    },
  ];

  const skills = [
    // Frontend Skills
    {
      name: "React",
      icon: FaReact,
      level: 95,
      color: "from-blue-400 to-cyan-400",
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      level: 90,
      color: "from-gray-300 to-gray-600",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      level: 88,
      color: "from-blue-600 to-blue-800",
      category: "Language",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      level: 92,
      color: "from-yellow-400 to-yellow-600",
      category: "Language",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      level: 94,
      color: "from-teal-400 to-blue-500",
      category: "Styling",
    },

    // Backend Skills
    {
      name: "Laravel",
      icon: FaLaravel,
      level: 85,
      color: "from-red-400 to-orange-400",
      category: "Backend",
    },
    {
      name: "Django",
      icon: SiDjango,
      level: 80,
      color: "from-green-400 to-green-600",
      category: "Backend",
    },
    {
      name: "Python",
      icon: SiPython,
      level: 85,
      color: "from-blue-500 to-yellow-500",
      category: "Language",
    },

    // Database
    {
      name: "MySQL",
      icon: SiMysql,
      level: 87,
      color: "from-blue-500 to-blue-700",
      category: "Database",
    },

    // DevOps Skills
    {
      name: "Ubuntu/Linux",
      icon: FaUbuntu,
      level: 88,
      color: "from-orange-500 to-red-500",
      category: "DevOps",
    },
    {
      name: "Nginx",
      icon: SiNginx,
      level: 85,
      color: "from-green-500 to-green-700",
      category: "DevOps",
    },
    {
      name: "Gunicorn",
      icon: SiGunicorn,
      level: 82,
      color: "from-green-400 to-lime-500",
      category: "DevOps",
    },
    {
      name: "Docker",
      icon: FaDocker,
      level: 80,
      color: "from-blue-500 to-blue-600",
      category: "DevOps",
    },
    {
      name: "Git",
      icon: FaGitAlt,
      level: 90,
      color: "from-orange-500 to-red-500",
      category: "DevOps",
    },
    // { name: 'AWS', icon: SiAmazonaws, level: 75, color: 'from-yellow-500 to-orange-500', category: 'Cloud' },
    {
      name: "DigitalOcean",
      icon: SiDigitalocean,
      level: 85,
      color: "from-blue-500 to-blue-600",
      category: "Cloud",
    },
  ];

  const projects = [
    {
      title: "SMM Production Dashboard",
      description:
        "A comprehensive social media management platform with real-time analytics, automated posting, and team collaboration features.",
      longDescription:
        "Built with React 18, Redux Toolkit, and WebSocket integration for real-time updates. Deployed on Ubuntu server with Nginx.",
      tech: ["React", "Redux", "WebSocket", "Tailwind CSS", "Nginx", "Ubuntu"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      category: "Web Application",
      link: "#",
      featured: true,
      metrics: { users: "1000+", performance: "99.9%", satisfaction: "4.8/5" },
    },
    {
      title: "Advanced Booking System",
      description:
        "Enterprise-grade WordPress plugin with dynamic pricing, multi-vendor support, and payment gateway integration.",
      longDescription:
        "Custom post types, AJAX-powered interface, and seamless payment processing. Deployed using Gunicorn and Nginx.",
      tech: ["PHP", "WordPress", "AJAX", "MySQL", "Payment Gateway"],
      image:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=500&fit=crop",
      category: "Plugin Development",
      link: "#",
      featured: true,
      metrics: { bookings: "5000+", revenue: "+150%", efficiency: "+80%" },
    },
    {
      title: "Cloud Infrastructure Setup",
      description:
        "Complete DevOps solution with automated deployment, monitoring, and scaling on AWS and DigitalOcean.",
      longDescription:
        "Configured Ubuntu servers, Nginx reverse proxy, SSL certificates, and CI/CD pipelines.",
      tech: [
        "Ubuntu",
        "Nginx",
        "Docker",
        "AWS",
        "DigitalOcean",
        "Git",
        "Gunicorn",
      ],
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop",
      category: "DevOps",
      link: "#",
      featured: true,
      metrics: { uptime: "99.99%", deployments: "200+", servers: "10+" },
    },
  ];

  const services = [
    {
      title: "Frontend Development",
      description:
        "Creating stunning, responsive interfaces with modern frameworks and best practices.",
      icon: FaCode,
      features: [
        "React & Next.js Apps",
        "Progressive Web Apps",
        "Mobile-First Design",
        "Performance Optimization",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "DevOps & Infrastructure",
      description:
        "Server management, deployment automation, and cloud infrastructure setup.",
      icon: FaServer,
      features: [
        "Linux Server Management",
        "Nginx Configuration",
        "Docker Deployment",
        "CI/CD Pipelines",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Full-Stack Solutions",
      description:
        "End-to-end web applications with robust backend and seamless API integrations.",
      icon: FaDatabase,
      features: [
        "RESTful API Design",
        "Database Architecture",
        "Server Configuration",
        "Cloud Deployment",
      ],
      color: "from-green-500 to-teal-500",
    },
  ];

  const stats = [
    {
      icon: FaEye,
      number: "50+",
      label: "Projects Delivered",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FaUsers,
      number: "30+",
      label: "Happy Clients",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: FaServer,
      number: "10+",
      label: "Servers Managed",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaAward,
      number: "99%",
      label: "Success Rate",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const navItems = [
    "Home",
    "About",
    "Services",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <GalaxyBackground />
      <ScrollToTop />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left z-50"
        style={{ scaleX }}
      />

      {/* Enhanced Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        className="fixed w-full z-40 backdrop-blur-2xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              className="text-2xl md:text-3xl font-bold relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Shujaat
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-white/80 hover:text-white transition-all duration-300 font-medium text-sm uppercase tracking-wider rounded-full"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}>
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "80%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+923112957276">
              <FaPhone className="text-xs" />
              Hire Me
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20"
              whileTap={{ scale: 0.95 }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}>
                {isMenuOpen ? (
                  <FaTimes className="h-5 w-5" />
                ) : (
                  <FaBars className="h-5 w-5" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-8 lg:space-y-10">
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center">
              <div className="relative">
                <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-full text-sm font-medium border border-purple-400/30 uppercase tracking-wider">
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                    className="mr-2">
                    🚀
                  </motion.span>
                  Hello, I'm {personalInfo.name.split(" ")[0]}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <motion.span
                  className="block text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}>
                  Creative
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}>
                  Developer
                </motion.span>
              </motion.h1>

              {/* Typing effect subtitle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-lg sm:text-xl text-purple-300 font-medium">
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}>
                  Frontend Specialist & DevOps Engineer
                </motion.span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
              {personalInfo.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <motion.button
                className="cursor-pointer group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 text-sm uppercase tracking-wider shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }>
                <FaPlay className="text-sm group-hover:scale-110 transition-transform" />
                View My Work
                <motion.div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              <motion.a
                href="\resume.pdf"
                download="Shujaat_Mallick_Resume.pdf"
                className="group backdrop-blur-xl bg-white/10 border border-white/20 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 text-sm uppercase tracking-wider hover:bg-white/15 transition-all duration-300 inline-flex cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}>
                <FaDownload className="text-sm group-hover:animate-bounce" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex gap-4">
              {[
                {
                  icon: FaGithub,
                  href: personalInfo.github,
                  color: "hover:text-gray-300",
                  label: "GitHub",
                },
                {
                  icon: FaLinkedin,
                  href: personalInfo.linkedin,
                  color: "hover:text-blue-400",
                  label: "LinkedIn",
                },
                {
                  icon: FaInstagram,
                  href: personalInfo.instagram,
                  color: "hover:text-pink-400",
                  label: "Instagram",
                },
                {
                  icon: FaEnvelope,
                  href: `mailto:${personalInfo.email}`,
                  color: "hover:text-red-400",
                  label: "Email",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-14 h-14 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white/70 ${social.color} transition-all duration-300 hover:border-white/30`}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 + index * 0.1 }}
                  title={social.label}>
                  <social.icon className="text-lg group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Galaxy-themed Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="relative">
            <div className="relative w-full h-96 sm:h-[500px] lg:h-[600px]">
              {/* Galaxy portal effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                <div className="w-full h-full bg-gradient-conic from-purple-500 via-pink-500 to-purple-500 rounded-full opacity-30 blur-3xl" />
              </motion.div>

              {/* Central planet/sphere */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative w-48 h-48 sm:w-56 sm:h-56"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 100,
                    repeat: Infinity,
                    ease: "linear",
                  }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-full shadow-2xl shadow-purple-500/50">
                    <div className="absolute inset-2 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 rounded-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-full" />
                  </div>

                  {/* Tech icons orbiting */}
                  {[
                    {
                      Icon: FaReact,
                      color: "text-blue-400",
                      radius: 120,
                      speed: 20,
                    },
                    {
                      Icon: SiNginx,
                      color: "text-green-400",
                      radius: 140,
                      speed: 25,
                    },
                    {
                      Icon: FaDocker,
                      color: "text-blue-500",
                      radius: 160,
                      speed: 30,
                    },
                    {
                      Icon: FaUbuntu,
                      color: "text-orange-500",
                      radius: 180,
                      speed: 35,
                    },
                    {
                      Icon: SiTypescript,
                      color: "text-blue-600",
                      radius: 100,
                      speed: 15,
                    },
                    {
                      Icon: FaServer,
                      color: "text-purple-400",
                      radius: 130,
                      speed: 22,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        width: item.radius * 2,
                        height: item.radius * 2,
                        marginTop: -item.radius,
                        marginLeft: -item.radius,
                      }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: item.speed,
                        repeat: Infinity,
                        ease: "linear",
                      }}>
                      <motion.div
                        className="absolute w-12 h-12 sm:w-14 sm:h-14 bg-black/50 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-lg"
                        style={{
                          top: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                        }}
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: item.speed,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        whileHover={{ scale: 1.2 }}>
                        <item.Icon className={`text-xl ${item.color}`} />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Floating code snippets with galaxy theme */}
              <motion.div
                className="absolute top-8 right-8 bg-black/80 backdrop-blur-xl rounded-xl p-4 border border-purple-400/30 shadow-xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                whileHover={{ scale: 1.05 }}>
                <code className="text-purple-400 text-sm font-mono">
                  <span className="text-pink-400">const</span> galaxy ={" "}
                  <span className="text-cyan-400">"infinite"</span>;
                </code>
              </motion.div>

              <motion.div
                className="absolute bottom-12 left-8 bg-black/80 backdrop-blur-xl rounded-xl p-4 border border-pink-400/30 shadow-xl"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                whileHover={{ scale: 1.05 }}>
                <code className="text-pink-400 text-sm font-mono">
                  server.<span className="text-purple-400">listen</span>(80);
                </code>
              </motion.div>

              {/* Constellation lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path
                  d="M100,100 L200,150 L300,120 L250,200"
                  stroke="rgba(147, 51, 234, 0.3)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.path
                  d="M150,250 L250,300 L350,280"
                  stroke="rgba(236, 72, 153, 0.3)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1,
                  }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <motion.section
        className="py-20 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group">
                <GlassCard
                  className="p-6 sm:p-8 group-hover:bg-white/10 transition-all duration-500"
                  glow>
                  <motion.div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${stat.color} rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}>
                    <stat.icon className="text-2xl sm:text-3xl text-white" />
                  </motion.div>

                  <motion.h3
                    className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}>
                    {stat.number}
                  </motion.h3>

                  <p className="text-white/70 font-medium text-sm sm:text-base">
                    {stat.label}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced About Section */}
      <motion.section
        id="about"
        className="py-20 sm:py-32 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <motion.span
                  className="inline-block text-purple-400 font-semibold text-lg uppercase tracking-wider relative"
                  variants={itemVariants}>
                  About Me
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </motion.span>

                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                  variants={itemVariants}>
                  Turning Ideas Into{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Digital Reality
                  </span>
                </motion.h2>

                <motion.p
                  className="text-white/70 text-lg leading-relaxed"
                  variants={itemVariants}>
                  {personalInfo.summary}
                </motion.p>
              </div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-6">
                <motion.div
                  className="space-y-2 text-center p-6 rounded-2xl bg-white/5 border border-white/10"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}>
                  <h4 className="font-semibold text-purple-300 uppercase tracking-wider text-sm">
                    Experience
                  </h4>
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    1.5+ Years
                  </p>
                </motion.div>
                <motion.div
                  className="space-y-2 text-center p-6 rounded-2xl bg-white/5 border border-white/10"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}>
                  <h4 className="font-semibold text-purple-300 uppercase tracking-wider text-sm">
                    Projects
                  </h4>
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    50+
                  </p>
                </motion.div>
              </motion.div>

              <motion.button
                variants={itemVariants}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold flex items-center gap-3 text-sm uppercase tracking-wider shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}>
                <FaDownload className="group-hover:animate-bounce" />
                Download Resume
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlassCard className="p-8 sm:p-10" glow>
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-semibold">Current Position</h3>

                  <motion.div
                    className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}>
                    <FaCode className="text-3xl text-white" />
                  </motion.div>

                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-purple-300">
                      {experience.role}
                    </h4>
                    <p className="text-white/70">{experience.company}</p>
                    <p className="text-white/50 text-sm">
                      {experience.duration}
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <h5 className="font-semibold text-purple-300 uppercase tracking-wider text-sm">
                    Key Achievements:
                  </h5>
                  <div className="space-y-3">
                    {experience.responsibilities
                      .slice(0, 3)
                      .map((resp, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}>
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-white/70 leading-relaxed">
                            {resp}
                          </span>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Services Section */}
      <motion.section
        id="services"
        className="py-20 sm:py-32 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block text-purple-400 font-semibold text-lg uppercase tracking-wider mb-4">
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              What I{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
              Comprehensive web development and DevOps solutions tailored to
              your business needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <GlassCard
                  className="p-8 h-full group-hover:bg-white/10 transition-all duration-500"
                  glow>
                  <div className="text-center mb-8">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}>
                      <service.icon className="text-3xl text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}>
                        <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-white/80">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Skills Section with DevOps */}
      <motion.section
        id="skills"
        className="py-20 sm:py-32 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block text-purple-400 font-semibold text-lg uppercase tracking-wider mb-4">
              Skills
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Technical{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
              Modern technologies, frameworks, and DevOps tools I use to create
              exceptional digital experiences
            </p>
          </motion.div>

          {/* Skill Categories */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {[
              "All",
              "Frontend",
              "Backend",
              "DevOps",
              "Language",
              "Database",
              "Cloud",
            ].map((category) => (
              <motion.button
                key={category}
                className="px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="group">
                <GlassCard
                  className="p-6 text-center group-hover:bg-white/10 transition-all duration-500 h-full"
                  glow>
                  <motion.div
                    className="mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}>
                    <skill.icon
                      className={`text-4xl mx-auto bg-gradient-to-r ${skill.color} bg-clip-text`}
                    />
                  </motion.div>

                  <h3 className="text-lg font-semibold mb-4">{skill.name}</h3>

                  <div className="space-y-2">
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 2,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white/60 uppercase tracking-wider">
                        {skill.category}
                      </span>
                      <span className="text-sm font-semibold text-white/80">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Projects Section */}
      <motion.section
        id="projects"
        className="py-20 sm:py-32 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block text-purple-400 font-semibold text-lg uppercase tracking-wider mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
              Showcase of my recent work in web development and DevOps,
              featuring cutting-edge technologies and innovative solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <GlassCard className="overflow-hidden group-hover:bg-white/5 transition-all duration-500 h-full">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-purple-500/30 backdrop-blur-xl rounded-full text-xs font-medium border border-purple-400/30 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* View button */}
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/30"
                      whileHover={{ scale: 1.1 }}>
                      <FaEye className="text-white text-sm" />
                    </motion.div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 backdrop-blur-xl rounded-full text-xs font-medium border border-yellow-400/30 text-yellow-200 uppercase tracking-wider">
                          ⭐ Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-xs text-white/80 uppercase tracking-wider hover:bg-white/15 transition-colors"
                          whileHover={{ scale: 1.05 }}>
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Project metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-xs text-white/60 uppercase tracking-wider mb-1">
                              {key}
                            </div>
                            <div className="text-sm font-semibold text-purple-300">
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* View project button */}
                    <motion.a
                      href={project.link}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-xl font-medium flex items-center justify-center gap-2 text-sm uppercase tracking-wider shadow-xl hover:shadow-purple-500/30 transition-all duration-300 group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}>
                      View Project
                      <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Education Section */}
      <motion.section
        className="py-20 sm:py-32 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block text-purple-400 font-semibold text-lg uppercase tracking-wider mb-4">
              Education
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Academic{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
              My educational foundation and continuous learning path in
              technology and science
            </p>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <GlassCard
                  className="p-8 group-hover:bg-white/5 transition-all duration-500"
                  glow>
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-shrink-0">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}>
                        {edu.icon}
                      </motion.div>
                    </div>

                    <div className="flex-1 space-y-3">
                      <h3 className="text-2xl font-semibold text-purple-300 group-hover:text-purple-200 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-white/80">{edu.institution}</p>
                      <p className="text-white/60 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>

                    <div className="text-center lg:text-right space-y-2">
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-sm font-medium uppercase tracking-wider">
                        {edu.duration}
                      </span>
                      <div className="text-xs text-white/60 uppercase tracking-wider">
                        {edu.gpa}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Contact Section */}
      <motion.section
        id="contact"
        className="py-20 sm:py-32 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block text-purple-400 font-semibold text-lg uppercase tracking-wider mb-4">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Let's Work{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's collaborate and create
              something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <GlassCard className="p-8" glow>
                <h3 className="text-2xl font-semibold mb-8 text-center">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      icon: FaEnvelope,
                      label: "Email",
                      value: personalInfo.email,
                      href: `mailto:${personalInfo.email}`,
                    },
                    {
                      icon: FaPhone,
                      label: "Phone",
                      value: personalInfo.phone,
                      href: `tel:${personalInfo.phone}`,
                    },
                    {
                      icon: FaMapMarkerAlt,
                      label: "Location",
                      value: personalInfo.location,
                      href: "#",
                    },
                  ].map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                      whileHover={{ x: 10 }}>
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <contact.icon className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-300 uppercase tracking-wider text-sm mb-1">
                          {contact.label}
                        </h4>
                        <p className="text-white/70 group-hover:text-white transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="font-semibold text-purple-300 mb-6 text-center uppercase tracking-wider text-sm">
                    Follow Me
                  </h4>
                  <div className="flex justify-center space-x-4">
                    {[
                      {
                        icon: FaGithub,
                        href: personalInfo.github,
                        color: "hover:text-gray-300",
                        label: "GitHub",
                      },
                      {
                        icon: FaLinkedin,
                        href: personalInfo.linkedin,
                        color: "hover:text-blue-400",
                        label: "LinkedIn",
                      },
                      {
                        icon: FaInstagram,
                        href: personalInfo.instagram,
                        color: "hover:text-pink-400",
                        label: "Instagram",
                      },
                      {
                        icon: FaEnvelope,
                        href: `mailto:${personalInfo.email}`,
                        color: "hover:text-red-400",
                        label: "Email",
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group w-14 h-14 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white/70 ${social.color} transition-all duration-300 hover:border-white/30`}
                        whileHover={{ scale: 1.15, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        title={social.label}>
                        <social.icon className="text-lg group-hover:scale-110 transition-transform" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <GlassCard className="p-8" glow>
                <h3 className="text-2xl font-semibold mb-8 text-center">
                  Send Message
                </h3>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="block text-sm font-medium text-white/80 mb-2 uppercase tracking-wider">
                        Name
                      </div>
                      <div className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white/60 hover:border-purple-400/50 transition-colors">
                        Your name
                      </div>
                    </div>
                    <div>
                      <div className="block text-sm font-medium text-white/80 mb-2 uppercase tracking-wider">
                        Email
                      </div>
                      <div className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white/60 hover:border-purple-400/50 transition-colors">
                        your@email.com
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="block text-sm font-medium text-white/80 mb-2 uppercase tracking-wider">
                      Subject
                    </div>
                    <div className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white/60 hover:border-purple-400/50 transition-colors">
                      Project inquiry
                    </div>
                  </div>

                  <div>
                    <div className="block text-sm font-medium text-white/80 mb-2 uppercase tracking-wider">
                      Message
                    </div>
                    <div className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white/60 h-32 flex items-start hover:border-purple-400/50 transition-colors">
                      Tell me about your project...
                    </div>
                  </div>

                  <motion.button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm uppercase tracking-wider shadow-xl hover:shadow-purple-500/30 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      window.open(
                        `mailto:${personalInfo.email}?subject=Project Inquiry&body=Hello Shujaat, I would like to discuss a project with you.`
                      )
                    }>
                    Send Message
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Footer */}
      <footer className="relative py-16">
        <div className="backdrop-blur-xl bg-black/30 border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Logo and tagline */}
              <motion.div
                className="text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                <div className="text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Shujaat
                  </span>
                </div>
                <p className="text-white/60 text-sm">
                  Creating Digital Excellence
                </p>
              </motion.div>

              {/* Copyright */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}>
                <p className="text-white/60 text-sm">
                  © 2025 {personalInfo.name}. All rights reserved.
                </p>
                <p className="text-white/40 text-xs mt-1">
                  Crafted with passion and modern web technologies
                </p>
              </motion.div>

              {/* Social links */}
              <motion.div
                className="flex justify-center md:justify-end space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}>
                {[
                  {
                    icon: FaGithub,
                    href: personalInfo.github,
                    label: "GitHub",
                  },
                  {
                    icon: FaLinkedin,
                    href: personalInfo.linkedin,
                    label: "LinkedIn",
                  },
                  {
                    icon: FaInstagram,
                    href: personalInfo.instagram,
                    label: "Instagram",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.label}>
                    <social.icon className="text-sm" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 backdrop-blur-2xl bg-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute right-4 top-4 bottom-4 w-80 max-w-[calc(100vw-2rem)]"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}>
              <GlassCard className="h-full p-8 flex flex-col" glow>
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Menu
                  </h3>
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <FaTimes className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-2 flex-1">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block py-4 px-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 text-lg uppercase tracking-wider font-medium group"
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}>
                      <span className="group-hover:text-purple-300 transition-colors">
                        {item}
                      </span>
                    </motion.a>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="border-t border-white/20 pt-6 mt-6">
                  <div className="text-center space-y-4">
                    <p className="text-white/60 text-sm">
                      Ready to work together?
                    </p>
                    <motion.a
                      href="tel:+923112957276"
                      className="block bg-gradient-to-r from-purple-500 to-pink-500 py-3 px-6 rounded-xl font-semibold text-sm uppercase tracking-wider shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}>
                      Call Now
                    </motion.a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
