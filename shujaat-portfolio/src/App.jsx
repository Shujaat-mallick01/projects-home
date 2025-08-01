import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaReact, FaLaravel, FaGitAlt, FaDatabase, FaCode, FaPhone, FaMapMarkerAlt, FaArrowRight, FaDownload } from 'react-icons/fa';
import { SiNextdotjs, SiDjango, SiMysql, SiWordpress, SiBootstrap } from 'react-icons/si';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < 80; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
      });
    }
    setParticles(particleArray);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white/5 rounded-full blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, particle.speedX * 100, 0],
            y: [0, particle.speedY * 100, 0],
            opacity: [0.1, 0.5, 0.1]
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

const GlassCard = ({ children, className = "", hover = true }) => (
  <motion.div
    className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl shadow-2xl ${className}`}
    whileHover={hover ? { y: -8, scale: 1.02 } : {}}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  // Real resume data
  const personalInfo = {
    name: "Shujaat Mallick",
    title: "Frontend Developer",
    subtitle: "Creating Digital Excellence",
    location: "House No L-309, North Karachi, Karachi",
    phone: "+92 (311) 2957276",
    email: "shujaatmallick@gmail.com",
    summary: "Dynamic Frontend Developer with experience in creating responsive, user-friendly web interfaces using modern JavaScript frameworks such as React and Angular. Proficient in translating UI/UX designs into high-quality code while ensuring cross-browser compatibility."
  };

  const experience = {
    company: "DK Digital Solutions, Karachi",
    role: "Frontend Developer",
    duration: "October 2023 - Present",
    responsibilities: [
      "Engineered responsive, user-friendly web interfaces utilizing modern JavaScript frameworks such as React, Vue.js, and Angular",
      "Transformed UI/UX design wireframes into high-quality code, ensuring compatibility across various browsers and devices",
      "Collaborated closely with backend developers, designers, and product managers to deliver coherent user experiences",
      "Streamlined application performance by reducing load times and enhancing usability",
      "Integrated RESTful APIs and third-party services to broaden functionality"
    ]
  };

  const education = [
    {
      institution: 'NED University of Engineering and Technology, Karachi',
      degree: 'Master in Data Science',
      duration: 'January 2025 - Present',
      description: 'Graduate program focused on advanced topics in data analytics, machine learning, statistical modeling, and big data technologies.',
    },
    {
      institution: 'NED University of Engineering and Technology, Karachi',
      degree: 'Bachelors in Applied Physics',
      duration: 'September 2019 - September 2023',
      description: 'Undergraduate degree with emphasis on physics fundamentals, electronics, instrumentation, and computational methods.',
    }
  ];

  const skills = [
    { name: 'React', icon: FaReact, level: 90, color: 'from-blue-400 to-cyan-400' },
    { name: 'Next.js', icon: SiNextdotjs, level: 85, color: 'from-gray-400 to-white' },
    { name: 'Laravel', icon: FaLaravel, level: 80, color: 'from-red-400 to-orange-400' },
    { name: 'Django', icon: SiDjango, level: 75, color: 'from-green-400 to-green-600' },
    { name: 'MySQL', icon: SiMysql, level: 85, color: 'from-blue-500 to-blue-700' },
    { name: 'Git', icon: FaGitAlt, level: 90, color: 'from-orange-400 to-red-500' },
    { name: 'WordPress', icon: SiWordpress, level: 88, color: 'from-blue-600 to-blue-800' },
    { name: 'Bootstrap', icon: SiBootstrap, level: 92, color: 'from-purple-500 to-purple-700' }
  ];

  const projects = [
    {
      title: 'SMM Production Frontend',
      description: 'Developed a responsive frontend for an SMM (Social Media Marketing) panel using React and Vite, featuring modern UI, Redux state management, and real-time updates via WebSockets.',
      tech: ['React', 'Vite', 'Redux', 'WebSockets', 'Sass'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
      category: 'Web Development'
    },
    {
      title: 'WordPress Booking Plugin',
      description: 'Developed a WordPress booking plugin with custom post types, AJAX functionality, payment processing, and email notifications with dynamic booking forms.',
      tech: ['PHP', 'WordPress', 'AJAX', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop&crop=center',
      category: 'Plugin Development'
    },
    {
      title: 'Payment Gateway Integration',
      description: 'Built a WordPress plugin integrating PlugnPay payment gateway with booking system, supporting secure card payments and admin settings.',
      tech: ['PHP', 'WordPress', 'Payment Gateway', 'AJAX'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center',
      category: 'E-commerce'
    }
  ];

  const services = [
    {
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using modern JavaScript frameworks.',
      icon: FaCode,
      features: ['React Development', 'Vue.js Applications', 'Angular Projects', 'Responsive Design']
    },
    {
      title: 'Backend Integration',
      description: 'Building robust backend solutions and API integrations for seamless functionality.',
      icon: FaDatabase,
      features: ['RESTful APIs', 'Laravel Development', 'Django Applications', 'Database Design']
    },
    {
      title: 'WordPress Solutions',
      description: 'Custom WordPress development including themes, plugins, and full website solutions.',
      icon: SiWordpress,
      features: ['Custom Plugins', 'Theme Development', 'E-commerce Solutions', 'Performance Optimization']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <ParticleBackground />
      
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shujaat
              </span>
            </motion.div>
            
            <div className="hidden lg:flex items-center space-x-12">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-white/80 hover:text-white transition-all duration-300 font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
            
            <motion.a
  className="hidden lg:block bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full font-medium text-white text-center"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="tel:+923112957276"
>
  Hire Me
</motion.a>

            
            <div className="lg:hidden">
              <motion.button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.95 }}
                className="backdrop-blur-lg bg-white/10 p-3 rounded-xl border border-white/20"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 mb-6">
                👋 Hello, I'm {personalInfo.name}
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="block text-white">Creative</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                {personalInfo.title}
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-white/70 leading-relaxed max-w-lg"
            >
              Crafting digital experiences that combine beautiful design with powerful functionality. Ready to bring your vision to life.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold flex items-center gap-2 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work <FaArrowRight />
              </motion.button>
              <motion.button
                className="backdrop-blur-md bg-white/10 border border-white/20 px-8 py-4 rounded-full font-semibold flex items-center gap-2 justify-center"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Download CV
              </motion.button>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex gap-4"
            >
              {[
                { icon: FaGithub, href: "#", color: "hover:text-gray-300" },
                { icon: FaLinkedin, href: "#", color: "hover:text-blue-400" },
                { icon: FaInstagram, href: "#", color: "hover:text-pink-400" },
                { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, color: "hover:text-red-400" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 backdrop-blur-md bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white/70 ${social.color} transition-all duration-300`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Content - Abstract Shapes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Animated geometric shapes */}
              <motion.div
                className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Floating elements */}
              <motion.div
                className="absolute top-20 left-20 w-4 h-4 bg-purple-400 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-20 right-20 w-6 h-6 bg-pink-400 rounded-full"
                animate={{
                  y: [0, 20, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-32 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <motion.span 
                  className="text-purple-400 font-semibold text-lg"
                  variants={itemVariants}
                >
                  About Me
                </motion.span>
                <motion.h2 
                  className="text-4xl lg:text-5xl font-bold mt-4 mb-6"
                  variants={itemVariants}
                >
                  Turning Ideas Into <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Digital Reality</span>
                </motion.h2>
                <motion.p 
                  className="text-white/70 text-lg leading-relaxed"
                  variants={itemVariants}
                >
                  {personalInfo.summary}
                </motion.p>
              </div>
              
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-300">Experience</h4>
                  <p className="text-2xl font-bold">1+ Years</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-300">Projects</h4>
                  <p className="text-2xl font-bold">15+</p>
                </div>
              </motion.div>
              
              <motion.button
                variants={itemVariants}
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume <FaDownload />
              </motion.button>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <GlassCard className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Current Position</h3>
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center">
                    <FaCode className="text-2xl text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-purple-300">{experience.role}</h4>
                    <p className="text-white/70">{experience.company}</p>
                    <p className="text-white/50 text-sm">{experience.duration}</p>
                  </div>
                </div>
                
                <div className="mt-6 space-y-2">
                  <h5 className="font-semibold text-purple-300 mb-3">Key Responsibilities:</h5>
                  {experience.responsibilities.slice(0, 3).map((resp, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-white/70">{resp}</span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-32 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-purple-400 font-semibold text-lg">Services</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              What I <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Comprehensive web development solutions tailored to your needs
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <GlassCard className="p-8 h-full">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto flex items-center justify-center mb-4">
                      <service.icon className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-sm text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-32 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-purple-400 font-semibold text-lg">Skills</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <GlassCard className="p-6 text-center">
                  <motion.div
                    className="mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <skill.icon className={`text-4xl mx-auto bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`} />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
                  
                  <div className="relative">
                    <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                      <motion.div
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                      />
                    </div>
                    <span className="text-sm text-white/60">{skill.level}%</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-32 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-purple-400 font-semibold text-lg">Portfolio</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Showcase of my recent work and achievements
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <GlassCard className="overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                    <p className="text-white/70 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <motion.button
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-xl font-medium flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Project <FaArrowRight className="text-sm" />
                    </motion.button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="py-32 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-purple-400 font-semibold text-lg">Education</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Academic <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Journey</span>
            </h2>
          </motion.div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <GlassCard className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-purple-300 mb-2">{edu.degree}</h3>
                      <p className="text-lg text-white/80 mb-2">{edu.institution}</p>
                      <p className="text-white/60">{edu.description}</p>
                    </div>
                    <div className="lg:text-right mt-4 lg:mt-0">
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/20 rounded-full text-sm font-medium">
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-32 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-purple-400 font-semibold text-lg">Contact</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Let's Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's collaborate and create something amazing together!
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-300">Email</h4>
                      <p className="text-white/70">{personalInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <FaPhone className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-300">Phone</h4>
                      <p className="text-white/70">{personalInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <FaMapMarkerAlt className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-300">Location</h4>
                      <p className="text-white/70">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="font-semibold text-purple-300 mb-4 text-center">Follow Me</h4>
                  <div className="flex justify-center space-x-4">
                    {[
                      { icon: FaGithub, href: "#", color: "hover:text-gray-300" },
                      { icon: FaLinkedin, href: "#", color: "hover:text-blue-400" },
                      { icon: FaInstagram, href: "#", color: "hover:text-pink-400" },
                      { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, color: "hover:text-red-400" }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        className={`w-12 h-12 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white/70 ${social.color} transition-all duration-300`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="text-lg" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <GlassCard className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Send Message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="Project inquiry"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                    <textarea
                      rows="5"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl focus:outline-none focus:border-purple-400 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message <FaArrowRight />
                  </motion.button>
                </form>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative py-12">
        <div className="backdrop-blur-xl bg-black/20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div 
                className="text-2xl font-bold mb-4 md:mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Shujaat
                </span>
              </motion.div>
              
              <motion.p 
                className="text-white/60 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                © 2025 {personalInfo.name}. Crafted with passion and modern web technologies.
              </motion.p>
              
              <motion.div
                className="flex space-x-4 mt-4 md:mt-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                {[FaGithub, FaLinkedin, FaInstagram].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-10 h-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Icon className="text-sm" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          <div className="backdrop-blur-xl bg-black/50 h-full flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 m-4 max-w-sm w-full"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold">Menu</h3>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default App;