"use client"

import Image from "next/image";
import Link from "next/link";

interface NavLink {
    href: string,
    label: string
}

const navlink: NavLink[] = [
    { href: "/homepage", label: "Home" },
    { href: "/cosa-facciamo", label: "Cosa Facciamo" },
    { href: "/chi-siamo", label: "Chi Siamo" },
    { href: "/magazine", label: "Magazine" }
]


function Navbar() {
    return (
        <>
            <div className="nav">
                <div className=" container d-flex d-flex justify-content-between align-items-center pt-3 pb-3">
                    <div>

                        <Link href="/homepage">
                            <Image
                                src="/logo.png"
                                width={50}
                                height={50}
                                alt="XCC logo"
                            />
                        </Link>
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
                        <button type="button" className="btn btn-warning">Contattaci</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;