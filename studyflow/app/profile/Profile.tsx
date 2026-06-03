import { calendar, edit, quote, signOut, uni } from "~/constants";

export function Profile(){
    return(
        <main className="workPageMain">
            <div className="profileHolder">
                <div className="profileInfo">
                    <div className="flex items-center gap-5">
                        <div className="profileImgHolder">
                            <img src="/images/profile.png" alt="" />
                            <div>
                                {edit}
                            </div>
                        </div>
                        <div>
                            <p>John Doe</p>
                            <div className="profileDetails">
                                <div className="profileDetailItem">
                                    {uni}
                                    <p className="text-(--text-light)">Univerzitet u Beogradu</p>
                                </div>
                                <div className="profileDetailItem">
                                    {calendar}
                                    <p className="text-(--text-light) text-[14px] font-medium">Joined Sept 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-full flex items-start">
                        <button className="signOutBtn">
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
                        "Aspiring machine learning engineer with a focus on ethical AI. Currently balancing my final semester projects with a part-time internship at TechFlow."
                    </p>
                    <div className="tags flex gap-2">
                        <p>#AI</p>
                        <p>#Python</p>
                        <p>#Ethics</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
