import { Link, NavLink } from "react-router";
import { logo } from "~/constants";

export function Header(){
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
                <div className="flex items-center gap-5">
                    <NavLink to="/profile" className={({ isActive }) => isActive ? "activeLink" : ""}>
                        Profile Name
                    </NavLink>
                    <img src="/images/profile.png" alt="" />
                </div>
            </header>
    )
}