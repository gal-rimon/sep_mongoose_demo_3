const express = require('express');
const router = express.Router();
const PostModel = require('../models/Post');

router.route('/')
    .get(async (req, res) => {
        res.json(await PostModel.find().populate('author'));
    })
    .post(async (req, res) => {
        await PostModel.create(req.body);
        res.sendStatus(201);
    });

router.route('/:id')
    .get(async (req, res) => {
        res.json(await PostModel.findById(req.params.id).populate('author'));
    })
    .delete(async (req, res) => {
        await PostModel.findByIdAndDelete(req.params.id)
        res.send(`delete ${req.params.id}`);
    })
    .patch(async (req, res) => {
        await PostModel.findByIdAndUpdate(req.params.id, req.body);
        res.send(`update ${req.params.id}`);
    });

module.exports = router;