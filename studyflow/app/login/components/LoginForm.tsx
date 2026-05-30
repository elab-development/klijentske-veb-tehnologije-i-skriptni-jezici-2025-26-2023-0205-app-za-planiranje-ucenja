import { arrowRight, lockIcon, mailIcon } from "~/constants";


export function LoginForm(){

    return(
        <form className="loginForm">
            <div className="flex flex-col gap-6.25 w-full">

                <div>
                    <div className="flex justify-between">
                        <p className="formInputName">Email Address</p>
                    </div>
                    <div className="customInput">
                        {mailIcon}
                        <input type="text" name="email" placeholder="name@example.com"/>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between">
                        <p className="formInputName">Password</p>
                        <p className="formInputAlternative">Forgot Password?</p>
                    </div>
                    <div className="customInput">
                        {lockIcon}
                        <input type="password" name="password" placeholder="••••••••"/>
                    </div>
                </div>
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