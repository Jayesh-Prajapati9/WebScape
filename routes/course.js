const express = require('express');
const Router = express.Router;

const { courseModel } = require('../db'); 

// const { Router } = require('express'); // Both Are the Same

const courseRouter = Router();
mongoose.connect("mongodb://localhost:27017/WebScape");

courseRouter.get('/courses', async (req, res) => {
    const userId = req.userId;
    const courseId = req.body.courseId;

    // should check that the user has actually paid the price
    await purchaseModel.create({
        userId,
        courseId
    })

    res.json({
        message: "You have successfully bought the course"
    })
})

courseRouter.post('/purchase', async (req, res) => {
    const courses = await courseModel.find({});

    res.json({
        courses
    })
})

module.exports = {
    courseRouter: courseRouter
}