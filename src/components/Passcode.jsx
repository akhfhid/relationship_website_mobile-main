import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from './config'; // Import config file

function Passcode() {
    const [passcode, setPasscode] = useState([]);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
  
    const handleNumberClick = (number) => {
        if (passcode.length < 6) {
            const newPasscode = [...passcode, number];
            setPasscode(newPasscode);

            if (newPasscode.length === 4) {
                const enteredPasscode = newPasscode.join('');
                if (enteredPasscode === config.correctPasscode) {
                    setMessage(config.successMessage);
                    setTimeout(() => {
                        setMessage(config.redirectMessage);
                        navigate(config.redirectPath);
                    }, 500);
                } else {
                    setMessage(config.incorrectPasscodeMessage);
                    setTimeout(() => {
                        setPasscode([]);
                        setMessage('');
                    }, 4000);
                }
            }
        }
    };

    const handleCancel = () => {
        setPasscode([]);
        setMessage('');
    };

    return (
        <div className="min-h-screen w-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center overflow-hidden">
            <div className="flex flex-col items-center max-w-full">
                {/* Title */}
                <h1 className="text-2xl font-light mb-8">{config.passcodeTitle}</h1>

                {/* Passcode Dots */}
                <div className="flex gap-4 mb-16">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className={`w-3.5 h-3.5 rounded-full ${
                                i < passcode.length ? 'bg-white' : 'border-2 border-zinc-500'
                            }`}
                        />
                    ))}
                </div>

                {/* Message */}
                {message && (
                    <div className={`mb-4 -mt-9 text-sm font-bold ${message === config.successMessage ? 'text-green-500' : 'text-red-500'}`}>
                        {message}
                    </div>
                )}

                {/* Number Pad */}
                <div className="grid grid-cols-3 gap-4 mb-8 max-w-full">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <button
                            key={num}
                            onClick={() => handleNumberClick(num)}
                            className="w-16 h-16 rounded-full bg-zinc-800/50 flex items-center justify-center hover:bg-zinc-700/50 active:bg-zinc-600/50 transition-colors"
                        >
                            <span className="text-3xl font-light">{num}</span>
                        </button>
                    ))}
                    <div className="col-start-2">
                        <button
                            onClick={() => handleNumberClick(0)}
                            className="w-16 h-16 rounded-full bg-zinc-800/50 flex items-center justify-center hover:bg-zinc-700/50 active:bg-zinc-600/50 transition-colors"
                        >
                            <span className="text-3xl font-light">0</span>
                        </button>
                    </div>
                </div>

                {/* Cancel Button */}
                <button
                    onClick={handleCancel}
                    className="text-lg text-white/90 hover:text-white active:text-white/70 transition-colors"
                >
                    {config.cancelButtonText}
                </button>
            </div>
        </div>
    );
}

export default Passcode;
