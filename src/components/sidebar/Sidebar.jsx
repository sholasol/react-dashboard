import React from 'react'
import "./sidebar.css"
import { LineStyle, Assessment, TrendingUp, InsertChart, DisplaySettings, Email, CoPresent, Apps, Autorenew , SettingsPower } from '@mui/icons-material'
import {Link} from "react-router-dom";

export default function Sidebar() {
    return (
        <div className='sidebar'> 
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                    <Link to="/" className='link'>
                        <li className="sidebarListItem active">
                            <LineStyle className='sidebarIcon'/>Home
                        </li>
                    </Link>
                        <li className="sidebarListItem">
                            <InsertChart className='sidebarIcon'/>Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon'/>Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className='link'>
                            <li className="sidebarListItem">
                                <CoPresent className='sidebarIcon'/>Users
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Email className='sidebarIcon'/>Messaging
                        </li>
                        <Link to="/product" className='link'>
                            <li className="sidebarListItem">
                                <Apps className='sidebarIcon'/>Products
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Autorenew className='sidebarIcon'/>Feedbacks
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Manage</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <DisplaySettings className='sidebarIcon'/>Manage
                        </li>
                        <li className="sidebarListItem">
                            <Assessment className='sidebarIcon'/>Report
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon'/>Sales
                        </li>
                        <li className="sidebarListItem">
                            <SettingsPower  className='sidebarIcon'/>SignOut
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
