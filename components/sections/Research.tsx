// Next.js App Router version - Research & Publications section
"use client";

import { ExternalLink, Github, Award } from "lucide-react";

export function Research() {
  const papers = [
    {
      title: "Semiconductor Wafer Defect Classification using Deep Learning",
      conference: "IEEE ECCE 2025",
      tech: ["TensorFlow", "ResNet50", "Transfer Learning"],
      dataset: "WM-811K",
      github: "conference_semiconductor",
      ieeeLink: "https://ieeexplore.ieee.org/abstract/document/11013292",
      arxiv: null,
      metric: { label: "Accuracy", value: "94.08%" },
    },
    {
      title: "BanglaASTE: Aspect-Sentiment-Opinion Extraction Framework",
      conference: "IEEE SPICSCON 2025",
      tech: ["BanglaBERT", "XGBoost", "NLP"],
      dataset: null,
      github: "conference_BanglaASTE",
      ieeeLink: null,
      arxiv: "https://arxiv.org/abs/2511.21381",
      metric: { label: "Accuracy", value: "89.9%" },
    },
    {
      title: "BanglaMM-Disaster: Multimodal Disaster Classification for Bangla",
      conference: "IEEE SPICSCON 2025",
      tech: [
        "BanglaBERT",
        "mBERT",
        "XLM-RoBERTa",
        "ResNet50",
        "DenseNet169",
        "MobileNetV2",
      ],
      dataset: null,
      github: "conference_BanglaMM-Disaster",
      ieeeLink: null,
      arxiv: "https://arxiv.org/abs/2511.21364",
      metric: { label: "Accuracy", value: "83.76%" },
    },
  ];

  return (
    <section
      id="research"
      className="py-24 md:py-32 px-6 md:px-12 bg-gray-50 dark:bg-[#0a0a0a]"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Research & Publications
          </h2>
          <div className="px-4 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] rounded-full">
            <Award className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0ea5e9] dark:hover:border-[#10b981]"
            >
              {/* Conference Badge */}
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0ea5e9]/10 to-[#14b8a6]/10 dark:from-[#10b981]/10 dark:to-[#06b6d4]/10 rounded-full mb-4">
                <span className="text-sm bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] bg-clip-text text-transparent">
                  {paper.conference}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl mb-4 leading-tight">
                {paper.title}
              </h3>

              {/* Metric */}
              {paper.metric && (
                <div className="mb-4">
                  <div className="text-4xl md:text-5xl bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] bg-clip-text text-transparent">
                    {paper.metric.value}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {paper.metric.label}
                  </p>
                </div>
              )}

              {/* Dataset */}
              {paper.dataset && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Dataset:{" "}
                  <span className="text-[#0ea5e9] dark:text-[#10b981]">
                    {paper.dataset}
                  </span>
                </p>
              )}

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {paper.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {paper.ieeeLink && (
                  <a
                    href={paper.ieeeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0ea5e9] dark:bg-[#10b981] text-white rounded-lg hover:scale-105 transition-transform text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    IEEE Xplore
                  </a>
                )}
                {paper.arxiv && (
                  <a
                    href={paper.arxiv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0ea5e9] dark:bg-[#10b981] text-white rounded-lg hover:scale-105 transition-transform text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    arXiv Paper
                  </a>
                )}
                <a
                  href={`https://github.com/RifatHossaiN47/${paper.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border-2 border-[#0ea5e9] dark:border-[#10b981] text-[#0ea5e9] dark:text-[#10b981] rounded-lg hover:bg-[#0ea5e9] dark:hover:bg-[#10b981] hover:text-white transition-all text-sm"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
