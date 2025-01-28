const express = require('express');
const Router = express.Router;
const { adminModel } = require('../db');
const { z } = require('zod');
const bcrypt = require('bcrypt');
const auth = require('../auth');
const jwt = require('jsonwebtoken');
const  { JWT_ADMIN_PASSWORD } = require("../config");


mongoose.connect("mongodb://localhost:27017/WebScape");

const adminRouter = Router();

adminRouter.post('/signup', async (req, res) => {

    const requiredBody = z.object({
        email: z.string().min(5).email(),
        password: z.string().min(5).max(15),
        firstName: z.string().min(3).max(20),
        lastName: z.string().min(3).max(20),
    });

    const parsedData = requiredBody.safeParse(req.body)

    if (!parsedData.success) {
        res.json({
            message: "Sign Up Failed",
            error: parsedData.error.issues[0].message
        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const hashedPassword = await bcrypt.hash(password, 5)

    try {
        adminModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        })
    } catch (err) {
        res.json({
            Error: err
        })
        return
    }


    res.json({
        message: "Admin SignUp successfully"
    })
})

adminRouter.post('/signin', async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    const admin = adminModel.findOne({
        email: email
    })

    if (!admin) {
        res.status(403).json({
            message: "We don't have your credentials in our database"
        })
        return
    }

    const adminConfirm = await bcrypt.compare(password, admin.password);

    if (!adminConfirm) {
        res.json({
            messge: "Please check your password"
        })
        return
    }
    const token = jwt.sign(email, JWT_ADMIN_PASSWORD);
    res.json({
        massage: "Signin successfully",
        token: token
    })
})

adminRouter.post('/course', async (req, res) => {
    const adminId = req.userId;

    const { title, description, imageUrl, price } = req.body;

    // creating a web3 saas in 6 hours
    const course = await courseModel.create({
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price, 
        creatorId: adminId
    })

    res.json({
        message: "Course created",
        courseId: course._id
    })
})

adminRouter.put("/course", adminMiddleware, async function(req, res) {
    const adminId = req.userId;

    const { title, description, imageUrl, price, courseId } = req.body;

    // creating a web3 saas in 6 hours
    const course = await courseModel.updateOne({
        _id: courseId, 
        creatorId: adminId 
    }, {
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price
    })

    res.json({
        message: "Course updated",
        courseId: course._id
    })
})


adminRouter.get("/course/bulk", adminMiddleware,async function(req, res) {
    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId: adminId 
    });

    res.json({
        message: "Course updated",
        courses
    })
})



module.exports = {
    adminRouter: adminRouter
}
