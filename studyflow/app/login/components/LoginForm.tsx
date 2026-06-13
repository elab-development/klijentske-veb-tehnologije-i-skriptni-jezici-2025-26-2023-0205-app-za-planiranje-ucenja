import { arrowRight, lockIcon, mailIcon } from "~/constants";
import { CustomInput } from "./CustomInput";
import { loginUser } from "~/api/auth";
import { useNavigate } from "react-router";
import { useState } from "react";
import { ApiError } from "~/api/client";


export function LoginForm(){
    const navigate = useNavigate();
    const [error, setError] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");

        const formData = new FormData(event.currentTarget);

        const email = String(formData.get("email"));
        const password = String(formData.get("password"));

        if (!email || !password) {
            setError("Email and password are required.");
            return;
        }

        try {
            const response = await loginUser({
                email,
                password,
            });

            localStorage.setItem("token", response.token);
            localStorage.setItem("user", JSON.stringify(response.user));

            navigate("/profile");
        } catch (error) {
            if (error instanceof ApiError && error.status === 401) {
                setError("Invalid email or password.");
                return;
            }

            if (error instanceof ApiError && error.status === 404) {
                setError("User does not exist.");
                return;
            }

            setError("Login failed. Please try again.");
        }
    }
    return(
        <form className="loginForm" onSubmit={handleSubmit}>
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
                {error && (
                    <p className="text-red-500 text-sm font-medium">
                        {error}
                    </p>
                )}
                <button className="formBtn">
                    Log In {arrowRight}
                </button>
            </div>
        </form>
    );
}
