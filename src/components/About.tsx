import { Code, Database, Server, Smartphone, Brain, Rocket } from 'lucide-react';
import workspaceImage from '@/assets/workspace.jpg';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Frontend Mastery',
      description: 'React.js, JavaScript (ES6), HTML5, CSS3',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Server,
      title: 'Backend Excellence',
      description: 'Node.js, Express.js, RESTful APIs',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Database Expertise',
      description: 'MongoDB, Data modeling, Optimization',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach, Cross-browser compatibility',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Machine Learning, AI-driven solutions',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimization, Scalable architecture',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 morph-shape opacity-10" />
        <div className="absolute bottom-20 left-10 w-24 h-24 morph-shape opacity-10" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk gradient-text mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer focused on creating innovative solutions
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <div className="space-y-8">
            <div className="glass-vibrant p-8 rounded-3xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-2xl">
                  <Brain className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold gradient-text-secondary">
                  My Journey
                </h3>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate <span className="gradient-text font-semibold">MERN Stack Developer</span> currently pursuing B.Tech in Computer Science 
                  at GMR Institute of Technology with a <span className="text-primary font-bold">CGPA of 8.60</span>. My journey in technology is 
                  driven by curiosity and a desire to create impactful solutions.
                </p>
                <p>
                  With strong expertise in <span className="text-primary font-medium">JavaScript (ES6)</span>, <span className="text-secondary font-medium">React.js</span>, 
                  <span className="text-accent font-medium"> Node.js</span>, and <span className="text-green-400 font-medium">MongoDB</span>, 
                  I enjoy building full-stack applications that solve real-world problems. 
                  I'm particularly interested in <span className="gradient-text-secondary font-semibold">AI-driven solutions</span> and modern web technologies.
                </p>
                <p>
                  Beyond coding, I focus on writing <span className="text-primary font-medium">clean, efficient code</span> and collaborating 
                  with teams to deliver exceptional user experiences. I'm always eager to 
                  learn new technologies and contribute to <span className="gradient-text font-semibold">innovative projects</span>.
                </p>
              </div>

              {/* Skills highlight */}
              <div className="flex flex-wrap gap-3 mt-6">
                {['React.js', 'Node.js', 'MongoDB', 'JavaScript', 'Python', 'Java'].map((tech, index) => (
                  <span
                    key={tech}
                    className="glass px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Workspace Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <img
                src={workspaceImage}
                alt="Modern coding workspace"
                className="relative w-full h-64 object-cover rounded-3xl border border-border/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-3xl" />
              <div className="absolute bottom-4 left-6 text-foreground">
                <h4 className="font-semibold gradient-text">My Digital Sanctuary</h4>
                <p className="text-sm text-muted-foreground">Where ideas become reality</p>
              </div>
            </div>
          </div>

          {/* Enhanced Highlights Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="glass-vibrant p-6 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-r ${highlight.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-3">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                    
                    {/* Progress indicator */}
                    <div className="mt-4 w-full bg-muted/30 rounded-full h-1 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${highlight.color} rounded-full transition-all duration-1000`}
                        style={{ width: '85%' }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="mt-20">
          <div className="glass-dark p-8 rounded-3xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '8.60', label: 'CGPA', icon: '🎓', color: 'text-primary' },
                { number: '2+', label: 'Years Learning', icon: '📚', color: 'text-secondary' },
                { number: '10+', label: 'Projects Built', icon: '🚀', color: 'text-accent' },
                { number: '100%', label: 'Dedication', icon: '💜', color: 'text-pink-400' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} font-space-grotesk`}>
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground mt-2 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;