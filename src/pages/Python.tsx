import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Play, Terminal } from "lucide-react";

const Python = () => {
  const hangmanCode = `import random

# List of words to choose from
words = ["python", "computer", "program", "science", "keyboard", "hangman", "jumper", "internet"]

# Choose a random word
word = random.choice(words)
guessed = ["_"] * len(word)
attempts = 6
used_letters = []

# Hangman art
hangman_stages = [
    """
     +---+
     |   |
     O   |
    /|\\\\  |
    / \\\\  |
        ===""",
    """
     +---+
     |   |
     O   |
    /|\\\\  |
    /    |
        ===""",
    """
     +---+
     |   |
     O   |
    /|\\\\  |
         |
        ===""",
    """
     +---+
     |   |
     O   |
    /|   |
         |
        ===""",
    """
     +---+
     |   |
     O   |
     |   |
         |
        ===""",
    """
     +---+
     |   |
     O   |
         |
         |
        ===""",
    """
     +---+
     |   |
         |
         |
         |
        ==="""
]

print("🎮 Welcome to Hangman! Guess the word.")

while attempts > 0:
    print(hangman_stages[attempts])
    print("\\nWord:", " ".join(guessed))
    print("Used letters:", ", ".join(used_letters))

    guess = input("\\nEnter a letter: ").lower()

    if not guess.isalpha() or len(guess) != 1:
        print("⚠️ Please enter a single letter.\\n")
        continue

    if guess in used_letters:
        print("⚠️ You already guessed that letter.\\n")
        continue

    used_letters.append(guess)

    if guess in word:
        print("✔️ Correct!\\n")
        for i, letter in enumerate(word):
            if letter == guess:
                guessed[i] = guess
    else:
        print("❌ Wrong guess!")
        attempts -= 1

    if "_" not in guessed:
        print("\\n🎉 You WIN! The word was:", word)
        break

if attempts == 0:
    print(hangman_stages[0])
    print("\\n💀 Game Over! The word was:", word)`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Python Showcase</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">
              Python Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my Python coding projects and experiments
            </p>
          </div>

          {/* Hangman Project Card */}
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-pink">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-6 h-6 text-primary" />
                    <CardTitle className="text-3xl">Hangman Game</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    A classic word-guessing game built with Python featuring ASCII art and interactive gameplay
                  </CardDescription>
                </div>
                <Play className="w-8 h-8 text-primary animate-pulse" />
              </div>
              
              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Game Development</Badge>
                <Badge variant="secondary">CLI</Badge>
                <Badge variant="secondary">Random Library</Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Features */}
              <div className="grid md:grid-cols-2 gap-4 py-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✨ Random word selection</li>
                    <li>🎨 ASCII art hangman stages</li>
                    <li>⌨️ Input validation</li>
                    <li>📝 Letter tracking system</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Learning Outcomes:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>💡 String manipulation</li>
                    <li>🔄 Loop control structures</li>
                    <li>📊 List operations</li>
                    <li>🎯 User input handling</li>
                  </ul>
                </div>
              </div>

              {/* Code Display */}
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  Source Code:
                </h4>
                <div className="relative">
                  <pre className="bg-muted/50 border border-border rounded-lg p-4 overflow-x-auto text-sm font-mono">
                    <code className="text-foreground">{hangmanCode}</code>
                  </pre>
                  <div className="absolute top-2 right-2">
                    <Badge variant="outline" className="bg-background/80">
                      hangman.py
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center space-y-4 pt-8">
            <h3 className="text-2xl font-bold gradient-text">
              More Projects Coming Soon!
            </h3>
            <p className="text-muted-foreground">
              Stay tuned for more Python projects and coding adventures 🚀
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Python;
