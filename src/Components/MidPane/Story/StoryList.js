import React from "react";
import Story from './Story'
import profile from '../Resources/profile'
const StoryList = () =>{
    return(
        <div className='flex flex-wrap'>
            {
                profile.map((user) =>{
                    return(
                        <Story
                            image={user.profilePic}
                        />
                    );
                })
            }
        </div>
)
}

export default StoryList;