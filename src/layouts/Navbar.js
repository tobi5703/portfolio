import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {


    const [toggled, setToggled] = useState(false)
    const [thumbPosition, setThumbPosition] = useState('10px')
   

    useEffect(() => {
        if (toggled === true ) {
            setThumbPosition("120px")
        } else {
            setThumbPosition("10px")
        }
    }, [toggled])


    
const navElement = {
    margin: "20px",
    boxSizing: "Border-box",
    border: "2px solid red",
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
    color: "white",
    margin: "10px"
}

const toggleBtn = {
    backgroundColor: "white",
    border: "1px solid red",
    borderRadius: "100px",
    height: "34px",
    width: "150px",
    cursor: "pointer",
    position: "relative"
}

const thumb = {
    height: "20px", 
    width: "20px", 
    backgroundColor: "black", 
    borderRadius: "100px", 
    position: "absolute", 
    top: "50%", 
    left: thumbPosition, 
    transform: "translateY(-50%)"
}

const titleName = {
    color: "white"
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



