import React from "react";

const Tutor = ({name, username, profilePic}) => {
    return (
        <div className='bg-light-gray pr3 ma1 flex br4 pa2'>
            <img src={profilePic} className='br4 pa1' width='30px' height='30px' alt=''/>
            <p className='flex flex-column fw3 f7 mt1'>
                <strong className='nowrap'>{name}</strong><br/>
                @{username}
            </p>
            <strong className='ml6'>+</strong>
        </div>
    )
}
export default Tutor;