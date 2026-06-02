import { Link } from "react-router";
import { RegisterForm } from "./components/RegisterForm";
import { quote, stars } from "~/constants";


export function Register(){

    return(
        <main className="registerMain">
            <header>
                <h1>StudyFlow</h1>
                <div className="flex gap-3.75">
                    <p>Already have an account?</p>
                    <Link to="/login" className="">Sign in</Link>
                </div>
            </header>
            <div className="registerShowcase bg-(--background-dark) border-r border-(--border-color-dark)">
                <div className="registerShowcaseGrid">
                    <div className="registerFeatureCard">
                        <div className="registerIconBox">{stars}</div>
                        <p className="registerFeatureTitle">Find your flow.</p>
                        <p className="registerFeatureText">Intelligent scheduling designed for deep</p>
                        <img src="/images/laptop2.png" alt="StudyFlow schedule preview" />
                    </div>

                    <div className="registerStatsCard">
                        <h2>98%</h2>
                        <p>Student Efficiency Increase</p>
                    </div>

                    <div className="registerQuoteCard">
                        {quote}
                        <p>"StudyFlow transformed my exam season from chaos to a calculated, calm success."</p>
                    </div>

                    <div className="registerJoinCard">
                        <p>Join 1+ students globally</p>
                    </div>
                </div>
            </div>
            <div className="flex-col items-center gap-3.75">
                <RegisterForm></RegisterForm>
                <div className="infoPages">
                    <p>Privacy Policy</p>
                    <p>•</p>
                    <p>Terms of Service</p>
                    <p>•</p>
                    <p>Support</p>
                </div>
            </div>
        </main>
    );
}
