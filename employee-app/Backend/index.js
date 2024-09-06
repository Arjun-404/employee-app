
//1.importing express
const express = require('express')
require("./connection")
var EmployeeModel = require('./model/employee')
var cors= require("cors")

//2.initialize
const app = new express()

//mid
app.use(express.json())
app.use(cors())


//3.Api creation
app.get('/', (req, res) => { 
    res.send("Message from server")

})                   
app.get('/trial', (req, res) => { 
    res.send("this is a trial")
} )

//add Api
app.post("/add", async (req, res) => {
    try {
        await EmployeeModel(req.body).save();
        res.send({ message: "data added!!" })
    } catch (error) {
        console.log(error)
    }
})
app.get("/view", async (req, res) => {
    try {
        var show = await EmployeeModel.find();
        res.send(show)
    } catch (error) {
        console.log(error)
    }
})


//to delete
app.delete("/remove/:id", async (req, res) => { 
    try {
        await EmployeeModel.findByIdAndDelete(req.params.id)
        res.send({message:"data deleted successfully!!"})
    } catch (error) {
        console.log(error)
    }
})
//to update

app.put("/update/:id", async (req, res) => {
    try {
        await EmployeeModel.findByIdAndUpdate(req.params.id, req.body);
        res.send({ message: "data updated successfully!!" })
    } catch (error) {
        console.log(error)
    }
})
//4.port
app.listen(3004, () => {
    console.log("Port is Running");
})
