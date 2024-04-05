const express = require('express');
const router = express.Router(); 
const userModel = require('../Schema/User_Schema');
const Joi = require('joi');
const jsonWebToken=require('jsonwebtoken')
require('dotenv').config()

// Middleware
router.use(express.json());

const jwt=(user)=>{
    return jsonWebToken.sign({name:user.UserName},process.env.SECRET_KEY,{expiresIn:"1h"})
}

const userValidation = Joi.object({
    UserName: Joi.string().alphanum().min(4).max(15).required(),
   Email: Joi.string().email(),
    Password: Joi.string().required()
    
})

function validateUser(req, res, next) {
    const { error } = userValidation.validate(req.body)
    if (error) {
        return res.status(400).json({ erro: error.details[0].message })
    }
    next();
}

router.get("/", async (req, res) => {
    try {
        const UserName = req.userData.UserName;
        const user = await userModel.findById(UserName);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    }catch (error) {
        console.log(error); 
        res.status(500).send("An error occurred");
    }
});

router.post("/signin", async (req, res) => {
    try {
        const { UserName, Password } = req.body;
        const user = await userModel.findOne({ UserName, Password });
        if (user) {
            const token = jwt(user);
            res.status(200).json({ user, token });
        } else {
            res.status(401).json({ message: "Invalid username or password" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred");
    }
});


router.post('/signup', async (req, res) => {
    try {
      const { UserName, Email, Password } = req.body;

      const existingUser = await userModel.findOne({ Email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const newUser = new userModel({ UserName, Email, Password });
      await newUser.save();
  
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "An error occurred" });
    }
  });


router.put("/:id", async (req, res) => {
    try {
        const userid = req.params.id;
        const updatedUser = await userModel.findByIdAndUpdate(userid, req.body, { new: true});
        res.json(updatedUser);
    } catch (error) {
        console.log(error); 
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await userModel.findByIdAndDelete(userId);
        res.json(deletedUser)
    } catch (error) {
        console.log(error);
    }
});

router.patch("/:id", async (req, res) => {
        try {
            const userid = req.params.id;
            const updatedUser = await userModel.findByIdAndUpdate(userid, req.body, { new: true});
            res.json(updatedUser);
        } catch (error) {
            console.log(error); 
        }
});


module.exports = router;
