import React from 'react'

// import closeIcon from '../../icons/closeIcon'
// import onlineIcon from '../../icons/onlineIcon'

import CloseIcon from '@material-ui/icons/Close'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import './InfoBar.css'

const InfoBar = ({ room }) => {

    return (
        <div className="infoBar">
            
            <div className="leftInnerContainer">
                <FiberManualRecordIcon style={{ color : 'green', padding : '5px'}} />
                {/* <img className="onLineIcon" src={onlineIcon} alt="online_image" /> */}
                <h3> {room} </h3>
            </div>

            <div className="rightInnerContainer">
                <a href="/"> <CloseIcon color='error' /> </a>
                {/* <a href="/"> <img src={closeIcon} alt="close_image" /> </a> */}
            </div>

        </div>
    )
}

export default InfoBar