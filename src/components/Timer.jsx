import React, { useEffect, useState } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from './icons';
import config from './config'; // Import config file

function Timer() {
  const START_DATE = new Date(config.anniversaryDate); // Use date from config
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      const days = Math.abs(differenceInDays(now, START_DATE));
      const hours = Math.abs(differenceInHours(now, START_DATE) % 24);
      const minutes = Math.abs(differenceInMinutes(now, START_DATE) % 60);
      const seconds = Math.abs(differenceInSeconds(now, START_DATE) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center bg-cover bg-center relative text-white px-4">
      <div className="text-center z-10">
        {/* Title */}
        <h1 className="text-lg sm:text-2xl font-bold mb-8 drop-shadow-lg">
          {config.timerTitle}
        </h1>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 text-5xl sm:text-7xl font-bold mb-6">
          {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
            <React.Fragment key={unit}>
              {index !== 0 && <span className="text-4xl sm:text-6xl">:</span>}
              <div className="flex flex-col items-center">
                <span className="drop-shadow-lg">{timeLeft[unit].toString().padStart(2, '0')}</span>
                <span className="text-sm sm:text-2xl mt-1 sm:mt-2">{config.timeUnits[unit]}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
        
        <p className="text-lg mb-8 drop-shadow-lg">{config.timerMessage}</p>

        {/* Button */}
        <div className="flex justify-center w-full">
          <button
            className="mt-8 sm:mt-12 px-6 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
            onClick={() => navigate(config.recapRedirectPath)}
          >
            {config.nextPageText} <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
