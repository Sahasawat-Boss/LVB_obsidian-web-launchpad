import { ChevronDown, ChevronUp, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <ChevronUp className="w-8 h-8 text-blue-400" />,
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized infrastructure that scales with your needs."
    },
    {
      icon: <ChevronDown className="w-8 h-8 text-purple-400" />,
      title: "Secure by Design",
      description: "Built with security at its core, featuring end-to-end encryption and advanced threat protection."
    },
    {
      icon: <Facebook className="w-8 h-8 text-pink-400" />,
      title: "Social Integration",
      description: "Seamlessly connect with all major social platforms and boost your online presence."
    },
    {
      icon: <Instagram className="w-8 h-8 text-green-400" />,
      title: "Visual Stories",
      description: "Create stunning visual content that engages your audience and drives conversions."
    },
    {
      icon: <Linkedin className="w-8 h-8 text-blue-400" />,
      title: "Professional Network",
      description: "Build meaningful business connections and expand your professional reach."
    },
    {
      icon: <Youtube className="w-8 h-8 text-red-400" />,
      title: "Video Excellence",
      description: "Create and share high-quality video content with advanced editing tools."
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-6">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the tools and capabilities that make our platform the perfect choice for modern development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
