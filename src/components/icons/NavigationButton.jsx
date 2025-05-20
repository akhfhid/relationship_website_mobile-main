import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react"; 
import QuestionButtonRedirectPath from "./QuestionButtonRedirectPath";

const NavigationButtons = ({ config }) => {
  const navigate = useNavigate();

  return (
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
        <QuestionButtonRedirectPath /> {config.buttonRedirectQuestionText}
      </button>

      <button
        className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
        onClick={() => navigate(config.recapNextPage)}
      >
        {config.nextPageText} <ArrowRight />
      </button>
    </div>
  );
};

export default NavigationButtons;
