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
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
    {
        id: 5,
        name: 'CV',
        href: './Resume 2025 SWE.pdf',
    }
];



export const projects = [
    {
        title: 'Spotafake',
        desc: 'A full-stack Spotify-inspired music library web application.',
        subdesc: 'Fully responsive web application built with Next.js, Typescript, TailWinds CSS, Supabase and Stripe subscription ' +
            '',
        href: 'https://spotafake.vercel.app',
        texture: 'textures/project/Spotafake.mp4',
        logo: '/assets/Blue.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Next.js',
                path: '/assets/nextjs.png',
            },
            {
                id: 2,
                name: 'Typescript',
                path: '/assets/TS.png',
            },
            {
                id: 3,
                name: 'Tailwind',
                path: '/assets/tailwindcss.png',
            },
            {
                id: 4,
                name: 'Supabase',
                path: '/assets/supabase.jpg',
            },
            {
                id: 6,
                name: 'Stripe',
                path: '/assets/stripe.jpeg',
            },
        ],
    },

    {
        title: "Can't go back",
        desc: 'A zombie-themed survival game built with custom digital assets using Unity and C#.',
        subdesc: '2-D zombie-themed game featuring custom digital assets, collision detection, and player movement.',
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
        subdesc: 'A fully functional chess game built from scratch in Java, ' +
            'featuring an intuitive UI, valid move enforcement, and game rules implementation, including check, checkmate, and stalemate detection. The game supports both player vs. player and player vs. AI modes, with a structured codebase following object-oriented principles.',
        href: 'https://github.com/toni8699/Chess',
        texture: 'textures/project/Chess.mp4',
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
        desc: 'My personal interactive portfolio website',
        subdesc: "Fully-responsive website built using popular frameworks like React.js, Three.js for 3d graphics and Tailwind CSS for styling.",
        href: 'https://github.com/toni8699/resume/tree/main',
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
        title: 'Mysh Shell',
        desc: 'A simple shell built in C.',
        subdesc:
            'This Operating Systems project is designed to create a simple yet functional shell interpreter in C. It encompasses key operating system concepts such as process management, scheduling algorithms, and memory management. The interpreter supports both interactive and batch modes, allowing users to execute commands,' +
            ' manage files, and run scripts efficiently. Through the implementation of various scheduling algorithms like First-Come-First-Served (FCFS), Shortest Job First (SJF), and Round Robin (RR), the project provides a practical exploration of how operating systems handle process execution and resource allocation..',
        href: 'https://github.com/toni8699/OS',
        texture: '/textures/project/OS.mp4',
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
    {
        title: 'Makefile and C Project Template',
        desc: 'Template for a Makefile and C project.',
        subdesc:
            'A well-structured and easy-to-use template Makefile for small to medium-sized C project.',
        href: 'https://github.com/toni8699/C_template',
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
        title: "Re-admitted to McGill University for a Computer Science degree.",
        icon: '/assets/mcgill.png',
        animation: 'm_shrek_roar2',
    },
    {
        id: 2,
        name: 'The Enigmatic Disappearance ',
        pos: 'Piano teacher, English teacher, freelancer',
        duration: '2021 - 2024',
        title: "Vanished from the academic world and re-emerged with new skills, stories, and a deep appreciation for minority languages, cultures, and the art of survival.",
        icon: '/assets/tree.png',
        animation: 'm_Shrek_int_footTap1',
    },
     {
        id: 3,
        name: 'Compete McGill',
        pos: 'Compete developer',
        duration: '2020 - 2021',
        title:'Maintain the website of the competitive programming club.',
        icon: '/assets/cp.jpeg',
        animation: 'm_Shrek_wthr_rain_AW',
    },{
        id: 4,
        name: 'McGill Univeristy',
        pos: 'Computer Science and Mathematics',
        duration: '2019 - 2021',
        title:'Started my studies at McGill University.',
        icon: '/assets/mcgill.png',
        animation: 'm_Shrek_int_head1',
    }
];