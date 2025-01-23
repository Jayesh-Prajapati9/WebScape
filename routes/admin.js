const express = require('express');
const Router = express.Router;
const { adminModel } = require('../db');


const adminRouter = Router();

adminRouter.post('/signup', (req, res) => {

    

    res.json({
        message: "admin signUp end point"
    })
})

adminRouter.post('/signin', (req, res) => {
    res.json({
        message: "User sign in end point"
    })
})

adminRouter.put('/', (req, res) => {
    res.json({
        message: "User purchases end point"
    })
})

module.exports = {
    adminRouter: adminRouter
}