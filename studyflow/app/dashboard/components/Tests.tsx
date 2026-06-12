import { useRef } from "react";
import { arrowRightBlack } from "~/constants";
import { TestCard } from "./TestCard";

export function Tests(){
    const testsHolderRef = useRef<HTMLDivElement>(null);

    const scrollTests = (direction: "left" | "right") => {
        const testsHolder = testsHolderRef.current;

        if (!testsHolder) {
            return;
        }

        testsHolder.scrollBy({
            left: direction === "left" ? -486 : 486,
            behavior: "smooth",
        });
    };

    return(
        <div className="tests">
            <div className="testsHeader">
                <p className="heading1">Upcoming Tests/Exams</p>
                <div className="testScrollActions">
                    <button
                        className="testScrollButton testScrollButtonLeft"
                        type="button"
                        aria-label="Scroll tests left"
                        onClick={() => scrollTests("left")}
                    >
                        {arrowRightBlack}
                    </button>
                    <button
                        className="testScrollButton"
                        type="button"
                        aria-label="Scroll tests right"
                        onClick={() => scrollTests("right")}
                    >
                        {arrowRightBlack}
                    </button>
                </div>
            </div>
            <div className="testsHolder" ref={testsHolderRef}>
                <TestCard
                    priority="high"
                    title="Matematika 2 Kolokvijum"
                    date="May 15, 2024"
                    time="09:00 AM"
                    readiness={85}
                />
                <TestCard
                    priority="medium"
                    title="SPA"
                    date="May 15, 2024"
                    time="09:00 AM"
                    readiness={85}
                />
                <TestCard
                    priority="low"
                    title="KETH"
                    date="May 15, 2024"
                    time="09:00 AM"
                    readiness={85}
                />
                <TestCard
                    priority="medium"
                    title="SPA"
                    date="May 15, 2024"
                    time="09:00 AM"
                    readiness={85}
                />
                <TestCard
                    priority="medium"
                    title="SPA"
                    date="May 15, 2024"
                    time="09:00 AM"
                    readiness={85}
                />
                <TestCard
                    priority="medium"
                    title="SPA"
                    date="May 15, 2024"
                    time="09:00 AM"
                    readiness={85}
                />
            </div>
        </div>
    )
}
