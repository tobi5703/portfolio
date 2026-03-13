import { Route, Routes } from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

import Design from './paths/Design'
import Develop from './paths/Develop';

const App = () => {

    const vars = {
        light: "#E3E3E3"
    }

    const mainStyle = {
        minHeight: "80vh"
    }

    return (
        <> 
                <Navbar />   
                <main style={mainStyle}>
                    <Routes>
                        <Route path='/portfolio' element={<Design />} />
                        <Route path='/develop' element={<Develop />} />
                    </Routes>
                </main>
                <Footer />
        </>
        
    )
}

export default App;