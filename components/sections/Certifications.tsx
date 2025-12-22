// Next.js App Router version - Certifications & Achievements section
"use client";

import { useState } from "react";
import { Award, Github, GraduationCap } from "lucide-react";

type CertTab = "web" | "programming" | "data" | "conferences";

interface Certification {
  name: string;
  platform: string;
  institution?: string;
  year?: string;
  score?: string;
}

export function Certifications() {
  const [activeTab, setActiveTab] = useState<CertTab>("web");

  const certifications: Record<CertTab, Certification[]> = {
    web: [
      {
        name: "Mobile App Development (Android/Flutter/iOS)",
        platform: "EDGE project of Bangladesh Computer Council, ICT Division",
        year: "2024",
      },
      {
        name: "Node.js + Express + MongoDB Bootcamp",
        platform: "KnowledgeGate",
        year: "2024",
      },
      {
        name: "React & Redux Complete Course",
        platform: "KnowledgeGate",
        year: "2023",
      },
      {
        name: "GitHub Fundamentals",
        platform: "DataCamp",
        year: "2023",
      },
    ],
    programming: [
      {
        name: "Complete Java Course",
        platform: "KnowledgeGate",
        score: "95%",
        year: "2024",
      },
      {
        name: "Python Programming Fundamentals",
        platform: "DataCamp",
        year: "2023",
      },
    ],
    data: [
      {
        name: "Machine Learning Specialization",
        platform: "Coursera",
        institution: "Stanford University (Andrew Ng)",
        year: "2024",
      },
      {
        name: "Python Data Associate",
        platform: "DataCamp",
        year: "2024",
      },
      {
        name: "Python Data Fundamentals",
        platform: "DataCamp",
        year: "2023",
      },
    ],
    conferences: [
      {
        name: "IEEE ECCE 2025 Paper Presentation",
        platform: "IEEE",
        year: "2025",
      },
      {
        name: "ICDSAIA Conference",
        platform: "International Conference",
        year: "2024",
      },
      {
        name: "3MT Bangladesh 2025",
        platform: "3 Minute Thesis Competition",
        year: "2025",
      },
      {
        name: "Software Engineering Workshop",
        platform: "Bangladesh Computer Council",
        year: "2024",
      },
    ],
  };

  const tabs = [
    { key: "web" as CertTab, label: "Development" },
    { key: "programming" as CertTab, label: "Programming" },
    { key: "data" as CertTab, label: "Data Science & ML" },
    { key: "conferences" as CertTab, label: "Conferences" },
  ];

  return (
    <section id="certifications" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Certifications & Achievements
          </h2>
          <GraduationCap className="w-8 h-8 text-[#0ea5e9] dark:text-[#10b981]" />
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] text-white"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications[activeTab].map((cert, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0ea5e9] dark:hover:border-[#10b981]"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-[#0ea5e9]/10 to-[#14b8a6]/10 dark:from-[#10b981]/10 dark:to-[#06b6d4]/10 rounded-full">
                  <Award className="w-6 h-6 text-[#0ea5e9] dark:text-[#10b981]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl mb-2">{cert.name}</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.platform}
                      {cert.institution && ` • ${cert.institution}`}
                    </p>
                    <div className="flex items-center gap-3">
                      {cert.year && (
                        <span className="text-sm text-[#0ea5e9] dark:text-[#10b981]">
                          {cert.year}
                        </span>
                      )}
                      {cert.score && (
                        <span className="px-3 py-1 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] text-white rounded-full text-xs">
                          Score: {cert.score}
                        </span>
                      )}
                    </div>
                  </div>
                  {cert.institution === "Stanford University (Andrew Ng)" && (
                    <div className="mt-3 inline-block px-4 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] text-white rounded-full text-xs">
                      ⭐ Featured Certification
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Count */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Total Certifications:{" "}
            <span className="text-2xl bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] bg-clip-text text-transparent">
              13
            </span>
          </p>
        </div>
        <div className="flex justify-center mt-12 gap-4">
          <a
            href="https://github.com/RifatHossaiN47/professional-certifications"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] text-white rounded-full hover:scale-105 transition-transform flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
