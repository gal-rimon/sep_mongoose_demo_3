const express = require('express');
const router = express.Router();
const CategoryModel = require('../models/Category');

router.route('/')
    .get(async (req, res) => {
        res.json(await CategoryModel.find());
    })
    .post(async (req, res) => {
        await CategoryModel.create(req.body);
        res.sendStatus(201);
    });

router.route('/:id')
    .get(async (req, res) => {
        res.json(await CategoryModel.findById(req.params.id));
    })
    .delete(async (req, res) => {
        await CategoryModel.findByIdAndDelete(req.params.id)
        res.send(`delete ${req.params.id}`);
    })
    .patch(async (req, res) => {
        await CategoryModel.findByIdAndUpdate(req.params.id, req.body);
        res.send(`update ${req.params.id}`);
    });

module.exports = router;