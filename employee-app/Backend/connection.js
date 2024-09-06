var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://arjunkj500:arjun@cluster0.mpx3a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
  console.log("db connected")  
    })
.catch((err)=>{
   console.log(err)
})