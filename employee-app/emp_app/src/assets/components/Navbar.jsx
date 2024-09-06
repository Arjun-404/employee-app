import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>My App</Typography>&nbsp;
                  <Link to='/add'>
                      <Button variant='contained'>Add</Button></Link>&nbsp; &nbsp;
                  <Link to='/view'>
                      <Button variant='contained' color='secondary'>View</Button></Link>&nbsp; &nbsp;
                  
              </Toolbar>

          </AppBar>
    </div>
  )
}

export default Navbar