const express = require('express');
const router = express.Router();
const {getgoals, setgoal, updategoal, deletegoal} = require('../controllers/goalcontroller')

router.get('/', getgoals)

router.post('/',setgoal)

router.put('/:id',updategoal)

router.delete('/:id',deletegoal)


module.exports = router // could not understand