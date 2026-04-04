import React from "react";
import { Clock } from "lucide-react";

export default function AboutTimelineSection({ milestones }) {
  return (
    <div className="">
      <div className="text-center ">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 mb-4">
          <Clock size={16} className="text-red-600" />
          <span className="text-sm font-bold text-red-600">Our Journey</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text text-transparent mb-4 messiri">
          Milestones That Define Us
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-600 hidden lg:block"></div>

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
              <div className="w-full lg:w-5/12">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-red-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 group-hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <milestone.Icon size={24} />
                      </div>
                      <div>
                        <div className="text-red-600 font-black text-2xl mb-2">{milestone.year}</div>
                        <h3 className="font-black text-xl text-neutral-900 mb-3">{milestone.title}</h3>
                        <p className="text-neutral-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-6 bg-white rounded-full border-4 border-red-500 shadow-lg"></div>
              </div>

              <div className="hidden lg:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
