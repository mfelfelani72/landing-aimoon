import React, { useState } from 'react';

const SmoothTripleSlider = () => {
  const slides = [
    { id: 1, color: 'bg-red-500' },
    { id: 2, color: 'bg-blue-500' },
    { id: 3, color: 'bg-green-500' },
    { id: 4, color: 'bg-yellow-500' },
    { id: 5, color: 'bg-purple-500' },
    { id: 6, color: 'bg-pink-500' },
    { id: 7, color: 'bg-indigo-500' },
    { id: 8, color: 'bg-teal-500' },
    { id: 9, color: 'bg-orange-500' }
  ];

  const [currentGroup, setCurrentGroup] = useState(0);
  const [transitionClass, setTransitionClass] = useState('');
  
  // تقسیم اسلایدها به گروه‌های سه‌تایی
  const groups = [];
  for (let i = 0; i < slides.length; i += 3) {
    groups.push(slides.slice(i, i + 3));
  }

  const nextGroup = () => {
    if (currentGroup >= groups.length - 1) return;
    
    setTransitionClass('slide-out-left');
    setTimeout(() => {
      setCurrentGroup(prev => prev + 1);
      setTransitionClass('slide-in-right');
      setTimeout(() => setTransitionClass(''), 500);
    }, 500);
  };

  const prevGroup = () => {
    if (currentGroup <= 0) return;
    
    setTransitionClass('slide-out-right');
    setTimeout(() => {
      setCurrentGroup(prev => prev - 1);
      setTransitionClass('slide-in-left');
      setTimeout(() => setTransitionClass(''), 500);
    }, 500);
  };

  return (
    <div className="mt-[5rem] max-w-4xl mx-auto p-4 relative overflow-hidden">
      <div className={`flex justify-center items-center gap-4 h-64 ${transitionClass}`}>
        {groups[currentGroup]?.map((slide, index) => (
          <div
            key={`${slide.id}-${currentGroup}`}
            className={`${slide.color} h-48 w-full rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-bold transition-transform duration-500`}
          >
            اسلاید {slide.id}
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-6 gap-8">
        <button
          onClick={prevGroup}
          disabled={currentGroup === 0}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-3 rounded-full shadow-md transition-colors disabled:opacity-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <span className="text-gray-600">
          گروه {currentGroup + 1} از {groups.length}
        </span>

        <button
          onClick={nextGroup}
          disabled={currentGroup === groups.length - 1}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-3 rounded-full shadow-md transition-colors disabled:opacity-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* استایل‌های انیمیشن */}
      <style jsx global>{`
        .slide-out-left {
          animation: slideOutLeft 0.5s forwards;
        }
        .slide-in-right {
          animation: slideInRight 0.5s forwards;
        }
        .slide-out-right {
          animation: slideOutRight 0.5s forwards;
        }
        .slide-in-left {
          animation: slideInLeft 0.5s forwards;
        }
        @keyframes slideOutLeft {
          to { transform: translateX(-100%); opacity: 0; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
          to { transform: translateX(100%); opacity: 0; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default SmoothTripleSlider;