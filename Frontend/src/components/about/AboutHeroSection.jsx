import React from "react";
import { Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import about from "../../assets/about/about.jpg";

export default function AboutHeroSection() {
  return (
    <div className="mb-16 lg:mb-24 mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-red-600">Architectural Excellence Since 1993</span>
          </div>

          <h1 className="text-1xl sm:text-2xl lg:text-3xl xl:text-4xl font-black leading-[1.1] messiri">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-red-600 to-orange-600 animate-gradient">
              A Legacy of Architectural Excellence
            </span>
          </h1>

          <div className="flex items-center gap-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full animate-pulse"
                style={{
                  width: `${40 - i * 5}px`,
                  background: "linear-gradient(to right, rgb(220, 38, 38), rgb(249, 115, 22))",
                  opacity: 1 - i * 0.15,
                  animationDelay: `${i * 0.1}s`
                }}
              ></div>
            ))}
          </div>

          <p className="text-neutral-600 text-lg md:text-xl leading-relaxed">
            For over two decades, we&#39;ve been shaping skylines and transforming spaces with our commitment to innovative design,
            technical precision, and sustainable practices.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="group px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Our Projects
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <button className="px-8 py-4 bg-white text-neutral-900 font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-neutral-200">
              Contact Us
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-8 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-pulse"></div>

            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-700">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
                  <img src={about} alt="Architectural Excellence" className="w-full h-full object-cover" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-black/20 to-transparent"></div>
              </div>

              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl shadow-2xl transform rotate-12 group-hover:rotate-[20deg] transition-transform duration-500 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white text-3xl font-black">30+</p>
                  <p className="text-white/90 text-xs font-bold">Years</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl shadow-2xl p-6 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 font-medium">Award</p>
                    <p className="text-lg font-black text-neutral-900">Winning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
