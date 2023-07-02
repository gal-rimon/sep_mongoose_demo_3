const express = require('express');
const router = express.Router();
const ProductModel = require('../models/Product');

router.route('/')
    .get(async (req, res) => {
        res.json(await ProductModel.find().populate('category'));
    })
    .post(async (req, res) => {
        await ProductModel.create(req.body);
        res.sendStatus(201);
    });

router.route('/:id')
    .get(async (req, res) => {
        res.json(await ProductModel.findById(req.params.id).populate('category'));
    })
    .delete(async (req, res) => {
        await ProductModel.findByIdAndDelete(req.params.id)
        res.send(`delete ${req.params.id}`);
    })
    .patch(async (req, res) => {
        await ProductModel.findByIdAndUpdate(req.params.id, req.body);
        res.send(`update ${req.params.id}`);
    });

module.exports = router;