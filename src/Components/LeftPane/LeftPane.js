import React from 'react';
import './LeftPane.css';
import {Message, Settings} from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';

const LeftPane = () => {
    return (
        <div className='leftContainer pa1 ma2'>
            <div className='flex'>
                <span className='f5 fw6 bd white bg-orange br-100 pa2  ma3 mb5 v-mid tc logo'>e</span>
                <h3 className=''><strong>Edu</strong><span className='fw3 bd orange'>kated</span></h3>
            </div>
            <div className=" border-box pa2 br4 mb4">
                <div className="dtc v-mid tr bg-near-white br4 ma3 navbar w-20">
                    <ul className='f5 pl0'>
                        <li className='pa1 ma1 flex'>
                            <HomeIcon color="disabled" className='material-icons'/><a
                            className="link dim dark-gray f6  dib mr3 mr4-ns tl icon-text" href="#"
                            title="About">Home</a>
                        </li>
                        <li className='pa1 ma1 flex'>
                            <SearchIcon color="disabled" className='material-icons'/><a
                            className="link dim dark-gray f6  dib mr3 mr4-ns tl icon-text" href="#"
                            title="About">Discover</a>
                        </li>
                        <li className='pa1 ma1 flex'>
                            <Message color="disabled" className='material-icons'/><a
                            className="link dim dark-gray f6 dib mr3 mr4-ns tl icon-text" href="#"
                            title="About">Messages</a>
                        </li>
                        <li className='pa1 ma1 flex'>
                            <Settings color="disabled" className='material-icons'/> <a
                            className="link dim dark-gray f6 dib mr3 mr4-ns tl icon-text" href="#"
                            title="About">Settings</a>
                        </li>
                    </ul>

                </div>
                <div className='bg-near-white br4 mv3'>
                    <div className='pa3 flex'>
                        <EmojiObjectsOutlinedIcon className='bg-purple br4 mr1'/>
                        <div className='flex flex-column mt0'>
                            <p className='f5 mt0 mb0'>Updated Course</p>
                            <span className='f7 fw1 mt0'>by anonymous</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='topContainer'>
                    <div className='bg-near-white tl v-mid pa3 br4 ma2 compressContainer'>
                        <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjz-NTEU9IaJmuj_3nNP1nCPALu0Z7HRbtg&usqp=CAU'
                            width='15em' height='15em' alt=''/>
                        <h3 className='f7 mb0'>1800</h3>
                        <span className='f7 fw1 mt0'>points</span>
                    </div>
                    <div className='bg-near-white pa3 tl v-mid br4 ma2 compressContainer'>
                            <BatteryFullIcon style={{ fontSize: 20 }}/>
                            <h3 className='f7 mb0'>45.3%</h3>
                            <span className='f7 fw1 mt0'>complete</span>
                    </div>
                </div>
                <div className='bg-near-white pa3 br4 ma2 flex'>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3BraFRzQ7sOdIPK0WwGajvCAmnhvX9ftVbA&usqp=CAU'
                        className='br4 pa2' width='30px' height='30px' alt=''/>
                    <p className='flex flex-column fw3 f7 mt1'>
                        <strong className='nowrap mb0'>Alex Dixon</strong><br/>
                        @alexlearns
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LeftPane;