import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    var [user, setUser] = useState([]);
    useEffect(() =>{
    axios.get("http://localhost:3004/view")
        .then((res) => {
            console.log(res.data)
            setUser(res.data)
        })
    .catch((err) => console.log(err))
},[])
    const delValue = (id) => {
        axios.delete("http://localhost:3004/remove/" + id)
            .then((res) => {
                console.log(res.data)
                alert("Employee Deleted");
                window.location.reload();
            })
    }
    return (
        <div>
            <br />
            <h1>View</h1>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Department</TableCell>
                            <TableCell>Salary</TableCell>
                            <TableCell>Confirmation</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((val) => {
                            return (
                                <TableRow>
                                    <TableCell>{val.Name}</TableCell>
                                    <TableCell>{val.Age}</TableCell>
                                    <TableCell>{val.Dept}</TableCell>
                                    <TableCell>{val.Sal}</TableCell>
                                    <TableCell>
                                        <Button size='small' variant='contained'>Update</Button>&nbsp;
                                        <Button size='small' variant='contained' onClick={() => {
                                            delValue(val._id)
                                        }}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>

                </Table>
            </TableContainer>
      </div>
  )
}

export default View