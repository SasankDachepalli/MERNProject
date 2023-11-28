const express = require('express');
const Items = require('../models/FoodItems');
const { body,validationResult } = require('express-validator');
const FoodItems = require('../models/FoodItems');
const router = express.Router()

router.post("/createitem", async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            await FoodItems.create({
                // name: req.body.name,
                // password : req.body.i,
                // email :req.body.email,
                // location : req.body.location
                CategoryName: req.body.CategoryName,
                name: req.body.name,
                img: req.body.img,
                price :req.body.price
            })
            res.json({ success: true });
        }
        catch {
            console.log("error")
            res.json({ success: false });
        }
    });

module.exports = router;