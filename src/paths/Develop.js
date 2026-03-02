const Develop = () => {

   const vars = {
        default: "#489D40",
        hover: "#3A7E33",
        clicked: "#2B5E26",
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
        gridColumn: "1 / 4",
        backgroundColor: vars.default,

    }

    const backgroundTextureTwo = {
        gridColumn: "5 / 9",
        backgroundColor: vars.default,
        
    }

     const backgroundTextureThree = {
        gridColumn: "10 / 12",
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
        gridColumn: "6 / 12"
    }

    const headerStyle = {
        color: vars.default
    }

     const myBackground = {
        gridColumn: "7 / 12",
        border: "2px solid black",
        boxSizing: "border-box",
        padding: "20px"
    }

    const backgroundBtn = {
        color: vars.light,
        backgroundColor: vars.default,
        
    }

    const skills = {
        gridColumn: "2 / 6",
        gridRow: "1 / 3",
        backgroundColor: "black",
        color: vars.light,
        boxSizing: "border-box",
        padding: "20px"

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
                        ...meets craftmanship
                    </h2>
                     <p>
                        Turning design into websites using clean and readable code
                    </p>
                </section>

                <section style={myBackground}>
                    <h2>
                        Min baggrund:
                    </h2>
                    <p>
                        Jeg har før Multimediedesign taget både en Webudvikler som ervhervsuddannelse, og færdiggjordt 4 semester på Datamatiker-uddannelsen. Kombineret med Multimediedesign giver det mig over 5 års erfaring med Fronted og Web, og en super stærk teknisk profil. Lige så meget som jeg elsker design nyder jeg stadig front-end development, og processen at lave en hjemmeside.
                    </p>
                    <button style={backgroundBtn}>
                        Læs mere
                    </button>
                </section>

                 <section style={skills}>
                    <h2>Kompetencer</h2>
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
            Develop
        </h2>
      
      
        </>
    )
}
export default Develop;