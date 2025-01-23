const express = require('express');
const Router = express.Router;
const { userModel } = require('../db');

// const { Router } = require('express'); // Both Are the Same

const userRouter = Router();

userRouter.post('/signup', (req, res) => {
    res.json({
        message: "User signUp end point"
    })
})

userRouter.post('/signin', (req, res) => {
    res.json({
        message: "User sign in end point"
    })
})

userRouter.get('/purchases', (req, res) => {
    res.json({
        message: "User purchases end point"
    })
})

module.exports = {
    userRouter: userRouter
}