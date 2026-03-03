import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {


    const [toggled, setToggled] = useState(false)
    const [thumbColor, setThumbColor] = useState(false)
   

 

    const vars = {
        default_design: "#086976",
        default_develop: "#489D40",
        light: "#E3E3E3",
        dark: "#161616"
     
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
    backgroundColor: vars.dark,
    borderRadius: "105px"
}

const menu = {
    width: "970px",
    height: "105px",
    backgroundColor: vars.dark,
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
    position: "relative",
    padding: "0"
}

const thumb = {
    height: "20px", 
    width: "20px", 
    backgroundColor: thumbColor ?  vars.default_develop : vars.default_design , 
    borderRadius: "100px", 
    position: "absolute", 
    top: "50%", 
    left: toggled?  "120px" : "10px" , 
    transform: "translateY(-50%)"
}

const titleName = {
    color: vars.light,
    boxSizing: "border-box",
    padding: "20px"
}

function handleClick() {
    setToggled(!toggled)
    setThumbColor(!thumbColor)
}

    return (
        <>
        <nav style={navElement}>
            <div style={logo}></div>
            
            <div style={menu}>
                <div style={toggleElem}>
                    <p style={toggleText}>Design</p>
                    <Link to={toggled?   "portfolio" : "develop"  } onClick={() => {
                        console.log('clicked')
                    }}>
                        <button style={toggleBtn} onClick={handleClick}>
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



