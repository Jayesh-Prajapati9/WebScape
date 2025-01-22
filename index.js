const express = require('express');

const app = express();

let port = 8080;

app.listen(port, () => {
    console.log("port is listing to ", port)
});

app.use(express.json());

app.post('/user/signup', (req, res) => {
    res.json({
        message: "User signUp end point"
    })
})
app.post('/user/signin', (req, res) => {
    res.json({
        message: "User sign in end point"
    })
})
app.get('/courses', (req, res) => {
    res.json({
        message: "All courses end point"
    })
})
app.get('/user/purchases', (req, res) => {
    res.json({
        message: "User purchases end point"
    })
})
app.post('/course/purchase', (req, res) => {
    res.json({
        message: "Course purchase end point"
    })
})