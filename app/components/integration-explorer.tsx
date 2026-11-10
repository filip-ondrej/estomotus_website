"use client";

import {useState} from "react";
import {integrationSteps} from "@/app/data/integration";

export function IntegrationExplorer() {
    const [selected, setSelected] = useState(0);
    const step = integrationSteps[selected];

    return <div className="integration-workbench">
        <div className="workflow-controls" role="group" aria-label="Explore the intended integration workflow">
            {integrationSteps.map((item, index) => <button key={item.id} type="button" aria-pressed={selected === index}
                                                           aria-controls="integration-detail"
                                                           onClick={() => setSelected(index)}><span
                className="workflow-index">0{index + 1}</span><span><strong>{item.title}</strong><span>{item.short}</span></span><span
                className="workflow-arrow" aria-hidden="true">↗</span></button>)}
        </div>
        <div className="workflow-detail" id="integration-detail" aria-live="polite" aria-atomic="true">
            <div className="system-map" data-step={step.id} role="img"
                 aria-label={`Proposed platform: transmission, motor, feedback and control connected to software interfaces. Focus: ${step.focus}.`}>
                <div className="system-boundary"><span className="system-caption">ESTO MOTUS / Integrated joint</span>
                    <div className="joint-stack">
                        <div className="stack-piece transmission"><span>Transmission</span><i aria-hidden="true"/></div>
                        <div className="stack-piece motor"><span>Motor</span><i aria-hidden="true"/></div>
                        <div className="stack-piece control"><span>Feedback<br/>& control</span><i aria-hidden="true"/>
                        </div>
                    </div>
                    <div className="system-interface">Communication · Firmware · Software interface</div>
                </div>
                <div className="system-connection" aria-hidden="true"><span/>↕<span/></div>
                <div className="robot-application">{step.result}</div>
            </div>
            <div className="workflow-explanation"><p>{step.focus}</p><p>{step.detail}</p></div>
        </div>
    </div>;
}
