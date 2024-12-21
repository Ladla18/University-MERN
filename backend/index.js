const express = require("express")
const app = express()
const PORT = 5000
const mongoose = require("mongoose")
const userRoute = require("./routes/userRoute")

app.use(express.json())


mongoose.connect("mongodb+srv://ecom:amanladla@cluster0.en3tt.mongodb.net/university-MERN")
.then(()=>{
    console.log("Connected to MongoDB")
})
.catch(()=>{
    console.log("Error connecting to MongoDB")
})

app.use("/api",userRoute)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})