const express = require('express');
const Router = express.Router;

// const { Router } = require('express'); // Both Are the Same

const courseRouter = Router();


courseRouter.get('/courses', (req, res) => {
    res.json({
        message: "All courses end point"
    })
})

courseRouter.post('/purchase', (req, res) => {
    res.json({
        message: "Course purchase end point"
    })
})

module.exports = {
    courseRouter: courseRouter
}