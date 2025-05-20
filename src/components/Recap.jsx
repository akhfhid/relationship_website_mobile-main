import React from 'react';
import { ArrowRight, ArrowLeft, Message, Image, Music, Heart } from './icons';
import { useNavigate } from 'react-router-dom';
import config from './config'; // Import config file
import '../index.css';
import QuestionButtonRedirectPath from './icons/QuestionButtonRedirect';

function Recap() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm sm:max-w-md text-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-8 text-white drop-shadow-lg">
          {config.recapTitle}
        </h1>

        <div className="flex flex-wrap justify-center gap-10 mb-12">
          {config.recapSections.map(({ label, path, icon }) => {
            const IconComponent = { Message, Image, Music }[icon]; // Map string to component
            return (
              <div key={label} className="flex flex-col items-center">
                <button
                  className="relative group w-20 h-20 sm:w-24 sm:h-24"
                  onClick={() => navigate(path)}
                >
                  <Heart className="absolute inset-0 w-full h-full z-0 shadow-svg" />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <IconComponent color="#C67593" />
                  </div>
                </button>
                <span className="mt-4 text-sm font-medium text-white animate-bounce">
                  {config.clickMeText}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex justify-around w-full gap-x-2">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
            onClick={() => navigate(config.recapPreviousPage)}
          >
            <ArrowLeft /> {config.previousPageText}
          </button>

          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
            onClick={() => navigate(config.buttonRedirectQuestion)}
          >
            <QuestionButtonRedirectPath
             /> {config.buttonRedirectQuestionText}
          </button>

          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
            onClick={() => navigate(config.recapNextPage)}
          >
            {config.nextPageText} <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recap;
