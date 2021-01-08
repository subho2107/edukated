import React from 'react';
import StreamingNow from "./StreamingNow";
import PopularThisWeek from './PopularThisWeek'
import TopTutors from './TopTutors'
import './MidPane.css'
const MidPane = () => {
    return (
        <div className = 'containerMid pa3 ma2'>
            <StreamingNow/>
            <PopularThisWeek/>
            <TopTutors/>
        </div>
    )
}

export default MidPane;