import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AttributeSelector from "@/components/AttributeSelector";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const Study = () => {
  const navigate = useNavigate();
  const [attributes, setAttributes] = useState([50, 75, 25, 60, 90]);
  const names = [
    "Product A sold in the past",
    "Product B sold in the past",
    "A recomendations",
    "A product",
    "B product",
    "C product",
    "D product",
    "Hit rate",
    "Iterations",
    "Contracts",
    "Initial month",
    "Time opened",
    "Competitor Z",
    "Comptetitor X",
    "Comptetitor Y"
  ]
  const handleSubmit = () => {
    // Aquí se enviarán los datos al backend
    console.log("Atributos enviados:", attributes);
    navigate("/results");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-accent/20 to-background">
      {/* Header with colored bar and decorative elements */}
      <header className="bg-gradient-to-r from-primary via-primary/95 to-accent h-16 flex items-center justify-center shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary-foreground rounded-full blur-2xl" />
          <div className="absolute top-0 right-1/4 w-32 h-32 bg-primary-foreground rounded-full blur-2xl" />
        </div>
        <div className="relative flex items-center gap-3">
          <Sparkles className="text-primary-foreground" size={28} />
          <h1 className="text-3xl font-bold text-primary-foreground tracking-wide">
            Study Form
          </h1>
          <Sparkles className="text-primary-foreground" size={28} />
        </div>
      </header>

      {/* Main content area */}
      <main className="container mx-auto px-4 py-8 max-w-5xl relative">
        {/* Decorative floating elements with more color */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/3 left-1/4 w-36 h-36 bg-accent/20 rounded-full blur-2xl animate-pulse delay-500" />
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-primary/15 rounded-full blur-2xl animate-pulse delay-300" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num, idx) => (
            <div
              key={num}
              className="animate-fade-in"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <AttributeSelector
                attributeNumber={num}
                attributeName={names[num - 1]}
                defaultValue={attributes[idx]}
                onChange={(value) => {
                  const newAttributes = [...attributes];
                  newAttributes[idx] = value;
                  setAttributes(newAttributes);
                }}
              />
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="mt-10 flex justify-center animate-fade-in" style={{ animationDelay: "500ms" }}>
          <Button 
            onClick={handleSubmit}
            size="lg"
            className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold px-8 py-6 text-lg shadow-xl transition-all duration-300 hover:scale-105"
          >
            Enviar Formulario
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Bottom decorative gradient */}
        <div className="mt-12 h-24 bg-gradient-to-t from-primary/5 to-transparent rounded-t-3xl" />
      </main>
    </div>
  );
};

export default Study;
