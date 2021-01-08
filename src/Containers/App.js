import React from 'react';
import LeftPane from '../Components/LeftPane/LeftPane';
import MidPane from '../Components/MidPane/MidPane';
import RightPane from '../Components/RightPane/RightPane';
import './App.css';
const App = () => {
    return (
        <div className='container'>
            <LeftPane />
            <MidPane/>
            <RightPane/>
        </div>
    )
}

export default App;