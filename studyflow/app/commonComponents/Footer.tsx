import { Link } from "react-router";

export function Footer(){
    return(
        <footer>
            <div className="footerBrand">
                <p>StudyFlow</p>
            </div>
            <div className="footerMeta">
                <p>© 2026 StudyFlow. Empowering calm productivity.</p>
            </div>
            <nav className="footerNav" aria-label="Footer navigation">
                <Link className="footerLink" to="/about">About</Link>
                <Link className="footerLink" to="/privacy">Privacy</Link>
                <Link className="footerLink" to="/terms">Terms</Link>
                <Link className="footerLink" to="/support">Support</Link>
            </nav>
        </footer>
    )
}
