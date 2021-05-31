import { Box, Card, Typography,Paper,InputBase,IconButton, Toolbar } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import ReplayOutlinedIcon from '@material-ui/icons/ReplayOutlined';
import React from 'react'
import './Content.css'
import Table from './Table';
function Content() {
    return (
        <Box  className="content">
            <Box className="content-top">
            <Typography variant="h5" className="title-content">Nhân viên</Typography>
            < Box className="ll">
                <Button variant="contained" color="primary" className="button-content">
                    Thêm mới nhân viÊN
                </Button>  
            </Box>
            </Box>
           <Card className="card-content">
               <Toolbar>
               <Paper component="form" className="input-root">
                     <InputBase className="input" placeholder="Tìm kiếm nhân viên"  inputProps={{ 'aria-label': 'search google maps' }}                         />
                      <IconButton type="submit" className="iconbutton" aria-label="search">
                          <SearchIcon />
                      </IconButton>
                </Paper>
                <IconButton type="submit" className="icon-reload" aria-label="search">
                    <ReplayOutlinedIcon />
                </IconButton>
                <Table />
               </Toolbar>
              
           </Card>
        </Box>
        
    )
}

export default Content
