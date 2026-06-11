export function Progress(){
    const completed = 12;
    const remaining = 4;
    const total = completed + remaining;
    const progress = Math.round((completed / total) * 100);
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const progressOffset = circumference - (progress / 100) * circumference;

    return(
        <div className="dashboardFeature progressFeature">
            <div className="featureHeader">
                <p>Overall Progress</p>
            </div>

            <div className="progressCircleHolder">
                <svg className="progressCircle" viewBox="0 0 180 180" aria-label={`${progress}% completed`}>
                    <circle
                        className="progressTrack"
                        cx="90"
                        cy="90"
                        r={radius}
                    />
                    <circle
                        className="progressValue"
                        cx="90"
                        cy="90"
                        r={radius}
                        strokeDasharray={circumference}
                        strokeDashoffset={progressOffset}
                    />
                </svg>

                <div className="progressCircleText">
                    <h2>{progress}%</h2>
                    <p>COMPLETED</p>
                </div>
            </div>

            <div className="progressStats">
                <div>
                    <p>Completed</p>
                    <strong>{completed}</strong>
                </div>
                <div className="progressStatsDivider" />
                <div>
                    <p>Remaining</p>
                    <strong>{remaining}</strong>
                </div>
            </div>
        </div>
    );
}
