const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');

router.route('/')
    .get(async (req, res) => {
        res.json(await UserModel.find());
    })
    .post(async (req, res) => {
        await UserModel.create(req.body);
        res.sendStatus(201);
    });

router.route('/:id')
    .get(async (req, res) => {
        res.json(await UserModel.findById(req.params.id));
    })
    .delete(async (req, res) => {
        await UserModel.findByIdAndDelete(req.params.id)
        res.send(`delete ${req.params.id}`);
    })
    .patch(async (req, res) => {
        await UserModel.findByIdAndUpdate(req.params.id, req.body);
        res.send(`update ${req.params.id}`);
    });

module.exports = router;