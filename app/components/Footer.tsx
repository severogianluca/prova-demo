"use client"
import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaLinkedin, FaArrowUp } from "react-icons/fa";



export default function Footer() {
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-between align-items-start gap-4 pt-5 mt-5 mb-5">

                    <div>
                        <Link href="/homepage">
                            <Image src="/logo.png" width={70} height={70} alt="XCC logo" />
                        </Link>
                    </div>

                    <div>
                        <p className="mb-1">EXPERIENCE CLOUD CONSULTING SRL</p>
                        <p className="mb-0">P.IVA 15159081007 | xcconsulting.it | © 2023</p>
                    </div>

                    <div>
                        <p className="mb-1 fw-bold">SEDE LEGALE</p>
                        <p className="mb-0">
                            Via del Commercio, 36<br />
                            00154 Roma (RM), Italia
                        </p>
                    </div>

                    <div>
                        <p className="mb-1 fw-bold">PRIVACY ED ETICA</p>
                        <Link href="/codice-etico" className="footer-link d-block">
                            Codice etico
                        </Link>
                        <Link href="#" className="footer-link d-block">
                            Privacy policy
                        </Link>
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