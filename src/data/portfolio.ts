/**
 * Static content for the About page (formerly "Root").
 * Copy is intentionally short to support the portfolio/publication
 * direction (no resume bullet dumps).
 */

export type WhatIBuildCard = {
    title: string;
    description: string;
    icon: 'spatial' | 'saas' | 'legacy' | 'devops';
    accent: 'orange' | 'pink' | 'blue' | 'green';
};

export const whatIBuild: WhatIBuildCard[] = [
    {
        title: 'Spatial Web Platforms',
        description:
            'Immersive 3D and XR experiences that run in the browser across 15+ device types.',
        icon: 'spatial',
        accent: 'orange',
    },
    {
        title: 'Enterprise SaaS',
        description:
            'Multi-tenant platforms built to scale reliably for demanding enterprise users.',
        icon: 'saas',
        accent: 'pink',
    },
    {
        title: 'Legacy Modernization',
        description:
            'Re-platforming legacy systems into modern, maintainable web stacks.',
        icon: 'legacy',
        accent: 'blue',
    },
    {
        title: 'DevOps & Delivery',
        description:
            'CI/CD, containers, and release pipelines that cut cycles from weeks to days.',
        icon: 'devops',
        accent: 'green',
    },
];

export type Metric = {
    value: string;
    label: string;
    icon: 'people' | 'rocket' | 'device' | 'growth';
};

export const impactMetrics: Metric[] = [
    { value: '50+', label: 'Clients served', icon: 'people' },
    { value: '12+', label: 'Major releases', icon: 'rocket' },
    { value: '15+', label: 'Device types', icon: 'device' },
    { value: '30%', label: 'Avg. adoption lift', icon: 'growth' },
];

export type CraftTool = {
    name: string;
    /** Filename inside src/assets/icons/skills (resolved at build time). */
    icon?: string;
};

export type CraftDomain = {
    title: string;
    description: string;
    icon: 'spatial' | 'product' | 'cloud' | 'platform';
    tools: CraftTool[];
};

export const craftAndTools: CraftDomain[] = [
    {
        title: 'Spatial / 3D Web',
        description: 'Real-time 3D and XR for the open web.',
        icon: 'spatial',
        tools: [
            { name: 'Three.js' },
            { name: 'A-Frame' },
            { name: 'Babylon.js' },
            { name: 'WebXR' },
        ],
    },
    {
        title: 'Product Engineering',
        description: 'Typed, component-driven product development.',
        icon: 'product',
        tools: [
            { name: 'React', icon: 'react-original.svg' },
            { name: 'TypeScript', icon: 'typescript-original.svg' },
            { name: 'Next.js', icon: 'nextjs-original.svg' },
            { name: 'JavaScript', icon: 'javascript-original.svg' },
        ],
    },
    {
        title: 'Cloud & Delivery',
        description: 'Shipping and operating software safely.',
        icon: 'cloud',
        tools: [
            { name: 'AWS', icon: 'aws-original.svg' },
            { name: 'Docker', icon: 'docker-original.svg' },
            { name: 'GitHub', icon: 'github-original.svg' },
            { name: 'GitLab', icon: 'gitlab-original.svg' },
        ],
    },
    {
        title: 'Platform Modernization',
        description: 'Bridging legacy systems to modern platforms.',
        icon: 'platform',
        tools: [
            { name: 'Java', icon: 'java-original.svg' },
            { name: 'PostgreSQL', icon: 'postgresql-original.svg' },
            { name: 'MySQL', icon: 'mysql-original.svg' },
            { name: 'Python', icon: 'python-original.svg' },
        ],
    },
];
