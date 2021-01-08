import React from "react";
import './Search.css'
import Dots from "../../Dots/Dots";

const Search = () => {
    return (
        <div className='ml3'>
            <div className='flex'>
                <h1 className='f5 normal fw3 nowrap mr5'><strong>Advanced</strong> Search</h1>
                <Dots />
            </div>
            <div className='flex'>
                <input type="text" placeholder='Start writing something'
                       className='fw1 f7 pa2 ba b--white bg-near-white br4 pr5'/><br/>
                <div className=" fw5 bd white bg-orange tc backgroundCustomFind br4 pa3 ml2">
                    Find
                </div>
            </div>
        </div>
    )
}
export default Search;