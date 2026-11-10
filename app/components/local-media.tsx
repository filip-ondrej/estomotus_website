import Image from "next/image";
import type {ReactNode} from "react";
import type {LocalMediaAsset} from "@/app/data/media";

/** Slots reserve their layout before approved local media is available. */
export function LocalMedia({asset, children, priority = false, sizes = "100vw"}: {
    asset: LocalMediaAsset;
    children?: ReactNode;
    priority?: boolean;
    sizes?: string;
}) {
    return <div className="local-media">
        {asset.src ? asset.kind === "video" ? (
            <video controls playsInline preload="metadata" poster={asset.poster} aria-label={asset.alt}>
                <source src={asset.src}/>
                Your browser does not support this video. <a href={asset.src}>Download the film</a>.
            </video>
        ) : <Image src={asset.src} alt={asset.alt} fill sizes={sizes} preload={priority}
                   className="local-media-image"/> : children}
    </div>;
}
