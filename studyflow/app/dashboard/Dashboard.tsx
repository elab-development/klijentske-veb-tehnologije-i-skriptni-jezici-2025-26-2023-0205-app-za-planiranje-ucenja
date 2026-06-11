import { Link } from "react-router";
import { Timer } from "./components/Timer";
import { Progress } from "./components/Progress";

export function Dashboard(){
    return(
        <main className="workPageMain">
            <div className="dashboardFeaturesHolder">
                <Progress/>
                <Timer/>
            </div>
        </main>
    )
}
