// Future platform content: no capability here represents a shipping integration.
export const solutionCategories = [
    {
        id: "integrated", label: "Integrated", status: "planned",
        headline: "One joint. Everything inside.",
        description: "No more engineering a drivetrain from separate parts. Motor, cycloidal gearbox, encoder and feedback brought together in one compact, integrated module.",
        metadata: ["Cycloidal reduction", "Integrated encoder", "STEP envelope models"],
    },
    {
        id: "tuned", label: "Tuned", status: "planned",
        headline: "Closed-loop control. Preconfigured.",
        description: "Reduce repeated calibration and control-loop tuning. Motor control and feedback designed to work together, with hardware-matched parameters.",
        metadata: ["Position", "Velocity", "Torque control", "Factory calibration"],
    },
    {
        id: "connected", label: "Connected", status: "planned",
        headline: "Connect joints. Build robots.",
        description: "Replace separate motor drivers and complicated wiring with one consistent interface, designed to scale from a single axis to multi-joint robotic systems.",
        metadata: ["CAN / CAN-FD", "Chainable connections", "Automatic discovery"],
    },
    {
        id: "software", label: "Software", status: "planned",
        headline: "From simulation to real hardware.",
        description: "Develop, simulate and deploy with familiar robotics tools, without rebuilding low-level drivers and integration software for every project.",
        metadata: ["Python SDK", "ROS 2", "LeRobot", "MuJoCo", "NVIDIA Isaac Sim"],
    },
] as const;
