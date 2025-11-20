const ScrollingAbout = () => {
  return (
    <section className="relative w-full h-[300px] overflow-hidden rounded-2xl bg-gradient-to-br from-primary-dark via-secondary to-primary shadow-glow">
      <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
      
      <div className="scrolling-text absolute w-full text-center">
        <p className="text-white text-lg md:text-xl leading-loose font-medium mb-4">✨ Hey there, Tech World! I'm Katarina 🚀</p>
        <p className="text-white/90 text-lg md:text-xl leading-loose mb-4">If you're looking for someone who gets WAY too excited about technology… you found her 😎💡</p>
        <p className="text-white/90 text-lg md:text-xl leading-loose mb-4">I'm a Technical Analyst Intern who loves researching new tech 🔍</p>
        <p className="text-white/90 text-lg md:text-xl leading-loose mb-4">Testing cool apps & tools is literally my happy place 🛠</p>
        <p className="text-white/90 text-lg md:text-xl leading-loose mb-4">Helping teammates work smarter — not harder — is my superpower 🤝</p>
        <p className="text-white text-lg md:text-xl leading-loose font-semibold mb-4">I LIVE for the moment when someone goes from "Huh? 🤔" to "OMG I get it!! 🎉"</p>
        <p className="text-white/90 text-lg md:text-xl leading-loose mb-4">I've always been a natural helper — the "show me your screen, I'll fix it" friend 💗</p>
        <p className="text-white text-lg md:text-xl leading-loose font-semibold mb-4">And now… I'm on a mission to become a Technical Writer 🌈</p>
        <p className="text-white/90 text-lg md:text-xl leading-loose mb-4">Technology shouldn't be intimidating — it should be fun!</p>
        <p className="text-white/90 text-lg md:text-xl leading-loose mb-4">If tech feels confusing, I'm the person who makes it make sense 😉</p>
        <p className="text-primary-glow text-xl md:text-2xl leading-loose font-bold">Let's learn something cool together 💫</p>
      </div>
      
      <style>{`
        .scrolling-text {
          bottom: -100%;
          animation: scroll-up 50s linear infinite;
        }
        
        @keyframes scroll-up {
          from { 
            bottom: -100%; 
          }
          to { 
            bottom: 100%; 
          }
        }
      `}</style>
    </section>
  );
};

export default ScrollingAbout;