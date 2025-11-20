import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink, Code2, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Documents = () => {
  const documents = [
    {
      title: "Implementing Language Change in SharePoint Online",
      description: "Step-by-step guide for enabling multilingual support in SharePoint Online to improve accessibility across diverse teams.",
      category: "SharePoint",
      tags: ["SharePoint", "Multilingual", "User Interface", "Microsoft 365"],
      features: [
        "Multilingual User Interface (MUI) setup",
        "Language settings configuration",
        "User profile customization",
        "Testing procedures & troubleshooting"
      ],
      icon: Globe,
      color: "from-primary to-secondary"
    },
    {
      title: "Automating IT Resource Notifications",
      description: "Comprehensive guide for setting up automated SMS and SharePoint notifications using Power Automate.",
      category: "Power Automate",
      tags: ["Power Automate", "SMS", "SharePoint", "Automation"],
      features: [
        "Power Automate flow configuration",
        "SMS alert integration with Twilio",
        "SharePoint list setup",
        "Real-time notification system"
      ],
      icon: Code2,
      color: "from-secondary to-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <Badge variant="outline" className="px-6 py-2 text-sm border-primary/30 bg-primary/5">
                <FileText className="w-4 h-4 mr-2 inline" />
                Technical Documentation Portfolio
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black">
              <span className="gradient-text">Tech Documentation</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Professional technical guides that transform complex processes into clear, actionable steps. 
              Making technology accessible, one document at a time.
            </p>
          </div>
        </div>
      </section>
      
      {/* Documents Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8">
            {documents.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <Card 
                  key={index} 
                  className="overflow-hidden hover-glow border-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${doc.color}`}></div>
                  
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${doc.color} flex items-center justify-center flex-shrink-0 animate-float`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                          <div>
                            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                              {doc.category}
                            </Badge>
                            <CardTitle className="text-2xl md:text-3xl mb-2">{doc.title}</CardTitle>
                          </div>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {doc.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {doc.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {doc.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="bg-muted">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-3 pt-4">
                      <Button className="bg-gradient-primary hover:opacity-90 shadow-pink">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-br from-muted/50 to-background border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Want to see more?</CardTitle>
                <CardDescription className="text-base">
                  These documents showcase my ability to break down complex technical processes 
                  into user-friendly guides. Each document includes clear steps, troubleshooting tips, 
                  and visual aids to ensure success.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  More documentation samples available upon request!
                </p>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10"
                >
                  Contact Me
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            Made with <span className="text-primary">💗</span> by Katarina | Technical Writer & Tech Enthusiast
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Documents;