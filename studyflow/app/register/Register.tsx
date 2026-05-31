import { Link } from "react-router";
import { RegisterForm } from "./components/RegisterForm";


export function Register(){

    return(
        <main className="registerMain">
            <div className="">

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