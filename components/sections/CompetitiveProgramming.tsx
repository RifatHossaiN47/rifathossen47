// Next.js App Router version - Competitive Programming section
'use client';

import { useState, useEffect, useRef } from 'react';
import { Code2, Trophy, CheckCircle, Target, BarChart3, Medal, ExternalLink } from 'lucide-react';

export function CompetitiveProgramming() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const platforms = [
    {
      name: 'Codeforces',
      username: '@RifatHossain47',
      profileUrl: 'https://codeforces.com/profile/RifatHossain47',
      logo: '🏆',
      color: {
        primary: '#1F8ACB',
        secondary: '#F44336',
        gradient: 'from-[#1F8ACB] to-[#F44336]',
        border: 'border-[#1F8ACB]',
        hover: 'hover:border-[#1F8ACB] hover:shadow-[#1F8ACB]/20',
      },
      stats: [
        { icon: Target, label: 'Current Rating', value: '1200', color: 'text-cyan-600 dark:text-cyan-400' },
        { icon: Medal, label: 'Max Rating', value: '1350', color: 'text-blue-600 dark:text-blue-400' },
        { icon: CheckCircle, label: 'Problems Solved', value: '180+', color: 'text-green-600 dark:text-green-400' },
        { icon: Trophy, label: 'Contests', value: '25+', color: 'text-yellow-600 dark:text-yellow-400' },
      ],
    },
    {
      name: 'LeetCode',
      username: '@RifatHossain47',
      profileUrl: 'https://leetcode.com/u/RifatHossain47/',
      logo: '💻',
      color: {
        primary: '#FFA116',
        secondary: '#FF6C00',
        gradient: 'from-[#FFA116] to-[#FF6C00]',
        border: 'border-[#FFA116]',
        hover: 'hover:border-[#FFA116] hover:shadow-[#FFA116]/20',
      },
      stats: [
        { icon: CheckCircle, label: 'Problems Solved', value: '150+', color: 'text-orange-600 dark:text-orange-400' },
        { icon: BarChart3, label: 'Easy', value: '65', color: 'text-green-600 dark:text-green-400' },
        { icon: BarChart3, label: 'Medium', value: '70', color: 'text-yellow-600 dark:text-yellow-400' },
        { icon: BarChart3, label: 'Hard', value: '15', color: 'text-red-600 dark:text-red-400' },
      ],
    },
    {
      name: 'CodeChef',
      username: '@rifathossain47',
      profileUrl: 'https://www.codechef.com/users/rifathossain47',
      logo: '👨‍🍳',
      color: {
        primary: '#5B4638',
        secondary: '#B8860B',
        gradient: 'from-[#5B4638] to-[#B8860B]',
        border: 'border-[#5B4638]',
        hover: 'hover:border-[#B8860B] hover:shadow-[#B8860B]/20',
      },
      stats: [
        { icon: Target, label: 'Current Rating', value: '1400+', color: 'text-amber-600 dark:text-amber-400' },
        { icon: Medal, label: 'Highest Rating', value: '1520', color: 'text-yellow-600 dark:text-yellow-400' },
        { icon: CheckCircle, label: 'Problems Solved', value: '120+', color: 'text-green-600 dark:text-green-400' },
        { icon: Trophy, label: 'Stars', value: '3⭐', color: 'text-orange-600 dark:text-orange-400' },
      ],
    },
  ];

  const skills = [
    'Data Structures',
    'Algorithms',
    'Dynamic Programming',
    'Graph Theory',
    'Greedy Algorithms',
    'Binary Search',
    'Recursion',
    'Problem Solving',
    'Tree Algorithms',
    'Sorting & Searching',
    'String Algorithms',
    'Math & Number Theory',
  ];

  return (
    <section
      ref={sectionRef}
      id="competitive-programming"
      className="py-24 md:py-32 px-6 md:px-12 bg-gray-50 dark:bg-[#0a0a0a]"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">Competitive Programming & Problem Solving</h2>
            <Code2 className="w-8 h-8 md:w-10 md:h-10 text-[#0ea5e9] dark:text-[#10b981]" />
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-8">
            Sharpening algorithmic thinking through competitive coding
          </p>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Actively solving algorithmic problems and participating in coding competitions to strengthen data 
            structures, algorithms, and problem-solving skills. Preparing for technical interviews at top tech companies.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border-2 border-transparent transition-all duration-300 ${platform.color.hover} hover:scale-[1.03] hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Platform Header */}
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">{platform.logo}</div>
                <h3 className="text-2xl mb-2">{platform.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{platform.username}</p>
              </div>

              {/* Stats Grid */}
              <div className="space-y-4 mb-6">
                {platform.stats.map((stat, statIndex) => (
                  <div
                    key={statIndex}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
                    </div>
                    <span className={`bg-gradient-to-r ${platform.color.gradient} bg-clip-text text-transparent`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={platform.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 px-4 bg-gradient-to-r ${platform.color.gradient} text-white rounded-full text-center hover:scale-105 transition-transform flex items-center justify-center gap-2`}
              >
                View {platform.name} Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Skills Highlight */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
            <Target className="w-6 h-6 text-[#0ea5e9] dark:text-[#10b981]" />
            <h3 className="text-xl md:text-2xl">Key Skills</h3>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-[#0ea5e9]/10 to-[#14b8a6]/10 dark:from-[#10b981]/10 dark:to-[#06b6d4]/10 border border-[#0ea5e9]/20 dark:border-[#10b981]/20 rounded-full text-sm hover:scale-105 transition-transform"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <div className="px-6 py-3 bg-gradient-to-r from-[#FFA116] to-[#FF6C00] text-white rounded-full flex items-center gap-2 shadow-lg">
            <Trophy className="w-5 h-5" />
            LeetCode 150+ Problems
          </div>
          <div className="px-6 py-3 bg-gradient-to-r from-[#5B4638] to-[#B8860B] text-white rounded-full flex items-center gap-2 shadow-lg">
            <Medal className="w-5 h-5" />
            CodeChef 3-Star
          </div>
          <div className="px-6 py-3 bg-gradient-to-r from-[#1F8ACB] to-[#F44336] text-white rounded-full flex items-center gap-2 shadow-lg">
            <CheckCircle className="w-5 h-5" />
            500+ Problems Solved
          </div>
        </div>
      </div>
    </section>
  );
}
