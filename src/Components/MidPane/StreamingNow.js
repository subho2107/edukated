import React from 'react';
import StoryList from "./Story/StoryList";
import Dots from "../Dots/Dots";

const StreamingNow = () => {
    return (
        <div style={{height:'4em'}}>
            <div className='flex'>
                <h1 className='f5 normal fw3 mr7' ><strong>Streaming</strong> Now</h1>
                <Dots/>
            </div>
            <div className='flex'>
                <StoryList/>
            </div>
        </div>
    );
}

export default StreamingNow;