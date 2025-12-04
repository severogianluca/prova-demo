"use client"

import Link from "next/link";

interface NavLink {
    href: string,
    label: string
}

const navlink: NavLink[] = [
    { href: "/homepage", label: "Home" },
    { href: "/about", label: "Chi siamo" },
    { href: "/magazine", label: "Magazine" }
]


function Navbar() {
    return (
        <>
            <div className="nav d-flex d-flex justify-content-between">
                    <div>
                        LOGO
                    </div>
                    <div className="d-flex gap-3">
                        {navlink.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex item-center"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div>
                        <button>Contattaci</button>
                    </div>
                </div>

        </>
    )
}

export default Navbar;