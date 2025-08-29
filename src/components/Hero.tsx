import { useEffect } from 'react';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  // Particle system
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = Math.random() * 3 + 3 + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      const container = document.querySelector('.particles');
      if (container) {
        container.appendChild(particle);
        setTimeout(() => particle.remove(), 6000);
      }
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 animated-bg" />

      {/* Particle system */}
      <div className="particles absolute inset-0" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 morph-shape float opacity-30" />
        <div className="absolute top-40 right-20 w-16 h-16 morph-shape float opacity-20" style={{ animationDelay: '-2s' }} />
        <div className="absolute bottom-32 left-1/4 w-24 h-24 morph-shape float opacity-25" style={{ animationDelay: '-4s' }} />
        <div className="absolute bottom-20 right-1/3 w-12 h-12 morph-shape float opacity-30" style={{ animationDelay: '-1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Profile Image - Clean and Simple */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Simple glow effect */}
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-xl opacity-30" />
              
              <img
                src={profileImage}
                alt="Vamsi Peela"
                className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-primary/30"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-space-grotesk">
            <span className="gradient-text">Vamsi Peela</span>
          </h1>

          {/* Static Title */}
          <div className="mb-8">
            <div className="glass-vibrant px-8 py-4 rounded-2xl border border-primary/30 inline-block">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-medium text-foreground">
                MERN Stack Developer
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="glass-dark p-8 rounded-3xl max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <span className="gradient-text-secondary font-semibold">MERN Stack Developer</span> with experience in full-stack web applications. 
              Strong in <span className="text-primary font-medium">Frontend</span>, <span className="text-secondary font-medium">Backend</span>, and databases. 
              Passionate about writing <span className="gradient-text">clean, efficient code</span> and contributing to 
              <span className="text-accent font-medium"> AI-driven solutions</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button
              onClick={() => scrollToAbout()}
              className="group relative px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity" />
              <span className="relative text-primary-foreground flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Explore My Universe
              </span>
            </button>
            
            <a
              href="#contact"
              className="group relative px-10 py-5 rounded-2xl font-bold text-lg border-2 border-secondary hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors rounded-2xl" />
              <span className="relative text-secondary flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Let's Collaborate
              </span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            {[
              { number: '8.60', label: 'CGPA', icon: '🎓' },
              { number: '10+', label: 'Projects', icon: '🚀' },
              { number: '5+', label: 'Technologies', icon: '⚡' },
              { number: '100%', label: 'Passion', icon: '💜' }
            ].map((stat, index) => (
              <div key={index} className="glass-vibrant p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold gradient-text font-space-grotesk">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToAbout} 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-sm font-medium opacity-80 group-hover:opacity-100">Scroll to explore</span>
            <div className="animate-bounce">
              <ChevronDown size={32} className="group-hover:scale-110 transition-transform" />
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent opacity-50" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;