import {LocalMedia} from "@/app/components/local-media";
import {motionMedia} from "@/app/data/media";

export function MotionMedia({priority = false}: { priority?: boolean }) {
    return <div className="motion-media"><LocalMedia asset={motionMedia.joint} priority={priority}
                                                     sizes="(max-width: 760px) 100vw, 56vw"/></div>;
}
