import React from "react";

const Story = ({image}) =>{
    return(
        <div className=''>
            <img className='ba bw1 b--orange br4 ma1 pa1-ns' src={image} alt='' width='30em' height='30em'/>
        </div>
    )
}

export default Story;