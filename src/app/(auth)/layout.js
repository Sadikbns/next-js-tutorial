"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./styles.css"
export default function AuthLayout({children}) {
    const navLinks =[
        {name: "Login", href: '/login'},
        {name: "Register", href: '/register'},
        {name: "Forgot password", href: '/forgot-password'}
    ]

    const pathname = usePathname()

    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                    <h2 key={link.name}><Link className={isActive ? "font-bold" : "text-blue-500"} href={link.href}>{link.name}</Link></h2>
                )
            })}

            {children}
        </>
    )
}