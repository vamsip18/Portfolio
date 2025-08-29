import { useState } from 'react';
import skillsBg from '@/assets/skills-bg.jpg';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      emoji: '💻',
      skills: [
        { name: 'JavaScript (ES6)', level: 90, color: 'from-yellow-400 via-yellow-500 to-yellow-600' },
        { name: 'Java', level: 85, color: 'from-red-400 via-red-500 to-red-600' },
        { name: 'Python', level: 80, color: 'from-blue-400 via-blue-500 to-blue-600' },
        { name: 'HTML5', level: 95, color: 'from-orange-400 via-orange-500 to-orange-600' },
        { name: 'CSS3', level: 90, color: 'from-blue-400 via-blue-500 to-cyan-500' }
      ]
    },
    {
      title: 'Frontend Development',
      emoji: '🎨',
      skills: [
        { name: 'React.js', level: 90, color: 'from-cyan-400 via-cyan-500 to-blue-500' }
      ]
    },
    {
      title: 'Backend Development',
      emoji: '⚙️',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-400 via-green-500 to-green-600' },
        { name: 'Express.js', level: 85, color: 'from-gray-400 via-gray-500 to-gray-600' },
        { name: 'RESTful APIs', level: 90, color: 'from-purple-400 via-purple-500 to-purple-600' }
      ]
    },
    {
      title: 'Database',
      emoji: '🗄️',
      skills: [
        { name: 'MongoDB', level: 85, color: 'from-green-400 via-green-500 to-emerald-600' }
      ]
    },
    {
      title: 'Tools & Others',
      emoji: '🛠️',
      skills: [
        { name: 'Git', level: 85, color: 'from-orange-400 via-orange-500 to-red-500' },
        { name: 'GitHub', level: 90, color: 'from-gray-400 via-gray-500 to-gray-700' },
        { name: 'VS Code', level: 95, color: 'from-blue-400 via-blue-500 to-indigo-600' }
      ]
    },
    {
      title: 'Core Competencies',
      emoji: '🧠',
      skills: [
        { name: 'Problem Solving', level: 90, color: 'from-indigo-400 via-indigo-500 to-purple-600' },
        { name: 'Team Collaboration', level: 85, color: 'from-pink-400 via-pink-500 to-rose-600' },
        { name: 'Communication', level: 85, color: 'from-teal-400 via-teal-500 to-cyan-600' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${skillsBg})` }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 morph-shape opacity-5" />
        <div className="absolute bottom-20 right-10 w-32 h-32 morph-shape opacity-5" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 morph-shape opacity-5" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I wield to craft digital experiences
          </p>
          <div className="w-20 h-1 bg-gradient-secondary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-vibrant p-8 rounded-3xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.emoji}
                </div>
                <h3 className="text-xl font-bold gradient-text-secondary">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group/skill"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Enhanced Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out relative`}
                          style={{
                            width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 0.1}s`
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse" />
                        </div>
                      </div>
                      
                      {/* Glow effect */}
                      {hoveredSkill === skill.name && (
                        <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full blur-sm opacity-30 -z-10`} />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Skill Category Stats */}
              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Skills: {category.skills.length}</span>
                  <span>Avg: {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Floating Tech Stack */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text-secondary mb-4">My Tech Universe</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
              { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600' },
              { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-emerald-600' },
              { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-orange-500' },
              { name: 'Python', icon: '🐍', color: 'from-blue-400 to-indigo-600' },
              { name: 'Java', icon: '☕', color: 'from-red-400 to-orange-600' },
              { name: 'Git', icon: '📝', color: 'from-orange-400 to-red-500' },
              { name: 'VS Code', icon: '💙', color: 'from-blue-500 to-indigo-600' }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="glass-vibrant px-6 py-4 rounded-2xl text-sm font-medium hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-110 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl group-hover:scale-125 transition-transform">
                    {tech.icon}
                  </span>
                  <span className={`bg-gradient-to-r ${tech.color} bg-clip-text text-transparent font-bold`}>
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Summary */}
        <div className="mt-16 glass-dark p-8 rounded-3xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold gradient-text font-space-grotesk group-hover:scale-110 transition-transform">
                20+
              </div>
              <div className="text-muted-foreground mt-2">Technologies</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold gradient-text-secondary font-space-grotesk group-hover:scale-110 transition-transform">
                5+
              </div>
              <div className="text-muted-foreground mt-2">Frameworks</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold gradient-text font-space-grotesk group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-muted-foreground mt-2">Passion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;