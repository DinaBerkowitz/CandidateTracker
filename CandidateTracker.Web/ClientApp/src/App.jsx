import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import Pending from './Pages/Pending';
import Details from './Pages/Details';
import Confirmed from './Pages/Confirmed';
import Refused from './Pages/Refused';
import CountContextComponent from './Pages/CountContextComponent';

const App = () => {
    return (
        <CountContextComponent>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/addcandidate' element={<AddCandidate />} />
                    <Route path='/pending' element={<Pending />} />
                    <Route path='/details/:id' element={<Details />} />
                    <Route path='/confirmed' element={<Confirmed />} />
                    <Route path='/refused' element={<Refused />} />
                </Routes>
            </Layout>
        </CountContextComponent>
    );
}

export default App;