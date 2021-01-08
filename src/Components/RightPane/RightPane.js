import React from 'react';
import Search from './Search/Search';
import SpecialOffers from './SpecialOffer';
import Courses from './Courses';
import './RightPane.css'
import './Courses/RightPaneCourses.css'
const RightPane = () => {
    return (
        <div  className = 'tc w-30 pa3 ma2 divide packUpTogether'>
            <Search/>
            <Courses/>
            <SpecialOffers/>
        </div>
    )
}

export default RightPane;