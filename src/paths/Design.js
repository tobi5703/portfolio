import "../universal.css"


const Design = () => {

    const vars = {
        default: "#086976",
        hover: "#06545E",
        clicked: "#053F47",
        light: "#E3E3E3",
        dark: "#161616"
    }

    const pageContainer = {
        display: "grid", 
        gridTemplateColumns: "1fr", 
        gridTemplateRows: "1fr", 
        width: "100%", 
    }

    const backgroundContainer = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        gridGap: "20px",
        margin: "20px",
        gridColumn: "1 / -1", 
        gridRow: "1 / -1",
        position: "relative"
    }    

    const backgroundTextureOne = {
        gridColumn: "2 / 6",
        backgroundColor: vars.default,

    }

    const backgroundTextureTwo = {
        gridColumn: "7 / 9",
        backgroundColor: vars.default,
        
    }

     const backgroundTextureThree = {
        gridColumn: "10 / -1",
        backgroundColor: vars.default,
        
    }

    const foregroundContainer = {
        display: "grid",
        gridColumn: "1 / -1", 
        gridRow: "1 / -1",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        gridGap: "20px",
        margin: "20px",
        position: "relative",
        marginTop: "30px",
        paddingBottom: "50px"

    }

    const headerSection = {
        gridColumn: "2 / 8",
    }

    const headerStyle = {
        color: vars.default,
        fontFamily: "Zilla Bold",
        fontSize: "62px"

    }

    const subheaderStyle = {
        fontFamily: "Zilla Slab",
        fontSize: "32px",
        color: vars.dark
    }

    const myBackground = {
        gridColumn: "2 / 7",
        border: "2px solid #161616",
        boxSizing: "border-box",
        padding: "20px",
        color: vars.dark,
        fontFamily: "Ubuntu",
        fontSize: "16px",
        lineHeight: "150%"

    }

    const myBackgroundHeader = {
        fontFamily: "Zilla Bold",
        fontSize: "32px",
        marginBottom: "20px"
    }

    const backgroundBtn = {
        color: vars.light,
        backgroundColor: vars.default,
        width: "110px",
        height: "45px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        borderRadius: "4px"

    }

    const skills = {
        gridColumn: "9 / 13",
        gridRow: "1 / 3",
        backgroundColor: vars.dark,
        color: vars.light,
        boxSizing: "border-box",
        padding: "20px",
        width: "70%",
        fontFamily: "Ubuntu",
        fontSize: "16px",
        lineHeight: "150%",
    }

    
    const skillsHeader = {
        fontFamily: "Zilla Slab",
        fontSize: "24px",
        marginBottom: "10px",
    }

 
    
    return (
        <>
        <div style={pageContainer}>
            
        <div style={backgroundContainer}>
            <div className="mask" style={backgroundTextureOne}></div>

            <div className="mask" style={backgroundTextureTwo}></div>

            <div className="mask" style={backgroundTextureThree}></div>


        </div>

            <div style={foregroundContainer}>
               

                <section style={headerSection}>
                    <h2 style={headerStyle}>
                        Where creativity...
                    </h2>
                    <p style={subheaderStyle}>
                        Knowing the rules of design, and breaking them with intention
                    </p>
                </section>
            
                <section style={myBackground}>
                    <h2 style={myBackgroundHeader}>
                        Min baggrund:
                    </h2>
                    <p>
                    Jeg har altid været en kreativ person - jeg har dyrket kunst og farver stort set hele mit liv. Multimediedesign kombinere min passion for det kreative med rammer for design, informationsformidling og brugervenlighed. Brugervenlighed - eller mangel derpå - fra andre hjemmesider har specifikt været en stor motivator for mig til at tage Multimediedesign som uddannelse.    
                    </p>
                    
                    <a target="_blank" href="https://www.linkedin.com/verify/identity/persona/start/?entryPoint=self_profile_top_card_promo&platform=DESKTOP&referrer=verify_hub_redirect">
                        <div style={backgroundBtn}>
                            <p>
                                Læs mere
                            </p>
                        </div>
                    </a>
                </section>

                <section style={skills}>
                    <h2 style={skillsHeader}>Kompetencer</h2>
                    <ul>
                        <li>
                            Figma
                            <ul>
                                <li>Variabler</li>
                                <li>Komponenter</li>
                                <li>Libraries</li>
                                <li>Plugins</li>
                            </ul>
                        </li>
                        <li>Design Systemer</li>
                        <li>Design Systemer</li>
                        <li>
                            Adobe
                            <ul>
                                <li>Photoshop</li>
                                <li>Illustrator</li>
                                <li>Aftereffects</li>
                            </ul>
                        </li>
                        <li>Gestaltlove</li>
                        <li>Gestaltlove</li>
                          <li>
                            Brugertests
                            <ul>
                                <li>Tænke Højt Test</li>
                                <li>Likert Skala</li>
                                <li>5 Sekunders test</li>
                                <li>Card Sorting</li>
                            </ul>
                        </li>
                        <li>Bruger Research</li>
                        <li>Style Tiles</li>


                    </ul>
                </section>
            </div>
        </div>


        </>
    )
}

export default Design;