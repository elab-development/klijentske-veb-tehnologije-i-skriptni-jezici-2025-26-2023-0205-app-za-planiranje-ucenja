import { Link } from "react-router";

export function Footer(){
    return(
        <footer>
            <div className="flex items-center ">
                <p className="size-4.5">StudyFlow</p>
            </div>
            <div className="flex flex-col justify-end items-center pb-2!">
                <p className="text-(--link-inactive) text-[13px]">© 2026 StudyFlow. Empowering calm productivity.</p>
            </div>
            <div className="flex items-center justify-end gap-8">
                <Link className="footerLink" to="/about">About</Link>
                <Link className="footerLink" to="/privacy">Privacy</Link>
                <Link className="footerLink" to="/terms">Terms</Link>
                <Link className="footerLink"  to="/support">Support</Link>
            </div>
        </footer>
    )
}