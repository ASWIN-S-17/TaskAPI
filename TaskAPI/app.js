

const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB=require('./DB/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
// middleware
app.use(express.json())

//routes

app.use('/api/v1/tasks',tasks)
app.use(notFound)
const port = process.env.PORT || 3000

const start= async()=>{
    try {
        await connectDB(process.env.MongoConnect)
        app.listen(`${port}`,(req,res)=>{
            console.log('Server is listening on 3000');
        })
    } catch (error) {
        console.log(error);
    }
}

start()
