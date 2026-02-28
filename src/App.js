import { Route, Routes } from 'react-router-dom';

import Navbar from './layouts/Navbar';

import Design from './paths/Design'
import Develop from './paths/Develop';

const App = () => {
    return (
        <>
                <Navbar />   
                <Routes>
                    <Route path='/' element={<Design />} />
                    <Route path='/develop' element={<Develop />} />
                </Routes>
        </>
        
    )
}

export default App;