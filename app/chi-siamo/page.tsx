import Image from "next/image";

export default function About() {



    return (
        <>
            <div className="container pt-5">
                <div className="d-flex justify-content-between align-items-start pb-5">
                    <div className="titolo-chi-siamo">
                        <h1>
                            Esperti del mondo <span className="text-yellow">Salesforce</span>
                        </h1>
                    </div>
                    <div>
                        <Image src="/photo8.png" width={550} height={320} alt="foto di grupp" className="no-border" />
                    </div>
                </div >

                <div className="pt-5">
                    <div className="pt-5">
                        <p style={{ color: "#b3b3b3" }}>CHI SIAMO</p>
                    </div>
                    <div className="d-flex align-items-start gap-5 pb-5">
                        <div className="titolo" style={{ flex: 1 }}>
                            <h2 className="pb-5">eXperience Cloud Consulting, <span className="text-yellow">in breve XCC</span></h2>
                            <p><span className="text-yellow">eXperience Cloud Consulting</span> è parte del Gruppo Alkemy, oggi <span className="text-yellow">Salesforce Consulting Partner</span>, specializzata nell’offrire soluzioni di Cloud Computing in ambito CRM, con focus su Salesforce e il suo ecosistema.</p>
                        </div>
                        <div style={{ flex: 1 }}>
                            <p>La <span className="text-yellow">missione</span> del Team di professionisti XCC è quella di seguire i clienti in tutte le fasi, dall’analisi alla progettazione fino all’implementazione di un insieme di soluzioni innovative e flessibili, che andranno a definire uno strumento indispensabile per migliorare e integrare tutti i processi operativi del vostro business.</p>

                            <p>Grazie alla nostra esperienza nel <span className="text-yellow">managing consulting</span>, architettiamo su misura processi di customer service, vendita e marketing secondo i più alti standard globali.</p>

                            <p>XCC decide di donare, mediante il programma globale <span className="text-yellow">Pledge 1%</span>, parte del proprio staff, tempo, risorse ed equity a favore di iniziative ad alto impatto sociale, nell’ottica di accrescere e consolidare le proprie attività in ambito corporate social responsibility.</p>
                        </div>
                    </div>
                </div>


                <div className="d-flex align-items-start gap-5 pt-5 pb-5 mb-5">
                    <div>
                        <Image src="/photo9.jpeg"
                            width={600} height={380}
                            alt="foto team" className="no-border"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="titolo">
                        <p style={{ color: "#b3b3b3" }}>IL TEAM</p>
                        <h2>Il nostro <span className="text-yellow">Team</span></h2>
                        <p>Il nostro team, composto da manager esperti e specialisti certificati, cucirà su misura l’architettura del CRM numero 1 al mondo sulla base degli obiettivi e processi aziendali.</p>
                        <ul className="mt-5 mb-5">
                            <li>Salesforce Consulting Partner</li>
                            <li>Digitalizzazione d'impresa</li>
                            <li>Innovazione</li>
                        </ul>
                    </div>
                </div>
                <div className="pt-5 pb-5 volontariato-article">
                    <Image
                        src="/photo10.png"
                        width={600}
                        height={350}
                        alt="foto volontariato"
                        className="volontariato-img no-border"
                    />

                    <div className="titolo">
                        <p style={{ color: "#b3b3b3" }}>Conosci gli XCC Volunteers</p>

                        <h2>
                            Il <span className="text-yellow">volontariato</span> secondo XCC
                        </h2>

                        <p>
                            I nostri <span className="text-yellow">Consultant</span> hanno dedicato tempo
                            e lavoro ad azioni solidali e hanno aderito al movimento Pledge 1%.
                        </p>
                        <br />

                        <p>
                            ""È importante essere partecipi a questa responsabilità sociale d’impresa
                            restituendo alla comunità e alla collettività l’impegno che merita. XCC ha
                            aderito ad azioni di volontariato e al programma
                            <span className="text-yellow"> Pledge 1%</span> poiché crediamo fortemente
                            nella filosofia del ‘give back’.""
                        </p>

                        <p>
                            XCC ha anche collaborato con diverse organizzazioni
                            <span className="text-yellow"> non-profit</span>, come Telefono Azzurro,
                            Fondazione Telethon, Terre des Hommes Italia, Accademia Teatro alla Scala,
                            Intercultura e Legambiente, offrendo supporto tecnologico e ottimizzando
                            processi, per aiutarle a raggiungere i loro obiettivi.
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}
