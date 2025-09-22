import Link from "next/link";

// components/Hero.js
export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background image with animation */}
      <img
        src="/assets/banner.png"
        title="Techwithchhizzy Spline Scene"
        className="absolute inset-0 hero-image w-full h-full object-cover"
        alt="Techwithchhizzy"
      />

      {/* Container for floating elements to prevent overflow */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated floating elements */}
        <div className="absolute top-1/4 left-[10%] animate-float">
          <div className="w-8 h-8 rounded-full bg-blue-500 opacity-30"></div>
        </div>
        <div
          className="absolute top-1/3 right-[10%] animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-6 h-6 rounded-full bg-purple-500 opacity-40"></div>
        </div>
        <div
          className="absolute bottom-1/4 left-[15%] animate-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="w-10 h-10 rounded-full bg-cyan-400 opacity-20"></div>
        </div>
        <div
          className="absolute top-1/2 right-[15%] animate-float"
          style={{ animationDelay: "3s" }}
        >
          <div className="w-12 h-12 rounded-full bg-blue-400 opacity-25"></div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05060f] to-transparent z-10" />

      {/* Content with animations */}
      <div className="absolute bottom-20 left-0 right-0 z-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#D8ECF8] animate-pulse-slow">
          Chizoba Uchegbu
        </h1>
        <p
          className="text-xl md:text-2xl text-[#D8ECF8] max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          Building immersive digital experiences with cutting-edge technology
        </p>

        {/* Animated CTA button */}
        <div
          className="mt-10 animate-slide-up"
          style={{ animationDelay: "1s" }}
        >
          <Link href="#projects">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
              View My Work
            </button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#D8ECF8] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#D8ECF8] rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 z-5 opacity-10 grid-overlay"></div>
    </section>
  );
}
