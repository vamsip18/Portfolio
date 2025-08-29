import { useState } from 'react';
import { ExternalLink, Github, Calendar, Users, TrendingUp, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import travelAppImage from '@/assets/travel-app1.png';
import tourismWebImage from '@/assets/tourism-web.png';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Smart Travel Companion',
      description: 'A comprehensive travel planning application built with React.js and APIs, featuring secure authentication and intelligent recommendations. Increased user engagement by 30% through intuitive design and personalized features.',
      duration: '12/2024 – 05/2025',
      status: 'Completed',
      image: travelAppImage,
      technologies: ['React.js', 'APIs', 'Authentication', 'JavaScript', 'CSS3'],
      features: [
        'Secure user authentication system',
        'Real-time travel recommendations',
        'Interactive trip planning interface',
        'API integration for live data',
        'Responsive design for all devices'
      ],
      metrics: [
        { label: 'Engagement Increase', value: '30%', icon: TrendingUp },
        { label: 'Development Period', value: '5 Months', icon: Calendar },
        { label: 'Technologies Used', value: '5+', icon: Users }
      ],
      github: 'https://github.com/vamsip18/smart-travel-companion',
      live: 'https://smart-travel-companion.vercel.app/',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      bgGradient: 'from-purple-500/20 via-pink-500/20 to-red-500/20'
    },
    {
      title: 'Travel and Tourism Website',
      description: 'Full-stack CRUD application with MongoDB integration, featuring responsive design and secure user management. Successfully handles 100+ user log-ins with reliable performance and data management.',
      duration: '06/2024 – 11/2024',
      status: 'Completed',
      image: tourismWebImage,
      technologies: ['MERN Stack', 'MongoDB', 'Express.js', 'React.js', 'Node.js'],
      features: [
        'Complete CRUD operations',
        'MongoDB database integration',
        'User authentication & authorization',
        'Responsive design across devices',
        'RESTful API implementation'
      ],
      metrics: [
        { label: 'User Capacity', value: '100+', icon: Users },
        { label: 'Development Time', value: '5 Months', icon: Calendar },
        { label: 'Reliability', value: '100%', icon: TrendingUp }
      ],
      github: 'https://github.com/vamsip18/Travel_web',
      live: 'https://travel-93wr.onrender.com/',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgGradient: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 morph-shape opacity-5" />
        <div className="absolute bottom-20 right-10 w-32 h-32 morph-shape opacity-5" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Enhanced Project Card */}
              <div className="glass-vibrant rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-60`} />
                  <div className="absolute inset-0 bg-black/20" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 rounded-full text-xs font-bold glass-vibrant ${
                      project.status === 'Completed' 
                        ? 'text-green-400 border border-green-400/30' 
                        : 'text-blue-400 border border-blue-400/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Floating Tech Icons */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <div key={techIndex} className="glass px-3 py-1 rounded-full text-xs font-medium text-foreground">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced gradient divider */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="p-8">
                  {/* Project Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold gradient-text-secondary mb-3">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="glass px-3 py-1 rounded-full text-xs font-medium text-foreground hover:bg-primary/20 transition-colors cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Features */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    hoveredProject === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-border/50 pt-6 mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-secondary" />
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Enhanced Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.metrics.map((metric, metricIndex) => {
                        const Icon = metric.icon;
                        return (
                          <div key={metricIndex} className="text-center group/metric">
                            <div className={`flex items-center justify-center w-10 h-10 bg-gradient-to-r ${project.gradient} rounded-xl mb-2 mx-auto group-hover/metric:scale-110 transition-transform`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-lg font-bold gradient-text">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group/btn"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                      <span>Source Code</span>
                    </Button>
                    {project.live !== '#' && (
                      <Button
                        size="sm"
                        className={`flex items-center space-x-2 bg-gradient-to-r ${project.gradient} hover:opacity-90 group/btn`}
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        <span>Live Demo</span>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced More Projects CTA */}
        <div className="text-center mt-16">
          <div className="glass-dark p-8 rounded-3xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 inline-block">
            <h3 className="text-xl font-bold gradient-text mb-4">Explore More Projects</h3>
            <p className="text-muted-foreground mb-6">Check out my complete portfolio on GitHub</p>
            <Button
              variant="outline"
              size="lg"
              className="hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
              onClick={() => window.open('https://github.com/vamsip18', '_blank')}
            >
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;