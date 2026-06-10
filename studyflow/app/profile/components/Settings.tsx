import { arrowRight, arrowRightBlack, download, moon, security, sun, theme } from "~/constants";

export function Settings(){
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
                        <button className="themeCard active">
                            {sun}
                            Light
                        </button>
                        <button className="themeCard">
                            {moon}
                            Light
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