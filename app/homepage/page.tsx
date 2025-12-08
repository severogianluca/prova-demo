"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


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
                <div className="d-flex d-flex justify-content-between align-items-center">
                    <div className="titolo">
                        <h1 className={visible ? "visible" : ""}>Creiamo tecnologie personalizzate che accelerano la tua <span className="text-yellow">produttività aziendale</span></h1>
                    </div>
                    <div className={visible ? "image-slide visible" : "image-slide"}>
                        <Image src="/photo1.png" width={500} height={500} alt="foto di grupp" />
                    </div>
                </div>


                <div className="d-flex d-flex justify-content-between align-items-center gap-3 pt-5">
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


                <div className="d-flex d-flex justify-content-between align-items-center gap-3 pt-5 mt-5">
                    <div className="titolo">
                        <p style={{ color: "#b3b3b3" }}>COSA FACCIAMO</p>
                        <h2 className="pb-5">Cosa possiamo fare per  <span className="text-yellow">la tua azienda</span></h2>
                        <div className="d-flex justify-content-center w-100 mt-3">
                            <Image src="/photo3.png" width={300} height={300} alt="foto puzzle"></Image>
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
                

            </div>

        </>
    )
}

export default Home;