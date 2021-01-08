import React from "react";
import './CourseCard.css';
const CourseCard = ({name, username, backgroundPic, courseTotalTime, profilePic, smallDescription, backgroundColor}) => {
    return (
        <div className='text br4' style={{
            backgroundImage: `url(${(backgroundPic)})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: `10em`,
            minWidth: 'auto',
            height: `11em`,
            margin: '1em',
        }}>
            <div className='pa3'>
                <div className='flex'>
                    <img className='ma1 br4' src={profilePic} width='30em' height='30em' alt=''/>
                    <div className='db white fw5'>
                        <h6 className='mt3 mb0 mt1 f7'>{name}</h6>
                        <h6 className='mv1 f7'>{username}</h6>
                    </div>
                </div>
                <div className="br-pill bg-orange bd white tc pa1 backgroundCustom w-40 h1-l nowrap smallFont">{courseTotalTime} min</div>
                <p className='tl f7 br4 fw4 db white lh-copy pa1-l ma1 backgroundFooter ma0' style={{backgroundColor:backgroundColor}}>{smallDescription}</p>
            </div>
        </div>

    )
}

export default CourseCard;
