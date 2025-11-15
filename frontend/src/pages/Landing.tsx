import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleStart = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate("/study");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-accent flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className={`absolute inset-0 opacity-10 transition-opacity duration-600 ${isTransitioning ? 'opacity-0' : ''}`}>
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-foreground rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-foreground rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Title Rectangle - This transforms into header */}
      <div className={`fixed ${isTransitioning ? 'top-0 left-0 right-0 h-16 rounded-none' : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl'} bg-gradient-to-r from-primary via-primary/95 to-accent transition-all duration-600 ease-in-out z-50 flex items-center justify-center shadow-lg overflow-hidden`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary-foreground rounded-full blur-2xl" />
          <div className="absolute top-0 right-1/4 w-32 h-32 bg-primary-foreground rounded-full blur-2xl" />
        </div>
        <div className={`relative flex items-center gap-3 transition-all duration-600 ${isTransitioning ? 'scale-75' : ''}`}>
          <h1 className={`font-bold text-primary-foreground tracking-wide transition-all duration-600 ${isTransitioning ? 'text-3xl' : 'text-7xl md:text-9xl'}`}>
            CustomStudy
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className={`relative z-10 text-center px-4 animate-fade-in transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : ''}`}>
        <div className="mb-8 h-32">
          {/* Spacer for title */}
        </div>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto font-light">
          Customize your learning experience with precision and control
        </p>

        <Button
          size="lg"
          onClick={handleStart}
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group"
        >
          Start
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default Landing;
