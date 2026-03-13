const Footer = () => {

    const vars = {
        default_design: "#086976",
        default_develop: "#489D40",
        light: "#E3E3E3",
        dark: "#161616"
     
    }

    const FooterStyle = {
        width: "100%",
        backgroundColor: vars.dark,
        color: vars.light,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        fontFamily: "Zilla Slab",
        boxSizing: "border-box",
        padding: "20px 0"
    }

    const centerBox = {
        display: "flex",
        justifyContent: "center"
    }

    return (
        <>
            <footer style={FooterStyle}>
                <div style={centerBox}>
                    <ul>
                        <li>
                            <a target="_blank" href="https://github.com/tobi5703">Github Profile</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/tobi5703/portfolio">
                                Github Repository for this website        
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.figma.com/design/HKfhoEsYLgVCSR515ehQ2t/Portfolie-Hjemmeside?node-id=15-89&t=2yn9u4ZoFM7uffQL-1">Figma file for this website</a>
                        </li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
             
                <div style={centerBox}>
                    <ul>
                        <li>Made with React</li>
                        <li>by Tobias Hammeken Arboe</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;