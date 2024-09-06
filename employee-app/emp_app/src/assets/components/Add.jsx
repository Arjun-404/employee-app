import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
      <div>
          br
          <h1>Add</h1>
          <TextField label="Name" variant="outlined" /><br /><br />
          <TextField label="Age" variant="outlined" /><br /><br />
          <TextField label="Salary" variant="outlined" /><br /><br />
          <TextField label="Department" variant="outlined" /><br /><br />
          <Button variant='contained'>Submit</Button>&nbsp;
    </div>
  )
}

export default Add