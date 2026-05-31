import { arrowRight, lockIcon, mailIcon, uni, userIcon } from "~/constants";
import { CustomInput } from "~/login/components/CustomInput";
import { Link } from "react-router";

export function RegisterForm(){
    return(
        <form className="loginForm">
                    <div className="flex flex-col gap-6.25 w-full">

                        <div>
                            <p className="text-[16px] text-(--teriary)">Get Started</p>
                            <p className="text-[16px] text-(--text-light)">Create your academic profile to begin.</p>
                        </div>
                        <CustomInput
                        label="Full Name"
                        icon={userIcon}
                        type="text"
                        name="uniname"
                        placeholder="Petar Petrovic"
                        />
                        
                        <CustomInput
                            label="University Name"
                            icon={uni}
                            type="text"
                            name="uniname"
                            placeholder="Univerzitet u Beogradu"
                        />
                        
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
                            type="password"
                            name="password"
                            placeholder="********"
                        />

                        <button className="formBtn">
                            Sign Up {arrowRight}
                        </button>

                        <hr className="text-(--border-color-dark)"/>

                        <p className="text-center text-(--text-light)">By signing up, you agree to our <Link to="" className="text-(--teriary) font-medium">Terms of Service</Link> and <Link to="" className="text-(--teriary) font-medium">Privacy Policy</Link></p>
                    </div>       
                </form>
    );
}
