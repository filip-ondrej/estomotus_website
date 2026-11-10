export const integrationSteps = [
    {
        id: "mount",
        title: "Mount the joint.",
        short: "A mechanical interface you can design around.",
        detail: "The transmission, motor and feedback would be designed as one joint. Your team integrates the joint into the robot, rather than designing each connection inside it.",
        focus: "Mechanical integration",
        result: "Your robot’s structure",
    },
    {
        id: "connect",
        title: "Connect & configure.",
        short: "Bring power, communication and control together.",
        detail: "Matched electronics and firmware would handle motor control and feedback. A shared communication interface would make setup consistent across the motion system.",
        focus: "Control, feedback & communication",
        result: "Your system configuration",
    },
    {
        id: "develop",
        title: "Build the behaviour.",
        short: "Work through accessible software interfaces.",
        detail: "Developer tools would expose motion commands and joint feedback through documented interfaces. Your software team can focus on how the robot should move.",
        focus: "Software integration",
        result: "Your robot’s application",
    },
];
