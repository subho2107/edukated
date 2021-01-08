import React from "react";
import CourseCard2 from '../../CourseCard2/CourseCard'
import courses from '../Resources/courses'
import  '../PopularThisWeek.css'
const PopularCoursesList = () =>{
    return(
        <div className='containerPopular'>
            {
                courses.map((user, i) =>{
                    return(
                        <CourseCard2
                            name={user.name}
                            username={user.username}
                            profilePic={user.profilePic}
                            courseTotalTime={user.courseTotalTime}
                            smallDescription={user.smallDescription}
                            backgroundPic={user.backgroundPic}
                            backgroundColor={i === 0?'darkblue':'darkmagenta'}
                        />
                    );
                })
            }
        </div>
    )
}

export default PopularCoursesList;