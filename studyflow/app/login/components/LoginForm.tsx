import { arrowRight, lockIcon, mailIcon } from "~/constants";
import { CustomInput } from "./CustomInput";


export function LoginForm(){

    return(
        <form className="loginForm">
            <div className="flex flex-col gap-6.25 w-full">

                <CustomInput
                    label="Email Address"
                    icon={mailIcon}
                    type="text"
                    name="email"
                    placeholder="name@example.com"
                />

                <CustomInput
                    label="Password"
                    icon={lockIcon}
                    rightText="Forgot Password?"
                    rightHref="/forgot-password"
                    type="password"
                    name="password"
                    placeholder="********"
                />

                <label className="keepLoggedIn">
                    <input type="checkbox" name="rememberMe" />
                    <span>Keep me logged in</span>
                </label>

                <button className="formBtn">
                    Log In {arrowRight}
                </button>
            </div>
        </form>
    );
}
