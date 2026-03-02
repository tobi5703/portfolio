import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {


    const [toggled, setToggled] = useState(false)
    const [thumbColor, setThumbColor] = useState("#086976")
    const [thumbPosition, setThumbPosition] = useState('10px')
   

    useEffect(() => {
        if (toggled === true ) {
            setThumbPosition("120px")
            setThumbColor(vars.default_develop)
        } else {
            setThumbPosition("10px")
            setThumbColor(vars.default_design)

        }
    }, [toggled])

    const vars = {
        default_design: "#086976",
        default_develop: "#489D40",
        light: "#E3E3E3",
     
    }
    
const navElement = {
    margin: "20px",
    boxSizing: "Border-box",
    display: "flex",
    justifyContent: "Space-between"
} 

const logo = {
    width: "105px",
    height: "105px",
    backgroundColor: "black",
    borderRadius: "105px"
}

const menu = {
    width: "970px",
    height: "105px",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}

const toggleElem = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
}

const toggleText = {
    color: vars.light,
    margin: "10px"
}

const toggleBtn = {
    backgroundColor: vars.light,
    borderRadius: "100px",
    height: "34px",
    width: "150px",
    cursor: "pointer",
    position: "relative"
}

const thumb = {
    height: "20px", 
    width: "20px", 
    backgroundColor: thumbColor, 
    borderRadius: "100px", 
    position: "absolute", 
    top: "50%", 
    left: thumbPosition, 
    transform: "translateY(-50%)"
}

const titleName = {
    color: vars.light,
    boxSizing: "border-box",
    padding: "20px"
}


    return (
        <>
        <nav style={navElement}>
            <div style={logo}></div>
            
            <div style={menu}>
                <div style={toggleElem}>
                    <p style={toggleText}>Design</p>
                    <Link to={toggled? "/" : "develop"}>
                        <button style={toggleBtn} onClick={() => setToggled(!toggled) } >
                            <div style={thumb}>

                            </div>
                        </button>
                    </Link>
                    <p style={toggleText}>Develop</p>
                </div>

                <h1 style={titleName}>Tobias Hammeken Arboe</h1>
            </div>
        </nav>
        </>
    )
}

export default Navbar;



