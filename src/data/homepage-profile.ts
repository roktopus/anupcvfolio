export type HomeProfileCard = {
    title: string;
    items: string[];
    /** Full width on large screens (e.g. long impact lists). */
    wide?: boolean;
};

export const homepageProfileCards: HomeProfileCard[] = [
    {
        title: '🎯 Current Role and Impact',
        wide: true,
        items: [
            'Spearheading modernization of enterprise 3D/XR platforms across 50+ clients (FBI, NASA, law enforcement, real estate, automotive)',
            'Driving ~30% YoY adoption through platform innovation and performance improvements',
            'Leading cross-functional engineering delivering 12+ major releases (up ~35% engagement, down ~50% onboarding time)',
            'Architecting high-performance 3D web experiences (Three.js, WebGL/WebGPU, krpano) across 15+ device types',
            'Building LiDAR-based spatial workflows using Apple RoomPlan / ARMesh for real-world measurement',
            'Developing real-time XR apps (React Three Fiber + physics engines) for browser-based simulation',
            'Improving forensic workflows via CSI360, increasing case efficiency by ~25% across agencies',
            'Automating CI/CD pipelines (Docker + Git), reducing release cycles from 2 weeks to 48 hours',
        ],
    },
    {
        title: '🧠 Core Expertise',
        items: [
            'Engineering: C → C++ → VB → web stack → modern JS/TS → Python',
            'Frameworks and tools: React, Next.js, Angular, Flutter, Three.js, krpano, WebGL/WebGPU',
            'Platforms: Linux (Ubuntu, Alma, RHEL, CentOS), macOS, Windows, embedded systems',
            'Cloud and DevOps: AWS, Azure, Rackspace, DigitalOcean, Docker, CI/CD pipelines, Git',
            'Data: MySQL, PostgreSQL, Oracle',
        ],
    },
    {
        title: '💪 Strengths',
        items: [
            'Fast problem-solving with strong systems-level thinking',
            'Scales from architecture to execution to deployment',
            'Strong communication across engineering and business',
            'Focus on performance, security (OWASP), and real-world usability',
        ],
    },
    {
        title: '🧾 Additional',
        wide: true,
        items: [
            'APIs and tools: Postman, SOAPUI, Splunk',
            'Project management: JIRA, Rally, Azure DevOps, Linear',
            'Messaging: Twilio, SendGrid',
        ],
    },
];
