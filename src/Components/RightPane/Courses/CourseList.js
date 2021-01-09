import React from "react";
import CourseCard from "../../CourseCard/CourseCard";
import '../../CourseCard/CourseCard.css';
import availableCourses from "../Resource/availableCourses";
import './RightPaneCourses.css';
const CourseList = () =>{
    return(
            <div className=''>
                <div className='text br4 ma2' style={{
                    backgroundImage: `url('https://blog.tubikstudio.com/wp-content/uploads/2019/12/communication-whirlpool-illustration.png')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '22em',
                    minWidth: 'auto',
                    height: '10em',
                    margin: '1em'
                }}>
                    <div className='pa3'>
                        <div className='flex'>
                            <img className='ma1 br4' src='https://kottke.org/plus/misc/images/ai-faces-01.jpg' width='30em' height='30em' alt=''/>
                            <div className='db white fw5'>
                                <h6 className='mt3 mb0 nowrap'>Rwds Agency</h6>
                                <h6 className='mv1'>@rwds_tuts</h6>
                            </div>
                            <div className="br-pill bd white bg-orange tc backgroundCustom ml6-l w-40">64 min</div>
                        </div>
                        <p className='tl f7 pa2 br4 fw4 db white lh-copy mv6 backgroundFooter ma1'
                           style={{backgroundColor: 'navy', margin:'1em'}}>Making a Beautiful Scene with New Presets, Created by Senior Illustrator</p>
                    </div>
                </div>
                <div className='myFlexForCourse'>
                    {
                        availableCourses.map((user, i) =>{
                            return(
                                <CourseCard
                                    name={availableCourses[i].name}
                                    username={availableCourses[i].username}
                                    profilePic={availableCourses[i].profilePic}
                                    courseTotalTime={availableCourses[i].courseTotalTime}
                                    smallDescription={availableCourses[i].smallDescription}
                                    backgroundPic={availableCourses[i].backgroundPic}
                                    backgroundColor={i === 0?'violet':'navy'}
                                    width={15}
                                    height={20}
                                />
                            );
                        })
                    }
                </div>
            </div>
    )
}

export default CourseList;