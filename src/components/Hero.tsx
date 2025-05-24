
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Build the{' '}
            <span className="gradient-text">Future</span>
            <br />
            Today
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of web development with our cutting-edge platform. 
            Transform your ideas into reality with unprecedented speed and precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary group">
              Get Started Free
              <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="glass px-8 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold">
              Watch Demo
            </button>
          </div>
          
          <div className="mt-12 text-sm text-gray-400">
            <p>Trusted by 50,000+ developers worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
