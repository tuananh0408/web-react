import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import Box from '@material-ui/core/Box';

import Avatar from '@material-ui/core/Avatar';
function header() {

    return (
       <Box className='main'>
        <AppBar position="static">
            <Toolbar className="toolbar">
                <IconButton edge="start" className="menuButton" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="subtitle1" className="title">
                    Công ty TNHH Sản Xuất - Thương Mại - Dịch vụ quy Phúc
                </Typography>
                <IconButton edge="start" className="menuButton" aria-label="menu">
                    <ArrowDropDownOutlinedIcon />
                </IconButton>
                <IconButton edge="false" className="menuButton3" aria-label="menu">
                    <NotificationsActiveOutlinedIcon />
                </IconButton>
                <Avatar className="avatar" src="/broken-image.jpg" />
                <Typography variant="subtitle2" className="subtitle">
                    Nguyễn Văn Mạnh
                </Typography>
                <IconButton edge="start" className="menuButton4" aria-label="menu">
                    <ArrowDropDownOutlinedIcon />
                </IconButton>
            </Toolbar>
            
        </AppBar>
       </Box>
    )
}

export default header
