import { useEffect, useState } from "react";
import { arrowRightBlack, download, moon, security, sun, theme } from "~/constants";

export function Settings(){
    const [selectedTheme, setSelectedTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const initialTheme = savedTheme ?? "light";

        setSelectedTheme(initialTheme);
        document.documentElement.setAttribute("data-theme", initialTheme);
    }, []);

    function changeTheme(theme: "light" | "dark") {
        setSelectedTheme(theme);
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }

    return(
        <div className="stats">
            <h3>
                SETTINGS
            </h3>
            <div className="settingsHolder">
                <div className="flex flex-col gap-3">
                    <div className="settingsSectionHeader">
                        {theme}
                        <p>Appearance</p>
                    </div>
                    <div className="flex gap-5">
                        <button
                            className={`themeCard ${selectedTheme === "light" ? "active" : ""}`}
                            type="button"
                            onClick={() => changeTheme("light")}
                        >
                            {sun}
                            Light
                        </button>
                        <button
                            className={`themeCard ${selectedTheme === "dark" ? "active" : ""}`}
                            type="button"
                            onClick={() => changeTheme("dark")}
                        >
                            {moon}
                            Dark
                        </button>
                    </div>                 
                </div>

                <div className="flex flex-col gap-3">
                    <div className="settingsSectionHeader">
                        {security}
                        <p>Privacy</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <button className="bigSettingButton">
                            <p>Export Study Data</p>
                            {download}
                        </button>
                        <button className="bigSettingButton">
                            <p>Change Password</p>
                            {arrowRightBlack}
                        </button>
                    </div>                 
                </div>
            </div>
        </div>
    )
}