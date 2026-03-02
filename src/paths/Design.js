import "../universal.css"


const Design = () => {

    const vars = {
        default: "#086976",
        hover: "#06545E",
        clicked: "#053F47",
        light: "#E3E3E3",

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
        color: vars.default
    }

    const myBackground = {
        gridColumn: "2 / 7",
        border: "2px solid black",
        boxSizing: "border-box",
        padding: "20px"
    }

    const backgroundBtn = {
        color: vars.light,
        backgroundColor: vars.default,
        
    }

    const skills = {
        gridColumn: "8 / 12",
        gridRow: "1 / 3",
        backgroundColor: "black",
        color: vars.light,
        boxSizing: "border-box",
        padding: "20px"

    }

    const skillsHeaderStyle = {
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
                    <p>
                        Knowing the rules of design, and breaking them with intention
                    </p>
                </section>
            
                <section style={myBackground}>
                    <h2>
                        Min baggrund:
                    </h2>
                    <p>
                    Jeg har altid været en kreativ person - jeg har dyrket kunst og farver stort set hele mit liv. Multimediedesign kombinere min passion for det kreative med rammer for design, informationsformidling og brugervenlighed. Brugervenlighed - eller mangel derpå - fra andre hjemmesider har specifikt været en stor motivator for mig til at tage Multimediedesign som uddannelse.    
                    </p>
                    <button style={backgroundBtn}>
                        Læs mere
                    </button>
                </section>

                <section style={skills}>
                    <h2 style={skillsHeaderStyle}>Kompetencer</h2>
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

     
       
        <h2>
            Design
        </h2>
        </>
    )
}

export default Design;