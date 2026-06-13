import { calendar, edit, quote, signOut, uni } from "~/constants";
import { Stats } from "./components/Stats";
import { Settings } from "./components/Settings";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import type { AuthUser } from "~/api/auth";

export function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState<AuthUser | null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (!savedUser || !token) {
            navigate("/login");
            return;
        }

        setUser(JSON.parse(savedUser));
    }, [navigate]);

    if (!user) {
        return <main className="workPageMain">Loading profile...</main>;
    }

    const joinedDate = new Date(user.created_at).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });

    function handleSignOut() {
        localStorage.clear();
        navigate("/login");
    }

    return (
        <main className="workPageMain">
            <div className="profileHolder">
                <div className="flex flex-col items-center w-full">
                    <div className="profileInfo">
                        <div className="flex items-center gap-5">
                            <div className="profileImgHolder">
                                <img src={user.profile_pic_url || "/images/profile.png"} alt="" />
                                <button>
                                    {edit}
                                </button>
                            </div>
                            <div>
                                <p>{user.full_name}</p>
                                <div className="profileDetails">
                                    <div className="profileDetailItem">
                                        {uni}
                                        <p className="text-(--text-light)">{user.university_name}</p>
                                    </div>
                                    <div className="profileDetailItem">
                                        {calendar}
                                        <p className="text-(--text-light) text-[14px] font-medium">Joined {joinedDate}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full flex items-start">
                            <button className="signOutBtn" onClick={handleSignOut}>
                                {signOut}
                                Sign Out
                            </button>
                        </div>
                    </div>
                    <div className="personalBio">
                        <div className="flex gap-2.5 items-center justify-left">
                            {quote}
                            <h1>PERSONAL BIO</h1>
                        </div>
                        <p className="bioText">
                            {user.biography || "No biography added yet."}
                        </p>
                        <div className="tags flex gap-2">
                            <p>#AI</p>
                            <p>#Python</p>
                            <p>#Ethics</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center px-5! gap-5">


                    <Stats />

                    <Settings />
                </div>
            </div>
        </main>
    )
}
