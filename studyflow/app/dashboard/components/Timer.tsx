import { useEffect } from "react";
import { useTimer } from "../TimerContext";

export function Timer(){
    const {
        focusTime,
        selectedSubject,
        setSelectedSubject,
        secondsLeft,
        setSecondsLeft,
        isRunning,
        setIsRunning,
        resetTimer,
    } = useTimer();

    useEffect(() => {
        return () => setIsRunning(false);
    }, [setIsRunning]);

    const minutes = Math.floor(secondsLeft / 60).toString().padStart(2, "0");
    const seconds = (secondsLeft % 60).toString().padStart(2, "0");
    const isInitialState = secondsLeft === focusTime && !isRunning;
    const showResetButton = !isInitialState && !isRunning;
    const timerLabel = isRunning ? "Pause Timer" : isInitialState ? "Start Timer" : "Resume Timer";

    return(
        <div className="dashboardFeature timerFeature">
            <div className="featureHeader">
                <p>Study Timer</p>
                <select
                    className="timerSubjectSelect"
                    value={selectedSubject}
                    disabled={!isInitialState}
                    onChange={(event) => setSelectedSubject(event.target.value)}
                >
                    <option>Matematika 2</option>
                    <option>Klijentske veb tehnologije</option>
                    <option>Skriptni jezici</option>
                    <option>Baze podataka</option>
                </select>
            </div>

            <div className="timerContent">
                <p className="timerDisplay">{minutes}:{seconds}</p>
                <div className={`timerActions ${showResetButton ? "timerActionsWithReset" : ""}`}>
                    <button
                        className="timerButton"
                        type="button"
                        onClick={() => {
                            if (secondsLeft === 0) {
                                setSecondsLeft(focusTime);
                            }

                            setIsRunning((currentState) => !currentState);
                        }}
                    >
                        {timerLabel}
                    </button>
                    {showResetButton && (
                        <button
                            className="timerResetButton"
                            type="button"
                            onClick={resetTimer}
                        >
                            Reset
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
