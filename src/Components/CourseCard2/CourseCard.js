import React from "react";
import './CourseCard.css';
const CourseCard = ({name, username, backgroundPic, courseTotalTime, profilePic, smallDescription, backgroundColor}) => {
    return (
        <div className='text br4' style={{
            backgroundImage: `url(${(backgroundPic)})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: `15em`,
            minWidth: 'auto',
            height: `27em`,
            margin: '1em',
        }}>
            <div className='pa3'>
                <div className='flex'>
                    <img className='ma1 br4' src={profilePic} width='30em' height='30em' alt=''/>
                    <div className='db white fw5'>
                        <h6 className='mt3 mb0'>{name}</h6>
                        <h6 className='mv1'>{username}</h6>
                    </div>
                </div>
                <div className="br-pill bd white bg-orange tc backgroundCustom">{courseTotalTime} min</div>
                <p className='tl f7 pa2 br4 fw4 db white lh-copy mt7-l backgroundFooter mb0' style={{backgroundColor:backgroundColor}}>{smallDescription}</p>
            </div>
        </div>

    )
}

export default CourseCard;
