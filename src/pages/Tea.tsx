import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, MessageSquare, FileText, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Tea = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-secondary/5 via-background to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <Badge variant="outline" className="px-6 py-2 text-sm border-secondary/30 bg-secondary/5">
                <Users className="w-4 h-4 mr-2 inline" />
                Collaboration Hub
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black">
              <span className="gradient-text">Tea Documentarian</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join our collaborative space where we spill the tea on tech documentation! 
              Share insights, ask questions, and grow together.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {/* Main CTA Card */}
            <Card className="overflow-hidden hover-glow border-2 animate-fade-in">
              <div className="h-2 bg-gradient-to-r from-secondary to-accent"></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center animate-float">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl mb-2">High Tea Channel</CardTitle>
                    <CardDescription className="text-base">
                      Microsoft Teams Collaboration Space
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Connect with fellow tech enthusiasts and documentation professionals in our dedicated Teams channel. 
                  Share your experiences, get feedback, and collaborate on making tech more accessible!
                </p>
                
                <div className="bg-muted/50 rounded-xl p-6 space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    What You'll Find:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Documentation best practices and templates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Weekly tech tips and tricks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Peer reviews and constructive feedback</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Q&A sessions and problem-solving</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Resources for aspiring technical writers</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  <a 
                    href="https://teams.microsoft.com/l/channel/19%3A1590321d2bf6473d9313b174cc54815f%40thread.tacv2/High%20Tea?groupId=ed4996ba-37b3-4fbc-9fa3-9eec3dc2562f&tenantId=88227c99-d157-4dbe-8e33-d8b3fcc29577"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="lg" 
                      className="w-full md:w-auto bg-gradient-to-r from-secondary to-accent hover:opacity-90 shadow-pink text-lg px-8"
                    >
                      Join High Tea Channel
                      <ExternalLink className="ml-2 w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            {/* Additional Info Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-glow animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Documentation Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access templates, style guides, and examples to level up your technical writing skills.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover-glow animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Community Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get help from experienced writers and help others on their documentation journey.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Welcome Message */}
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">New to Technical Writing?</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Don't worry! Our community welcomes everyone from beginners to experts. 
                    Whether you're just starting out or looking to refine your skills, 
                    you'll find supportive teammates ready to help you grow.
                  </p>
                  <p className="text-primary font-semibold">
                    Let's make tech documentation fun together! 💫
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border mt-16">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            Made with <span className="text-primary">💗</span> by Katarina | Let's Learn Together
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Tea;