import { useState } from 'react';
import { Mail, Linkedin, Github, Code2, Trophy, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:peelavamsi8096@gmail.com',
      icon: Mail,
      color: 'from-red-400 to-red-600',
      handle: 'peelavamsi8096@gmail.com'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vamsi-peela',
      icon: Linkedin,
      color: 'from-blue-400 to-blue-600',
      handle: '/in/vamsi-peela'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/vamsip18',
      icon: Github,
      color: 'from-gray-400 to-gray-600',
      handle: '/vamsip18'
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/vamsipeela',
      icon: Code2,
      color: 'from-orange-400 to-orange-600',
      handle: '/vamsipeela'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/vamsi-63',
      icon: Trophy,
      color: 'from-yellow-400 to-yellow-600',
      handle: '/vamsi-63'
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/peelavamsi147',
      icon: Trophy,
      color: 'from-green-400 to-green-600',
      handle: '/peelavamsi147'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:peelavamsi8096@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Message Prepared!",
      description: "Your email client will open with the message ready to send.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk gradient-text mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-dark p-8 rounded-2xl hover-glow">
            <h3 className="text-2xl font-bold gradient-text-secondary mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="glass border-border focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="glass border-border focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="glass border-border focus:border-primary"
                  placeholder="What would you like to discuss?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="glass border-border focus:border-primary resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-[1.02]"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="glass-dark p-8 rounded-2xl hover-glow">
              <h3 className="text-2xl font-bold gradient-text-secondary mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground">peelavamsi8096@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-secondary rounded-lg">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Availability</p>
                    <p className="text-foreground">Open to opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-dark p-8 rounded-2xl hover-glow">
              <h3 className="text-2xl font-bold gradient-text-secondary mb-6">
                Connect & Follow
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 glass rounded-xl hover-glow transition-all duration-300 hover:scale-105 group"
                    >
                      <div className={`p-2 bg-gradient-to-r ${link.color} rounded-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{link.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{link.handle}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass-dark p-8 rounded-2xl hover-glow">
              <h3 className="text-2xl font-bold gradient-text-secondary mb-6">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">24/7</div>
                  <div className="text-sm text-muted-foreground">Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">Fast</div>
                  <div className="text-sm text-muted-foreground">Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">Global</div>
                  <div className="text-sm text-muted-foreground">Remote</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">Open</div>
                  <div className="text-sm text-muted-foreground">Source</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;