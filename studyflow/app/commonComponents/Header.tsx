import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import { logo } from "~/constants";
import { User } from "~/models/User";

export function Header() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        function loadUser() {
            const savedUser = localStorage.getItem("user");

            if (savedUser) {
                setUser(new User(JSON.parse(savedUser)));
            } else {
                setUser(null);
            }
        }

        loadUser();

        window.addEventListener("userUpdated", loadUser);

        return () => {
            window.removeEventListener("userUpdated", loadUser);
        };
    }, []);

    return (
        <header className="workHeader">
            <div className="headerBrand">
                {logo}
                <p>StudyFlow</p>
            </div>
            <nav className="headerNav" aria-label="Main navigation">
                <NavLink to="/" className={({ isActive }) => isActive ? "activeLink" : ""}>
                    Dashboard
                </NavLink>

                <NavLink to="/subjects" className={({ isActive }) => isActive ? "activeLink" : ""}>
                    Subjects
                </NavLink>

                <NavLink to="/study-plan" className={({ isActive }) => isActive ? "activeLink" : ""}>
                    Study Plan
                </NavLink>
            </nav>
            <NavLink to="/profile" className={({ isActive }) => `headerProfile ${isActive ? "activeLink" : ""}`}>
                {user?.displayName || "Profile"}
                <img src={user?.profileImage || "/images/profile.png"} alt="" />
            </NavLink>
        </header>
    )
}
