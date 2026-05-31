import { Link } from "react-router";
import { logo } from "~/constants";
import { LoginForm } from "./components/LoginForm";

export function Login(){

    return(
        <main className="loginMain">
            <header>
                <h1>StudyFlow</h1>
                <div className="flex gap-3.75">
                    <p>Don't have an account?</p>
                    <Link to="/register" className="">Sign up</Link>
                </div>
            </header>
            <img className="loginBackgroundImage" src="images/laptop.png" alt="laptop image" />
            <div className="flex-col items-center">
                <div className="logoAndText">
                    {logo}
                    <h1>StudyFlow</h1>
                    <p>Enter your credentials to access your academic portal.</p>
                </div>

                <LoginForm></LoginForm>
                
                <div className="infoPages">
                    <p>Privacy Policy</p>
                    <p>•</p>
                    <p>Terms of Service</p>
                    <p>•</p>
                    <p>Support</p>
                </div>
            </div>
        </main>
    )
}