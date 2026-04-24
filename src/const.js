export const experience_list = [
    {
        id: '1',
        dateI: 'Jan 2022',
        dateF: 'Jan 2023',
        title: 'Tester and Web Developer',
        description: 'Developed internal web applications to support company operations and process control. Conducted comprehensive testing, including both manual and automated approaches, to ensure software quality and reliability.'
    },
    {
        id: '2',
        dateI: 'Jan 2023',
        dateF: 'Current',
        title: 'Mobile Developer',
        description: 'Design and development of mobile applications focused on optimizing product management, warehouse operations, and distribution processes, improving efficiency and usability.'
    }
]

//Routes for divs
export const routes = [
    {
        href: '/#home',
        name: 'Home'
    },
    {
        href: '/#about',
        name: 'About'
    },
    {
        href: '/#works',
        name: 'Works'
    },
    {
        href: '/#experience',
        name: 'Experience'
    }
]

//type 1= web, type 2=mobile
export const works = [
    {
        id: 1,
        name: 'Duel Tracker',
        img: '/duel-tracker-preview.PNG',
        demo: '/duel-tracker-demo-unscreen.gif',
        type: 1
    },
    {
        id: 2,
        name: 'Style Dealer',
        img: '/style-dealer-preview.jpg',
        demo: '/style-dealer-demo-unscreen.gif',
        imgCode: '/style-dealer-code.jpg',
        imgApiCode: '/style-dealer-api-code.jpg',
        codeLink: 'https://github.com/jsandicr/style-dealer',
        apiLink: 'https://github.com/jsandicr/api-style-dealer',
        model: 'https://prod.spline.design/ss9wJiieZWboUjD2/scene.splinecode',
        type: 1
    },
    {
        id: 3,
        name: 'Gastos App',
        img: '/gastos.jpeg',
        demo: '/gastos-demo.gif',
        imgCode: '/gastos-code.jpg',
        imgApiCode: '/gatos-api-code.jpg',
        codeLink: 'https://github.com/jsandicr/gastos',
        apiLink: 'https://github.com/jsandicr/gastos_api',
        model: 'https://prod.spline.design/lQv4ZjLJqarU0kCk/scene.splinecode',
        type: 2
    },
    {
        id: 4,
        name: 'Web Scrapper',
        img: '/webScrapper-preview.jpg',
        demo: '/webScrapper-demo.gif',
        imgCode: '',
        imgApiCode: '',
        codeLink: 'https://github.com/jsandicr/webscrapper',
        apiLink: '',
        model: 'https://prod.spline.design/x4K5XmGosNSaC5Ku/scene.splinecode',
        type: 1
    },
    {
        id: 5,
        name: 'Ricodelik Portfolio',
        img: '/ricodelik-preview.jpg',
        demo: '/ricodelik-demo.gif',
        imgCode: '',
        imgApiCode: '',
        codeLink: 'https://github.com/jsandicr/webscrapper',
        apiLink: '',
        model: 'https://prod.spline.design/uip2JTZuV-A3A5ec/scene.splinecode',
        type: 1
    }
]

export const INITIAL_SCALE_MODEL = [0.7, 0.7, 0.7]

// Text scaling
export const parallaxScaling1 = 1
// Canvas scaling
export const parallaxScaling2 = 35
// Three.js Camera Rotation Speed
export const parallaxScaling3 = 0.0000001

export const ease = 0.001

// Define a global variable to connect scroll-based animations to 3D animations.
export const theta1 = 0