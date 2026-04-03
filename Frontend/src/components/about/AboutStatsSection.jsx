import React from "react";

export default function AboutStatsSection({ stats }) {
  return (
    <div className="mb-16 lg:mb-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="relative group">
            <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>

            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 transform group-hover:scale-105 transition-all duration-300">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:rotate-6 transition-transform`}>
                <stat.Icon size={24} />
              </div>
              <h4 className="text-4xl font-black text-neutral-900 mb-2 text-center">{stat.value}</h4>
              <p className="text-neutral-600 uppercase tracking-wider text-sm font-medium text-center">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
