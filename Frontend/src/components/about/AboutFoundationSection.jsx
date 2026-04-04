import React from "react";
import { Building, Heart, Plus, Target, Users } from "lucide-react";

export default function AboutFoundationSection({ activeTab, onTabChange, coreValues }) {
  return (
    <div className="mb-8 lg:mb-10">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 mb-4">
          <Target size={16} className="text-red-600" />
          <span className="text-sm font-bold text-red-600">Our Foundation</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text text-transparent mb-4 messiri">
          Built on Strong Principles
        </h2>
        <p className="text-neutral-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Our foundation represents the core values that guide every project we undertake.
        </p>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

        <div className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden border border-white/50">
          <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 p-6">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => onTabChange("vision")}
                className={`group/tab flex items-center justify-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === "vision"
                    ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-2xl scale-105"
                    : "text-white hover:bg-neutral-700 hover:scale-102"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl ${activeTab === "vision" ? "bg-white/20" : "bg-white/10"} flex items-center justify-center transition-all duration-300`}>
                  <Building size={20} className="text-white" />
                </div>
                <span className="font-bold text-lg">Our Vision</span>
              </button>

              <button
                onClick={() => onTabChange("mission")}
                className={`group/tab flex items-center justify-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === "mission"
                    ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-2xl scale-105"
                    : "text-white hover:bg-neutral-700 hover:scale-102"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl ${activeTab === "mission" ? "bg-white/20" : "bg-white/10"} flex items-center justify-center transition-all duration-300`}>
                  <Target size={20} className="text-white" />
                </div>
                <span className="font-bold text-lg">Our Mission</span>
              </button>

              <button
                onClick={() => onTabChange("values")}
                className={`group/tab flex items-center justify-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === "values"
                    ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-2xl scale-105"
                    : "text-white hover:bg-neutral-700 hover:scale-102"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl ${activeTab === "values" ? "bg-white/20" : "bg-white/10"} flex items-center justify-center transition-all duration-300`}>
                  <Heart size={20} className="text-white" />
                </div>
                <span className="font-bold text-lg">Our Values</span>
              </button>
            </div>
          </div>

          <div className="p-8 md:p-12 relative min-h-[500px] bg-gradient-to-br from-neutral-50 to-white">
            <div className={`transition-all duration-500 ${activeTab === "vision" ? "opacity-100 block" : "opacity-0 hidden"}`}>
              <p className="text-neutral-700 text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12">
                To redefine architectural boundaries through innovative design that harmonizes aesthetics, functionality, and sustainability,
                creating spaces that inspire human connection and elevate experiences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="relative group/card">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur opacity-20 group-hover/card:opacity-40 transition-opacity"></div>
                  <div className="relative flex items-start gap-6 p-8 bg-white rounded-3xl shadow-xl border border-neutral-100 group-hover/card:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Building size={28} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-3 text-neutral-900">Design Excellence</h4>
                      <p className="text-neutral-600 leading-relaxed">Creating spaces that merge beauty with purpose</p>
                    </div>
                  </div>
                </div>
                <div className="relative group/card">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover/card:opacity-40 transition-opacity"></div>
                  <div className="relative flex items-start gap-6 p-8 bg-white rounded-3xl shadow-xl border border-neutral-100 group-hover/card:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Users size={28} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-3 text-neutral-900">Human-Centered</h4>
                      <p className="text-neutral-600 leading-relaxed">Designing for people and their experiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-500 ${activeTab === "mission" ? "opacity-100 block" : "opacity-0 hidden"}`}>
              <p className="text-neutral-700 text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12">
                To deliver architectural solutions that exceed client expectations through collaborative processes, technical excellence, and unwavering
                attention to detail, while championing environmental responsibility and community engagement.
              </p>
              <div className="space-y-6 max-w-4xl mx-auto">
                {[
                  "Creating sustainable designs that minimize environmental impact while maximizing functionality and beauty",
                  "Fostering innovation through research and technology integration in all our architectural solutions",
                  "Cultivating meaningful relationships with clients and communities to create spaces that truly serve their needs"
                ].map((mission, index) => (
                  <div key={index} className="relative group/card">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur opacity-20 group-hover/card:opacity-40 transition-opacity"></div>
                    <div className="relative flex items-start gap-6 p-8 bg-white rounded-3xl shadow-xl border border-neutral-100 group-hover/card:shadow-2xl transition-all duration-300">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <Plus size={24} className="text-white font-bold" />
                        </div>
                      </div>
                      <p className="text-neutral-700 text-lg leading-relaxed">{mission}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`transition-all duration-500 ${activeTab === "values" ? "opacity-100 block" : "opacity-0 hidden"}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {coreValues.map((value, index) => (
                  <div key={index} className="relative group/card">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${value.gradient} rounded-3xl blur opacity-20 group-hover/card:opacity-40 transition-opacity`}></div>
                    <div className="relative p-8 bg-white rounded-3xl shadow-xl border-l-4 border-red-500 group-hover/card:shadow-2xl transition-all duration-300">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg group-hover/card:scale-110 transition-transform`}>
                        <value.Icon size={24} className="text-white" />
                      </div>
                      <h4 className="font-black text-2xl mb-4 text-neutral-900">{value.title}</h4>
                      <p className="text-neutral-600 text-lg leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
