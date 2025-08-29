import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: 'GMR Institute of Technology',
      degree: 'B.Tech. Computer Science Engineering',
      duration: '2022 – 2026',
      grade: 'CGPA: 8.60 (up to 6th Sem)',
      status: 'Current',
      description: 'Pursuing comprehensive computer science education with focus on software development, data structures, algorithms, and modern web technologies.',
      highlights: ['MERN Stack Development', 'Data Structures & Algorithms', 'Software Engineering', 'Database Management']
    },
    {
      institution: 'Sri Viswa Junior College',
      degree: 'Intermediate (MPC)',
      duration: '2020 – 2022',
      grade: '93.3%',
      status: 'Completed',
      description: 'Specialized in Mathematics, Physics, and Chemistry with excellent academic performance.',
      highlights: ['Mathematics', 'Physics', 'Chemistry', 'Academic Excellence']
    },
    {
      institution: 'Chalapathi Public School',
      degree: 'Secondary School Certificate (SSC)',
      duration: '2019 – 2020',
      grade: '97.3%',
      status: 'Completed',
      description: 'Outstanding academic performance with comprehensive education in core subjects.',
      highlights: ['Academic Excellence', 'Leadership', 'All-round Development', 'Strong Foundation']
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk gradient-text mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey and continuous learning path
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:items-stretch`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-primary rounded-full transform -translate-x-1/2 border-4 border-background shadow-glow-primary z-10"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div 
                    className="glass-dark p-6 rounded-2xl hover-glow transition-all duration-500 group"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                          <GraduationCap className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'Current' 
                              ? 'bg-primary/20 text-primary' 
                              : 'bg-secondary/20 text-secondary'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Institution */}
                    <h3 className="text-xl font-bold gradient-text-secondary mb-2">
                      {edu.institution}
                    </h3>

                    {/* Degree */}
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {edu.degree}
                    </h4>

                    {/* Duration and Grade */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span className="font-semibold text-primary">{edu.grade}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="glass px-3 py-1 rounded-full text-xs font-medium gradient-text"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for larger screens */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement summary */}
        <div className="mt-16 text-center">
          <div className="glass-dark p-8 rounded-2xl hover-glow inline-block">
            <h3 className="text-2xl font-bold gradient-text mb-4">Academic Excellence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text-secondary">8.60</div>
                <div className="text-muted-foreground">Current CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text-secondary">93.3%</div>
                <div className="text-muted-foreground">Intermediate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text-secondary">97.3%</div>
                <div className="text-muted-foreground">SSC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;