import profileImage from '../assets/SRSI.png';
import { ArrowRight, Award, Code, Microscope, Trophy, Calendar, MessageCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface HomepageProps {
  onNavigate: (page: 'experiences' | 'projects' | 'awards' | 'hobbies' | 'blog' | 'contact') => void;
}

// Animated counter component
function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutCubic * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-3xl text-gray-900 mb-2">
      {count}{suffix}
    </div>
  );
}

export function Homepage({ onNavigate }: HomepageProps) {
  const sections = [
    {
      id: 'experiences' as const,
      title: 'Experiences',
      description: 'Research internships, biology olympiad, and competitive programming',
      icon: Microscope,
      highlight: '1300+ hours in Biology Olympiad'
    },
    {
      id: 'projects' as const,
      title: 'Projects',
      description: 'Open source contributions and personal coding projects',
      icon: Code,
      highlight: 'GitHub: falabdullateef'
    },
    {
      id: 'awards' as const,
      title: 'Awards',
      description: 'National recognition in science and mathematics competitions',
      icon: Trophy,
      highlight: '$5,000 in prize money'
    },
    {
      id: 'hobbies' as const,
      title: 'Hobbies',
      description: 'Cycling adventures and personal interests',
      icon: Calendar,
      highlight: 'Mountain & road cycling'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl tracking-tight text-gray-900 mb-6">
              Biology, Research
              <br />
              <span className="text-gray-600">& Programming</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              I'm Faisal, a senior at Riyadh Schools emersed in biological research, 
              competitive programming, and using computers to optimize methodologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('experiences')}
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={profileImage}
                alt="Faisal in the lab"
                className="w-80 h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm">4-year Biology Olympiad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="min-h-screen flex items-center justify-center border-t border-gray-200">
        <div className="text-center">
          <div className="mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">By the Numbers</h2>
            <p className="text-xl text-gray-600">A snapshot of my achievements and dedication</p>
          </div>
          <div className="grid grid-cols-3 gap-12">
            <div className="text-center">
              <AnimatedCounter end={1400} suffix="+" />
              <div className="text-gray-600">Hours Biology Olympiad Training</div>
            </div>
            <div className="text-center">
              <AnimatedCounter end={9} />
              <div className="text-gray-600">National Awards</div>
            </div>
            <div className="text-center">
              <AnimatedCounter end={5} suffix="K" />
              <div className="text-gray-600">Prize Money Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Preview */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-gray-900 mb-4">Explore My Journey</h2>
            <p className="text-xl text-gray-600">Discover my experiences, projects, and achievements</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => onNavigate(section.id)}
                  className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 text-left"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl text-gray-900 mb-3">{section.title}</h3>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <div className="text-sm text-gray-500 bg-gray-50 px-3 py-2 rounded-lg inline-block">
                    {section.highlight}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="min-h-screen flex items-center justify-center py-20 text-center">
        <div className="bg-gray-900 rounded-3xl p-12 text-white">
          <h2 className="text-3xl mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8">
            Interested in collaborating or learning more about my work?
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto"
          >
            <MessageCircle className="w-5 h-5" />
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
}