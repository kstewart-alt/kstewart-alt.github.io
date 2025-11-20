import Navigation from "@/components/Navigation";
import ScrollingAbout from "@/components/ScrollingAbout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <div className="flex items-center justify-center gap-2 bg-primary/10 px-6 py-3 rounded-full border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary animate-glow" />
                <span className="text-sm font-semibold text-primary">Making Tech Fun & Accessible</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              <span className="gradient-text">Katarina's</span>
              <br />
              <span className="text-foreground">Tech Show</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Where technology meets creativity! From technical writing to testing cool apps, 
              I'm here to make tech less scary and more exciting.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link to="/documents">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 shadow-pink hover-glow text-lg px-8"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Link to="/tea">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 border-primary/30 hover:bg-primary/10"
                >
                  <Code className="mr-2 w-5 h-5" />
                  Join Tea Docs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Scrolling Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Meet Katarina</span>
            </h2>
            <p className="text-lg text-muted-foreground">Your tech enthusiast & helper</p>
          </div>
          
          <ScrollingAbout />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border hover-glow group">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:animate-float">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Technical Writing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating clear, user-friendly documentation that makes complex tech simple to understand.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border hover-glow group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6 group-hover:animate-float">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Tech Research</h3>
              <p className="text-muted-foreground leading-relaxed">
                Exploring the latest apps, tools, and technologies to help teams work smarter.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border hover-glow group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6 group-hover:animate-float">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Knowledge Sharing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Turning "I don't get it" moments into "Aha!" victories through patient teaching.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-primary rounded-3xl p-12 text-center shadow-glow">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Make Tech Fun?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Check out my technical documentation and see how I transform complex processes into easy-to-follow guides.
            </p>
            <Link to="/documents">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 shadow-lg"
              >
                Explore My Docs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            Made with <span className="text-primary">💗</span> by Katarina | Tech Enthusiast & Helper
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;