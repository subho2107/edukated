import React from "react";
import Tutor from './Tutor';
import teachers from '../Resources/tutorsProfiles';
import './TopTutor.css';

const TopTutorList = () => {
    return (
        <div className='mt1'>
            <div className='flex'>
                <h1 className='f5 normal fw3 mr7'><strong>Top</strong> Tutors</h1>
            </div>
            <div className='containerTutor'>
                {
                    teachers.map((teacher, i) => {
                        return (
                            <Tutor
                                name={teachers[i].name}
                                username={teachers[i].username}
                                profilePic={teachers[i].profilePic}
                            />
                        );
                    })
                }</div>
        </div>
    )
}

export default TopTutorList;