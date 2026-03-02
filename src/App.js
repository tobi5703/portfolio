import { Route, Routes } from 'react-router-dom';

import Navbar from './layouts/Navbar';

import Design from './paths/Design'
import Develop from './paths/Develop';

const App = () => {

    const vars = {
        light: "#E3E3E3"
    }

 

    return (
        <> 
                <Navbar />   
                <main>
                    <Routes>
                        <Route path='/' element={<Design />} />
                        <Route path='/develop' element={<Develop />} />
                    </Routes>
                </main>
        </>
        
    )
}

export default App;