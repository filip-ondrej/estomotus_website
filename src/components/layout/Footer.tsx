import Link from "next/link";
import {Wordmark} from "@/src/components/ui/Wordmark";
import "./Footer.css";

const links = [
    ["Hardware", "/gearbox"],
    ["Projects", "/projects"],
    ["About", "/about"],
    ["For teams", "/teams"],
];

const legalLinks = [
    ["Impressum", "/impressum"],
    ["Datenschutz", "/datenschutz"],
];

export function Footer() {
    return <footer className="site-footer" data-theme="dark" data-nav-theme="dark">
        <div className="shell footer-shell">
            <div className="footer-brand">
                <Link href="/" aria-label="ESTO MOTUS home"><Wordmark/></Link>
                <p className="footer-positioning">Motion hardware for robotics and physical AI.
                    <span>Engineered in Germany.</span>
                </p>
                <p className="footer-copyright">© 2026 ESTO MOTUS</p>
            </div>
            <nav className="footer-column" aria-labelledby="footer-explore">
                <h2 id="footer-explore">Explore</h2>
                <ul>{links.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>
            </nav>
            <div className="footer-column footer-contact" aria-labelledby="footer-contact">
                <h2 id="footer-contact">Contact</h2>
                <p>Investors, press &amp; inquiries</p>
                <a href="mailto:hello@estomotus.com">hello@estomotus.com</a>
            </div>
            <nav className="footer-column" aria-labelledby="footer-legal">
                <h2 id="footer-legal">Legal</h2>
                <ul>{legalLinks.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>
            </nav>
        </div>
    </footer>;
}
