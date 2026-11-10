import type {Metadata} from "next";
import {Footer} from "@/src/components/layout/Footer";
import {Navbar} from "@/src/components/layout/Navbar";
import {primaryFont, technicalFont} from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://estomotus.com"),
    title: {
        default: "ESTO MOTUS — Motion hardware for robotics",
        template: "%s — ESTO MOTUS",
    },
    description: "Modular motion hardware for robotics and physical AI, built in Germany.",
};

export default function RootLayout({children}: LayoutProps<"/">) {
    return (
        <html lang="en" className={`${primaryFont.variable} ${technicalFont.variable}`}>
        <body data-theme="dark" className="min-h-screen antialiased">
        <Navbar/>
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
