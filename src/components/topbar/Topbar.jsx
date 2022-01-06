import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@mui/icons-material'


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className='logo'> myAdmin</span>
                </div>
                <div className="topRight">
                      <div className="topBarIconsContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>  
                      </div>
                      <div className="topBarIconsContainer">
                        <Language/>
                        <span className="topIconBadge">2</span> 
                      </div>
                      <div className="topBarIconsContainer">
                        <Settings/>
                      </div>
                      <img src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
