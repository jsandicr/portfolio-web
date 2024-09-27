export const experience_list = [
    {
        id: '1',
        dateI: 'Jan 2022',
        dateF: 'Jan 2023',
        title: 'Tester and Web Developer',
        description: 'Development of web pages for the internal control of the company. internal control. In addition, exhaustive testing of both manual and automated manual as well as automated'
    },
    {
        id: '2',
        dateI: 'Jan 2023',
        dateF: 'Current',
        title: 'Mobile Developer',
        description: 'Development of mobile applications focused on the efficient management efficient management of products, warehouses and distribution distribution processes.'
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

export const works = [
    {
        id: 1,
        name: 'Style Dealer',
        img: '/public/style-dealer-preview.jpg',
        demo: '/public/style-dealer-demo-unscreen.gif',
        imgCode: '/public/style-dealer-code.jpg',
        imgApiCode: '/public/style-dealer-api-code.jpg',
        codeLink: 'https://github.com/jsandicr/style-dealer',
        apiLink: 'https://github.com/jsandicr/api-style-dealer',
        model: 'https://my.spline.design/macbookprocopy-45b81f7788fb6122d8067bfc64c58558/'
    },
    {
        id: 2,
        name: 'Gastos App',
        img: '/public/gastos-preview.jpeg',
        demo: '/public/gastos-demo.gif',
        imgCode: '/public/gastos-code.jpg',
        imgApiCode: '/public/gatos-api-code.jpg',
        codeLink: 'https://github.com/jsandicr/style-dealer',
        apiLink: 'https://github.com/jsandicr/api-style-dealer',
        model: 'https://my.spline.design/iphone14procopy-6f87bcadce9275239bfa600424aa702c/'
    },
    {
        id: 3,
        name: 'Web Scrapper',
        img: '/src/assets/images/lugares_increibles.png'
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