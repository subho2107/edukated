import React from "react";
import PopularCoursesList from "./PopularCourses/PopularCoursesList";
const PopularThisWeek = () =>{
    return(
        <div className='h-25'>
            <h1 className='f5 normal fw3 mt1 mb0' ><strong>Popular</strong> This Week</h1>
            <PopularCoursesList/>
        </div>
    )
}

export default PopularThisWeek;