import { arrowRight, lockIcon, mailIcon, uni, userIcon } from "~/constants";
import { CustomInput } from "~/login/components/CustomInput";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { registerUser } from "~/api/auth";
import { ApiError } from "~/api/client";

export function RegisterForm(){
    const navigate = useNavigate();
    const [error, setError] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");

        const formData = new FormData(event.currentTarget);

        const fullName = String(formData.get("fullName"));
        const universityName = String(formData.get("universityName"));
        const email = String(formData.get("email"));
        const password = String(formData.get("password"));

        if (!fullName || !universityName || !email || !password) {
            setError("All fields are required.");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }

        try {
            const response = await registerUser({
                fullName,
                universityName,
                email,
                password,
            });

            localStorage.setItem("token", response.token);
            localStorage.setItem("user", JSON.stringify(response.user));

            navigate("/profile");
        } catch (error) {
            if (error instanceof ApiError && error.status === 409) {
                setError("User with this email already exists.");
                return;
            }

            setError("Registration failed. Please check your data.");
            }
        }


    return(
        <form className="loginForm" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6.25 w-full">

                        <div>
                            <p className="text-[16px] text-(--teriary)">Get Started</p>
                            <p className="text-[16px] text-(--text-light)">Create your academic profile to begin.</p>
                        </div>
                        <CustomInput
                        label="Full Name"
                        icon={userIcon}
                        type="text"
                        name="fullName"
                        placeholder="Petar Petrovic"
                        />
                        
                        <CustomInput
                            label="University Name"
                            icon={uni}
                            type="text"
                            name="universityName"
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
                        {error && (
                        <p className="text-red-500 text-sm font-medium">
                            {error}
                        </p>
                        )}
                        <button className="formBtn" type="submit">
                            Sign Up {arrowRight}
                        </button>

                        <hr className="text-(--border-color-dark)"/>

                        <p className="text-center text-(--text-light)">By signing up, you agree to our <Link to="" className="text-(--teriary) font-medium">Terms of Service</Link> and <Link to="" className="text-(--teriary) font-medium">Privacy Policy</Link></p>
                    </div>       
                </form>
    );
}
