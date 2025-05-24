
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Developer",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face",
      quote: "This platform has revolutionized our development workflow. The speed and efficiency gains are incredible."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "InnovateLab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "Outstanding performance and reliability. Our team productivity has increased by 300% since we started using it."
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "StartupXYZ",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The user experience is exceptional. It's intuitive, powerful, and has everything we need in one place."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Users Say</span>
          </h2>
          <p className="text-xl text-gray-300">
            Don't just take our word for it - hear from the developers who use our platform every day
          </p>
        </div>
        
        <div className="relative">
          <div className="glass-card p-8 md:p-12 text-center min-h-[300px] flex flex-col justify-center animate-scale-in">
            <div className="mb-8">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-white/20"
              />
              
              <blockquote className="text-xl md:text-2xl text-gray-100 mb-6 italic leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div>
                <div className="font-semibold text-white text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-300">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
