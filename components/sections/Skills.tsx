// Next.js App Router version - Skills & Technologies section
"use client";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "Java",
        "C",
        "C++",
        "Bash",
      ],
    },
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "Vite",
        "Tailwind CSS",
        "NativeWind",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Java Spring Boot", "Firebase"],
    },
    {
      title: "Mobile",
      skills: ["React Native", "Expo", "Android (Java)", "Mapbox GL"],
    },
    {
      title: "ML/AI",
      skills: [
        "TensorFlow",
        "Scikit-learn",
        "NLTK",
        "BanglaBERT",
        "XGBoost",
        "Pandas",
        "NumPy",
        "Streamlit",
      ],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Firebase Realtime DB", "Firestore"],
    },
    {
      title: "Tools & Services",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Stripe",
        "Mailgun",
        "EmailJS",
        "JWT",
        "Vercel",
        "Firebase Hosting",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-6 md:px-12 bg-gray-50 dark:bg-[#0a0a0a]"
    >
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12 text-center md:text-left">
          Skills & Technologies
        </h2>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl md:text-2xl text-[#0ea5e9] dark:text-[#10b981]">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-center border border-transparent hover:border-[#0ea5e9] dark:hover:border-[#10b981]"
                  >
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
