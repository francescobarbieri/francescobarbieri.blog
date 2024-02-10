import { FaBeer } from 'react-icons/fa';
import { RiTwitterXLine } from "react-icons/ri";
import { LuInstagram, LuGithub, LuLinkedin, LuPencilLine, LuBook, LuCircle } from "react-icons/lu";

export const SOCIALS = {
    twitter: {
        label: 'Twitter · X',
        href: 'https://twitter.com/intent/user?screen_name=frabarbieri_',
        icon: <RiTwitterXLine size={16} />
    },
    instagram: {
        label: 'Instagram',
        href: '#',
        icon: <LuInstagram size={16} />
    },
    github: {
        label: 'GitHub',
        href: 'https://github.com/francescobarbieri',
        icon: <LuGithub size={16} />
    },
    linkedin: {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/barbieri-francesco',
        icon: <LuLinkedin size={16} />
    },
}

export const LINKS = [
    {
        href: '/',
        label: 'Home',
        icon: <LuCircle size={16} />
    },
    /*
    {
        href: '/essays',
        label: 'Essays',
        icon: <LuPencilLine size={16} />
    },
    */
    {
        href: '/reading-list',
        label: 'Reading List',
        icon: <LuBook size={16} />
    }
]

// COVER SIZE: 350px x 530px (circa)
export const BOOKS = [
    {
        title: "So Good They Can't Ignore You",
        href: 'https://books.apple.com/it/book/so-good-they-cant-ignore-you/id721497019',
        cover: "so-good-they-cant-ignore-you.png"
    },
    {
        title: "Persuasive Technology",
        href: 'https://books.apple.com/ie/book/persuasive-technology/id491708975',
        cover: "persuasive-tech.png"
    },
    {
        title: "The Filter Bubble",
        href: 'https://books.apple.com/us/book/the-filter-bubble/id414403876',
        cover: "the-filter-bubble.png"
    },
    {
        title: "Deep Work",
        href: 'https://books.apple.com/it/audiobook/deep-work/id1439867388',
        cover: "deep-work.png"
    },
    {
        title: "Psycology of Crowds",
        href: 'https://books.apple.com/it/book/psychology-of-crowds/id890652323',
        cover: "psycology-of-crowds.png"
    },
]

export const commonMetadata = {
    title: "Francesco Barbieri's Blog",
    description: 'Software Engineer based in Milan, Italy',
}

export const MOBILE_SCROLL_THRESHOLD = 20