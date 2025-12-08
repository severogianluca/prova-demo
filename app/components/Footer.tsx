"use client"
import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaLinkedin, FaArrowUp } from "react-icons/fa";



export default function Footer() {
    return (
        <>
            <div className="container">
                <div className="d-flex d-flex justify-content-between align-items-center gap-3 pt-5 mt-5 mb-5">
                    <div>
                        <Link href="/homepage">
                            <Image
                                src="/logo.png"
                                width={70}
                                height={70}
                                alt="XCC logo"
                            />
                        </Link>
                    </div>

                    <div>
                        <p>EXPERIENCE CLOUD CONSULTING SRL</p>
                        <p>P.IVA 15159081007 | xcconsulting.it | © 2023</p>
                    </div>
                    <div>
                        <p>SEDE LEGALE</p>
                        <p>Via del Commercio, 36
                            00154 Roma
                            RM, Italia</p>
                    </div>
                    <div>
                        <p>PRIVACY ED ETICA</p>
                        <Link href="/codice-etico" className="footer-link">Codice etico</Link>
                        <p>Privacy policY</p>
                    </div>
                </div>
            </div>
            <hr />

            <div className="container">
                <div className="d-flex d-flex justify-content-between align-items-center pt-3 pb-3">
                    <p>© 2025 eXperience Cloud Consulting srl | All Rights Reserved</p>
                    <div className="d-flex gap-3">
                        <a href="https://www.youtube.com/channel/UCCQ_s4ukjeoVuewZoY_UxzQ" target="_blank" rel="noopener noreferrer">
                            <FaYoutube size={30} color="white" />
                        </a>
                        <a href="https://www.linkedin.com/company/xcc-experience-cloud-consulting/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} color="white" />
                        </a>
                        <a href="#">
                            <FaArrowUp size={30} color="white" />
                        </a>


                    </div>
                </div>

            </div>

        </>
    )
}