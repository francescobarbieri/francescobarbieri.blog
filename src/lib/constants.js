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
        href: 'www.linkedin.com/in/barbieri-francesco',
        icon: <LuLinkedin size={16} />
    },
}

export const LINKS = [
    {
        href: '/',
        label: 'Home',
        icon: <LuCircle size={16} />
    },
    {
        href: '/essays',
        label: 'Essays',
        icon: <LuPencilLine size={16} />
    },
    {
        href: '/reading-list',
        label: 'Reading List',
        icon: <LuBook size={16} />
    }
]

export const commonMetadata = {
    title: "Francesco Barbieri's Blog",
    description: 'Software Engineer based in Milan, Italy',
}

export const MOBILE_SCROLL_THRESHOLD = 20