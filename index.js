const express = require('express');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course')
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log("port is listing to ", port)
});

app.use(express.json());

app.use('/user', userRouter);
app.use('/course', courseRouter);
