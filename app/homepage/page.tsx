"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaClock, FaUser } from "react-icons/fa";


interface HoverLink {
    href: string,
    label: string
}

const HoverLink: HoverLink[] = [
    { href: "/cosa-facciamo", label: "Managing Consulting →" },
    { href: "/cosa-facciamo", label: "System Integration →" },
    { href: "/cosa-facciamo", label: "Digital Transformation →" },
    { href: "/cosa-facciamo", label: "User Adoption →" }
]
function Home() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);
    return (
        <>
            <div className="container pt-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="titolo">
                        <h1 className={visible ? "visible" : ""}>Creiamo tecnologie personalizzate che accelerano la tua <span className="text-yellow">produttività aziendale</span></h1>
                    </div>
                    <div className={visible ? "image-slide visible" : "image-slide"}>
                        <Image src="/photo1.png" width={500} height={500} alt="foto di grupp" />
                    </div>
                </div>
                <div className="d-flex" style={{ paddingRight: "80px"}}>
                    <Image
                        src="/photo7.png"
                        width={400}
                        height={200}
                        alt="partner"
                        className="ms-auto"
                    />
                </div>


                <div className="d-flex justify-content-between align-items-center gap-3 pt-5 ">
                    <div className="px-5">
                        <Image src="/photo2.jpg" width={300} height={340} alt="foto di gruppo" className="foto-tondo" />
                    </div>
                    <div className="titolo">
                        <p style={{ color: "#b3b3b3" }}>CHI SIAMO</p>
                        <h2 className="pb-5">eXperience Cloud Consulting, <span className="text-yellow">in breve XCC</span></h2>
                        <p className="small-text mt-3">XCC, parte del gruppo Alkemy, è un'azienda specializzata in soluzioni di Cloud Computing e CRM, con un focus specifico su Salesforce. La nostra missione è trasformare le aziende attraverso l'implementazione di processi personalizzati per il customer service, la vendita e il marketing.</p>

                        <ul className="mt-5 mb-5">
                            <li>Salesforce Consulting Partner</li>
                            <li>Digitalizzazione d'impresa</li>
                            <li>Innovazione</li>
                        </ul>

                        <button type="button" className="btn btn-warning px-4 py-2 mt-3 mb-5">Scopri di più</button>
                    </div>
                </div>


                <div className="d-flex justify-content-between align-items-center gap-3 pt-5 mt-5 pb-5">
                    <div className="titolo">
                        <p style={{ color: "#b3b3b3" }}>COSA FACCIAMO</p>
                        <h2 className="pb-5">Cosa possiamo fare per  <span className="text-yellow">la tua azienda</span></h2>
                        <div className="d-flex justify-content-center w-100 mt-3">
                            <Image src="/photo3.png" width={300} height={300} alt="foto puzzle" />
                        </div>
                    </div>
                    <div className="ps-5">
                        {HoverLink.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                            >
                                <h2 className="p-3">{link.label}</h2>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="pb-5">
                    <h1 className="text-yellow pt-5 mt-5">News</h1>

                    <div
                        className="d-flex gap-3 pt-3"
                        style={{ alignItems: "stretch" }}
                    >

                        {/* IMG SX */}
                        <div style={{ position: "relative", width: "700px", height: "480px" }}>
                            <Image
                                src="/photo4.jpg"
                                alt="foto"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                            {/* TESTO IMG SX */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "20px",
                                    left: "20px",
                                    color: "white",
                                    background: "rgba(0,0,0,0.5)",
                                    padding: "12px 16px",
                                    borderRadius: "8px",
                                    maxWidth: "80%",
                                }}
                            >
                                <div className="d-flex align-items-center gap-2">
                                    <FaUser size={16} style={{ color: "#b3b3b3" }} />
                                    <span className="m-0" style={{ color: "#b3b3b3" }}>Arianna Salpietro on</span>
                                    <FaClock size={14} style={{ color: "#b3b3b3" }} />
                                    <span style={{ color: "#b3b3b3" }}>18 Novembre 2025</span>
                                </div>
                                <p className="m-0" style={{ color: "#b3b3b3" }}>XCC sponsor del Public Sector Innovation Day</p>
                            </div>
                        </div>

                        {/* IMG DX */}
                        <div
                            className="d-flex flex-column gap-3"
                            style={{ height: "480px", width: "400px" }}
                        >
                            <div style={{ position: "relative", flex: 1 }}>
                                <Image
                                    src="/photo5.jpeg"
                                    alt="foto"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                                {/* TESTO IMG DX */}
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: "20px",
                                        left: "20px",
                                        color: "white",
                                        background: "rgba(0,0,0,0.5)",
                                        padding: "12px 16px",
                                        borderRadius: "8px",
                                        maxWidth: "80%",
                                    }}
                                >
                                    <div className="d-flex align-items-center gap-2">
                                        <FaUser size={16} style={{ color: "#b3b3b3" }} />
                                        <span className="m-0" style={{ color: "#b3b3b3" }}>Arianna Salpietro on</span>

                                    </div>
                                    <p className="m-0" style={{ color: "#b3b3b3" }}>XCC alla BTO 2025: autenticità, dati e innovazione guidano il futuro del travel</p>
                                </div>
                            </div>

                            <div style={{ position: "relative", flex: 1 }}>
                                <Image
                                    src="/photo6.jpeg"
                                    alt="foto"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home;