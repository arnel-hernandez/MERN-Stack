const express = require('express')
const router = express.Router()

//Item Model
const Item = require('../../models/item')

//@route GET /items , show items
router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
})

//@route POST /items , create an item
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })

    newItem.save().then(item => res.json(item))
})

//@route DELTE /items , delete an item
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.delete().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }))
})

module.exports = router;