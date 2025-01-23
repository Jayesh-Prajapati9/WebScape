const express = require('express');
const { userRouter } = require('./routes/user');
const { adminRouter } = require('./routes/admin');
const { courseRouter } = require('./routes/course')
const mongoose = require('mongoose')

const app = express();

let port = 8080;

app.use(express.json());

app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/admin', adminRouter);


async function main(){
    await mongoose.connect('mongodb://localhost:27017/WebScape');
    app.listen(port, () => {
        console.log("port is listing to ", port)
    });
    
}