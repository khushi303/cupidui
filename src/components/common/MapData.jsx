import boltimg from '../../assets/images/webp/boltimg.webp'
import lightimg from '../../assets/images/webp/lightimg.webp'
import featherimg from '../../assets/images/webp/featherimg.webp'
import sphruleimg from '../../assets/images/webp/speruleimg.webp'
import globalimg from '../../assets/images/webp/globalimg.webp'
import { Facebook, Instagram, ServiceSvg, ServiceSvg2, ServiceSvg3, ServiceSvg4, Telegram, Tweeter } from './Icons'

export const NavData = [
    {
        title: "Home",
        path: "#home"
    },
    {
        title: "Why us",
        path: "#whyus"
    },
    {
        title: "Services",
        path: "#service"
    },
    {
        title: "FAQ",
        path: "#faqs"
    }
]

export const SliderData = [
    {
        img: boltimg,
        alt: "boltimg"
    },
    {
        img: lightimg,
        alt: "lightimg"
    },
    {
        img: featherimg,
        alt: "featherimg"
    },
    {
        img: sphruleimg,
        alt: "sphruleimg"
    },
    {
        img: globalimg,
        alt: "globalimg"
    },
]

export const CrmContent = [
    {
        title: "Hyper Realistic AI Content",
        description: "Advanced generation techniques helps us generate the best AI generation within the industry",
        textcolor: "text-lightgray-100",
        spacing: ""
    },
    {
        title: "Streamlined Workflow",
        description: "Enjoy a seamless and swift workflow pipeline with CUPID AI, simplifying your content creation and management processes.",
        textcolor: "text-lightgray-200",
        spacing: "md:mt-0 mt-6"
    },
    {
        title: "Universal verification",
        description: "Verify your model anywhere, anytime with our AI content generation methods.",
        textcolor: "text-lightgray-200",
        spacing: "lg:mt-0 mt-6"
    }
]


export const serviceCardItems = [
    {
        id: 1,
        svges: <ServiceSvg />,
        heading: "Content Deepfakes",
        paragraph: "Seize control and elevate your business with our hyper-realistic AI description creation. Immerse in a blend of artistry and technology that promises unparalleled authenticity.",
        width: "sm:w-7/12 md:max-w-[526px]",
    },
    {
        id: 2,
        svges: <ServiceSvg2 />,
        heading: "AI Verifications",
        paragraph: "Streamline your workflow with our AI verification system that boasts a stellar 80% first-time success rate.",
        width: "sm:w-5/12 md:max-w-[416px] ",
    },
    {
        id: 3,
        svges: <ServiceSvg3 />,
        heading: "Content Utilities",
        paragraph: "Consolidate your resources with our comprehensive   description utilities. Access everything you need from a single dashboard.",
        width: "sm:w-5/12 md:max-w-[416px]",
    },
    {
        id: 4,
        svges: <ServiceSvg4 />,
        heading: "Image Generation",
        paragraph: "Transform productivity with our sophisticated automation tools. Let technology work tirelessly behind the scenes, so your creativity never has to pause.",
        width: "sm:w-7/12 md:max-w-[526px]",
    },
]

export const accordionData = [
    { id: 1, title: "How do you handle my data?", description: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 2, title: "What's the difference between the Pro and Team plan?", description: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 3, title: "Can I use my own OpenAI API key?", description: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 4, title: "Which model do you use for Raycast AI?", description: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 5, title: "Can I upgrade my Teams subscription to use GPT-4?", description: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
    { id: 6, title: "Does Raycast have a Student Program?", description: "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence." },
];

export const footerlink = [
    {
        title: 'features',
        link: '#features'
    },
    {
        title: 'Services',
        link: '#Services'
    },
    {
        title: 'pricing',
        link: '#Pricing'
    },
    {
        title: 'how to use',
        link: '#Crm'
    },
]

export const footerlinks = [
    {
        linksvg: <Tweeter />,
        link: "https://twitter.com/?lang=en"
    },
    {
        linksvg: <Instagram />,
        link: "https://www.instagram.com/"
    },
    {
        linksvg: <Telegram />,
        link: 'https://web.telegram.org/a/'
    },
    {
        linksvg: <Facebook />,
        link: 'https://www.facebook.com/'
    }
]


export const Includedata = [
    {
        description: "Calculator, Quicklinks, Snippets, Window Management, and many more core features",
    },
    {
        description: "More than 1000 Extensions",
    },
    {
        description: "Custom Extensions",
    },
    {
        description: "Developer Tools",
    },
]

export const Enterpreneurdata = [
    {
        description: "Everything in Free"
    },
    {
        description: "Raycast AI"
    },
    {
        description: "Cloud Sync"
    },
    {
        description: "Custom Themes"
    },
    {
        description: "Unlimited Clipboard History"
    },
]

export const Business = [
    {
        description: "Everything in Pro"
    },
    {
        description: "Unlimited Shared Commands"
    },
    {
        description: "Unlimited Shared Quicklinks"
    },
    {
        description: "Unlimited Shared Snippets"
    },
    {
        description: "Unlimited Team Members"
    },
]