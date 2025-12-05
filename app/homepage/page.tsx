"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

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
            </div>

        </>
    )
}

export default Home;