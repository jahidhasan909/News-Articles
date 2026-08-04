import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onFinished }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 1200);

    const finishTimer = setTimeout(() => {
      setIsVisible(false);
      if (onFinished) onFinished();
    }, 1600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinished]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[999999] backdrop-blur-xs bg-white/30 flex flex-col items-center justify-center text-white transition-opacity duration-500 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 p-1 shadow-2xl animate-pulse">
            <img
              src="https://i.ibb.co.com/BVjMGXbP/jahidhasan.jpg"
              alt="MaxValid Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -inset-2 rounded-full border-2 border-sky-400/40 animate-ping" />
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-2xl font-extrabold shadow-xs tracking-wider text-blue-900">
            News & Articles
          </h1>
        </div>

        <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full animate-loadingBar" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
