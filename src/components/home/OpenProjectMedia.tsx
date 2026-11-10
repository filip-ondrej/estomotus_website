"use client";

// @refresh reset
// Remount this media boundary on edits so Fast Refresh cannot retain stale hooks.

import Image from "next/image";
import {useEffect, useRef, useSyncExternalStore} from "react";
import type {ProjectMedia} from "@/app/data/projects";

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribe(callback: () => void) {
    const query = window.matchMedia(motionQuery);
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
}
const getReducedMotion = () => window.matchMedia(motionQuery).matches;
const getServerReducedMotion = () => true;

export function OpenProjectMedia({media, previewOnly = false}: {media?: ProjectMedia; previewOnly?: boolean}) {
    const video = useRef<HTMLVideoElement>(null);
    const reducedMotion = useSyncExternalStore(subscribe, getReducedMotion, getServerReducedMotion);

    useEffect(() => {
        const element = video.current;
        if (!element) return;
        if (reducedMotion) element.pause();
        else void element.play().catch(() => {
            // Browser autoplay policies may require the native play control.
        });
    }, [reducedMotion, media]);

    return <div className="em-project-media">
        {/* Linked cards use a video's poster to keep playback controls outside links. */}
        {media && (media.type === "image" || previewOnly) ?
            <Image src={media.type === "image" ? media.src : media.poster} alt={media.alt} fill sizes="(max-width: 900px) 90vw, (min-width: 1600px) 720px, 45vw"/> :
            media?.type === "video" ?
                <video ref={video} src={media.src} poster={media.poster} aria-label={media.alt}
                       autoPlay={!reducedMotion} muted loop playsInline controls preload="none"/> :
                <span className="em-project-media-placeholder">Project image</span>}
    </div>;
}
