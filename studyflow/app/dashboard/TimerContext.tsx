import { createContext, useContext, useEffect, useState } from "react";

const focusTime = 25 * 60;

type TimerContextValue = {
    focusTime: number;
    selectedSubject: string;
    setSelectedSubject: (subject: string) => void;
    secondsLeft: number;
    setSecondsLeft: (seconds: number) => void;
    isRunning: boolean;
    setIsRunning: (isRunning: boolean | ((currentState: boolean) => boolean)) => void;
    resetTimer: () => void;
};

const TimerContext = createContext<TimerContextValue | undefined>(undefined);

export function TimerProvider({ children }: { children: React.ReactNode }) {
    const [selectedSubject, setSelectedSubject] = useState("Matematika 2");
    const [secondsLeft, setSecondsLeft] = useState(focusTime);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) {
            return;
        }

        const intervalId = window.setInterval(() => {
            setSecondsLeft((currentSeconds) => {
                if (currentSeconds <= 1) {
                    window.clearInterval(intervalId);
                    setIsRunning(false);
                    return 0;
                }

                return currentSeconds - 1;
            });
        }, 1000);

        return () => window.clearInterval(intervalId);
    }, [isRunning]);

    function resetTimer() {
        setIsRunning(false);
        setSecondsLeft(focusTime);
    }

    return (
        <TimerContext.Provider
            value={{
                focusTime,
                selectedSubject,
                setSelectedSubject,
                secondsLeft,
                setSecondsLeft,
                isRunning,
                setIsRunning,
                resetTimer,
            }}
        >
            {children}
        </TimerContext.Provider>
    );
}

export function useTimer() {
    const timer = useContext(TimerContext);

    if (!timer) {
        throw new Error("useTimer must be used inside TimerProvider");
    }

    return timer;
}
