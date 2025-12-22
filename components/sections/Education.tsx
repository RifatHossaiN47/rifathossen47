// Next.js App Router version - Education timeline section
'use client';

import { GraduationCap, BookOpen, School } from 'lucide-react';

export function Education() {
  const education = [
    {
      duration: '2022 - Present',
      degree: 'Bachelor of Science in Computer Science and Engineering',
      institution: 'Chittagong University of Engineering and Technology (CUET)',
      icon: GraduationCap,
      color: 'from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4]',
    },
    {
      duration: '2018 - 2020',
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Dhaka College',
      icon: BookOpen,
      color: 'from-[#14b8a6] to-[#0ea5e9] dark:from-[#06b6d4] dark:to-[#10b981]',
    },
    {
      duration: '2013 - 2018',
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Samsul Haque Khan School and College',
      icon: School,
      color: 'from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4]',
    },
  ];

  return (
    <section id="education" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">Education</h2>
          <GraduationCap className="w-8 h-8 text-[#0ea5e9] dark:text-[#10b981]" />
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Timeline Line */}
          <div className="absolute left-[200px] top-0 bottom-0 w-1 bg-gradient-to-b from-[#0ea5e9] via-[#14b8a6] to-[#0ea5e9] dark:from-[#10b981] dark:via-[#06b6d4] dark:to-[#10b981]" />

          <div className="space-y-12">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div key={index} className="relative flex items-center gap-8">
                  {/* Duration Badge */}
                  <div className="w-[180px] text-right">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#0ea5e9]/10 to-[#14b8a6]/10 dark:from-[#10b981]/10 dark:to-[#06b6d4]/10 rounded-full text-sm">
                      {edu.duration}
                    </span>
                  </div>

                  {/* Timeline Dot */}
                  <div className={`relative z-10 w-12 h-12 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0ea5e9] dark:hover:border-[#10b981]">
                    <h3 className="text-lg md:text-xl mb-2">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Stacked Cards */}
        <div className="md:hidden space-y-6">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#0ea5e9] dark:hover:border-[#10b981]"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${edu.color} flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#0ea5e9]/10 to-[#14b8a6]/10 dark:from-[#10b981]/10 dark:to-[#06b6d4]/10 rounded-full text-sm mb-3">
                      {edu.duration}
                    </div>
                    <h3 className="text-lg mb-2">{edu.degree}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{edu.institution}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
