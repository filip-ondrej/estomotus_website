"use client";

import {useEffect, useRef, useState, useSyncExternalStore, type ReactNode} from "react";

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeToMotion(callback: () => void) {
    const query = window.matchMedia(motionQuery);
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
}
const getReducedMotion = () => window.matchMedia(motionQuery).matches;
const getServerReducedMotion = () => true;

export function ProgressWorkshopMedia({src, poster, children}: {
    src: string | null;
    poster?: string;
    children: ReactNode;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [failed, setFailed] = useState(false);
    const [hasFrame, setHasFrame] = useState(false);
    const reducedMotion = useSyncExternalStore(subscribeToMotion, getReducedMotion, getServerReducedMotion);
    const showVideo = Boolean(src) && !failed && (!reducedMotion || Boolean(poster));

    useEffect(() => {
        const video = videoRef.current;
        if (!video || !src || !showVideo || reducedMotion) return;

        let inView = false;
        let disposed = false;
        const shouldPlay = () => !disposed && inView && !document.hidden;
        const syncPlayback = () => {
            if (!shouldPlay()) {
                video.pause();
                return;
            }
            // Do not request video bytes until the slot is visible and motion is allowed.
            if (!video.getAttribute("src")) video.src = src;
            void video.play().then(() => {
                if (!shouldPlay()) video.pause();
            }).catch(() => {
                // Autoplay can be blocked by browser settings; retain the static fallback.
            });
        };
        const guardPlayback = () => { if (!shouldPlay()) video.pause(); };
        const observer = new IntersectionObserver(([entry]) => {
            inView = entry.isIntersecting;
            syncPlayback();
        });
        observer.observe(video);
        document.addEventListener("visibilitychange", syncPlayback);
        video.addEventListener("play", guardPlayback);
        return () => {
            disposed = true;
            observer.disconnect();
            document.removeEventListener("visibilitychange", syncPlayback);
            video.removeEventListener("play", guardPlayback);
            video.pause();
            video.removeAttribute("src");
            video.load();
        };
    }, [src, showVideo, reducedMotion]);

    const showsWorkshop = showVideo && (Boolean(poster) || hasFrame);
    return <figure className="em-release-visual">
        {showVideo ? <div className="em-release-media em-workshop-frame">
            <div className="em-workshop-fallback" aria-hidden={showsWorkshop}>{children}</div>
            <video ref={videoRef} className="em-workshop-video" data-visible={showsWorkshop}
                   poster={poster} autoPlay={!reducedMotion} muted loop playsInline preload="none"
                   aria-label="Concept visualization · AI-generated" aria-hidden={!showsWorkshop}
                   onPlaying={() => setHasFrame(true)} onError={() => setFailed(true)}>
                Concept video unavailable.
            </video>
        </div> : children}
        <figcaption className="em-meta">
            {showsWorkshop ? "Concept visualization · AI-generated" : "Schematic study · Not a product photograph"}
        </figcaption>
    </figure>;
}
