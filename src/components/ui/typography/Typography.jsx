'use client'

import { cn } from "@/lib/utils"
import { LuExternalLink } from "react-icons/lu"

export function TypographyH1({ children }) {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            { children }
        </h1>
    )
}

export function TypographyH2({ children }) {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            { children }
        </h2>
    )
}

export function TypographyH3({ children }) {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            { children }
        </h3>
    )
}

export function TypographyH4({ children }) {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            { children }
        </h4>
    )
}

export function TypographyP({ className = "", children }) {
    return (
        <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
            { children }
        </p>
    )
}

export function TypographyBlockquote({ children }) {
    return (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
            { children }
        </blockquote>
    )
}

export function TypographyList(items) {
    return (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {
            items.map( (item) => (
                <li>{item}</li>
            )) 
        }
      </ul>
    )
}

export function TypographyInlineCode({ children }) {
    return (
        <code className="relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            { children }
        </code>
    )
}

export function TypographySmall({ className = "", children }) {
    return (
        <small className={cn("text-sm font-medium leading-none", className)}>
            { children }
        </small>
    )
}

export function TypographyLarge({ children }) {
    return <div className="text-lg font-semibold">
        { children }
    </div>
}

export function TypographyMuted({ children }) {
    return (
        <p className="text-sm text-muted-foreground">
            { children }
        </p>
    )
}

export function TypographyHyperlink({ children, href }) {
    return (
        <a href={href} rel="noopener noreferrer" target="_blank" className="text-[#001ecc] hover:underline">
            { children  }
        </a>
    )
}