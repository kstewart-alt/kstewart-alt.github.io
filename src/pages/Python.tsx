import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Play, Terminal } from "lucide-react";

const Python = () => {
  const snakeGameCode = `# Snake Game
import turtle
import time
import random

delay = 0.2

#score
score = 0
high_score = 0

# Set up the screen
wn = turtle.Screen()
wn.title("Snake Game by Kay Nyamusevya")
wn.bgcolor("black")
wn.setup(width=700, height=700)
wn.tracer(0)  # Turns off the screen updates

# Snake head
head = turtle.Turtle()
head.speed(0)
head.shape("circle")
head.color("green")
head.penup()
head.goto(0, 0)
head.direction = "stop"

#snake food
food = turtle.Turtle()
food.speed(0)
food.shape("circle")
food.color("red")
food.penup()
food.goto(0,100)
head.direction = "stop"

segments = []

#pen 
pen = turtle.Turtle()
pen.speed(0)
pen.shape("square")
pen.color("white")
pen.penup()
pen.hideturtle()
pen.goto(0, 260)
pen.write("Score: 0  High Score: 0", align="center", font=("Courier", 24, "normal"))



# Functions to control the snake
def move():
    if head.direction == "up":
        y = head.ycor()
        head.sety(y + 20)
    if head.direction == "down":
        y = head.ycor()
        head.sety(y - 20)
    if head.direction == "left":
        x = head.xcor()
        head.setx(x - 20)
    if head.direction == "right":
        x = head.xcor()
        head.setx(x + 20)

def go_up():
    head.direction = "up"

def go_down():
    head.direction = "down"

def go_left():
    head.direction = "left"

def go_right():
    head.direction = "right"

# Keyboard bindings
wn.listen()
wn.onkeypress(go_up, "Up")
wn.onkeypress(go_down, "Down")
wn.onkeypress(go_left, "Left")
wn.onkeypress(go_right, "Right")

# Main game loop
while True:
    wn.update()

    #check for a collision with the border
    if head.xcor()>290 or head.xcor()<-290 or head.ycor()>290 or head.ycor()<-290:
        time.sleep(1)
        head.goto(0,0)
        head.direction = "stop"

        # Hide the segments
        for segment in segments:
            segment.goto(1000, 1000)

       
        
        # Clear the segments list
        segments.clear()

        # Reset the score
        score = 0
        pen.clear()
        pen.write("Score: {}  High Score: {}".format(score, high_score), align="center", font=("Courier", 24, "normal"))

#check for a collision with the food
    if head.distance(food) < 20:
        # Move the food to a random spot
        x = random.randint(-290, 290)
        y = random.randint(-290, 290)
        food.goto(x, y)

        # Add a segment
        new_segment = turtle.Turtle()
        new_segment.speed(0)
        new_segment.shape("square")
        new_segment.color("grey")
        new_segment.penup()
        segments.append(new_segment)

#shorten the delay
        delay -= 0.001 
        
        #increase the score
        score += 10

        if score > high_score:
            high_score = score            
        pen.clear()
        pen.write("Score: {}  High Score: {}".format(score, high_score), align="center", font=("Courier", 24, "normal"))

    # Move the end segments first in reverse order
    for index in range(len(segments)-1, 0, -1):
        x = segments[index-1].xcor()
        y = segments[index-1].ycor()
        segments[index].goto(x, y)

    # Move segment 0 to where the head is
    if len(segments) > 0:
        x = head.xcor()
        y = head.ycor()
        segments[0].goto(x, y)

    move()

    #check for head collision with the body segments
    for segment in segments:
        if segment.distance(head) < 20:
            time.sleep(1)
            head.goto(0,0)
            head.direction = "stop"

            # Hide the segments
            for segment in segments:
                segment.goto(1000, 1000)

            # Clear the segments list
            segments.clear()

    time.sleep(delay)
wn.mainloop()`;

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
              Snake Game
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A classic arcade game built with Python Turtle graphics
            </p>
          </div>

          {/* Snake Game Project Card */}
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-pink">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-6 h-6 text-primary" />
                    <CardTitle className="text-3xl">Snake Game</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    A classic snake game built with Python Turtle featuring score tracking, collision detection, and growing snake mechanics
                  </CardDescription>
                </div>
                <Play className="w-8 h-8 text-primary animate-pulse" />
              </div>
              
              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Turtle Graphics</Badge>
                <Badge variant="secondary">Game Development</Badge>
                <Badge variant="secondary">Arcade Game</Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Features */}
              <div className="grid md:grid-cols-2 gap-4 py-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>🐍 Growing snake with body segments</li>
                    <li>🍎 Random food spawning</li>
                    <li>📊 Score & high score tracking</li>
                    <li>💥 Border & self-collision detection</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Learning Outcomes:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>🎨 Turtle graphics library</li>
                    <li>⌨️ Keyboard event handling</li>
                    <li>🔄 Game loop design</li>
                    <li>📐 Coordinate manipulation</li>
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
                  <pre className="bg-muted/50 border border-border rounded-lg p-4 overflow-x-auto text-sm font-mono max-h-[500px] overflow-y-auto">
                    <code className="text-foreground">{snakeGameCode}</code>
                  </pre>
                  <div className="absolute top-2 right-2">
                    <Badge variant="outline" className="bg-background/80">
                      snake_game.py
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
