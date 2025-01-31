export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];



export const projects = [
    {
        title: "Can't go back",
        desc: 'A zombie-themed survival game built with custom digital assets using Unity and C#.',
        subdesc: 'Created for McGameJam, this project won the Special Participant Favorite Award based on community voting.',
        href: 'https://github.com/toni8699/McGameJame2020',
        texture: '/textures/project/game.mp4',
        logo: '/Pics/gamejamFarm.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Unity',
                path: 'assets/Unity.png',
            },
            {
                id: 2,
                name: 'C#',
                path: 'assets/CSharp.webp',
            },
            {
                id: 3,
                name: '.NET',
                path: 'assets/NET.png',
            },
        ],
    },
    {
        title: 'Chess',
        desc: 'A chess game built with Java and JavaFX libraries.',
        subdesc: 'A chess game created from scratch.',
        href: 'https://github.com/toni8699/McGameJame2020',
        texture: 'textures/project/chess.mp4',
        logo: '/assets/Pawn.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Java',
                path: '/assets/java.svg',
            },
        ],
    },

    {
        title: 'Personal Website',
        desc: 'My personal portfolio website made with React.js and Three.js.',
        subdesc: "Well, this is technically not a project, but it took me a while to make, so I'll put it in here anyway.",
        href: './',
        texture: '/textures/project/resume.mp4',
        logo: '/assets/JS.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Three.js',
                path: '/assets/threejs.png',
            },
            {
                id: 3,
                name: 'Tailwind',
                path: '/assets/tailwindcss.png',
            },
        ],
    },
    {
        title: 'Makefile and C Project Template',
        desc: 'This project is a template for a Makefile and C project.',
        subdesc:
            'I created this project to help me learn how to use Makefiles and organize C projects.',
        href: 'https://github.com/toni8699/McGameJame2020',
        texture: '/textures/project/makefile.mp4',
        logo: '/assets/C_Logo.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'C',
                path: '/assets/C_Logo.png',
            },
            {
                id: 2,
                name: 'Make',
                path: '/assets/make.png',
            },
        ],
    },
];



export const timeline= [
    {
        id: 1,
        name: 'McGill University',
        pos: 'Computer Science and Mathematics',
        duration: '2024 - Present',
        title: "Re-admitted to McGill University for a 3rd year of study with a focus on computer science and mathematics. ",
        icon: '/assets/framer.svg',
        animation: 'm_shrek_roar2',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'm_Shrek_int_footTap1',
    },
    {
        id: 3,
        name: 'McGill University',
        pos: 'Computer Science and Mathematics',
        duration: '2019 - 2021',
        title:'',
        icon: '/assets/notion.svg',
        animation: 'm_Shrek_int_head1',
    }, {
        id: 4,
        name: 'McGill University',
        pos: 'Computer Science and Mathematics',
        duration: '2019 - 2021',
        title:'',
        icon: '/assets/notion.svg',
        animation: 'm_Shrek_wthr_rain_AW',
    },
];