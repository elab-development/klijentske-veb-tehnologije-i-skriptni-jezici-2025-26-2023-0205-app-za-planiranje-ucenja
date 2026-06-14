import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import { logo } from "~/constants";
import type { AuthUser } from "~/api/auth";

export function Header(){
    const [user, setUser] = useState<AuthUser | null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");

        if (savedUser) {
        setUser(JSON.parse(savedUser));
        }
    }, []);

    return(
        <header className="workHeader">
                <div className="flex items-center gap-5">
                    {logo}
                    <p className="text-[20px]">StudyFlow</p>
                </div>
                <div className="flex items-center gap-5">
                    <NavLink to="/" className={({ isActive }) => isActive ? "activeLink" : ""}>
                    Dashboard
                    </NavLink>

                    <NavLink to="/subjects" className={({ isActive }) => isActive ? "activeLink" : ""}>
                    Subjects
                    </NavLink>

                    <NavLink to="/study-plan" className={({ isActive }) => isActive ? "activeLink" : ""}>
                    Study Plan
                    </NavLink>
                </div>     
                <NavLink to="/profile" className={({ isActive }) =>`flex items-center gap-2 ${isActive ? "activeLink" : ""}`}>
                    {user?.full_name || "Profile"}
                    <img src={user?.profile_pic_url || "/images/profile.png"} alt="" />
                </NavLink>
            </header>
    )
}