const { error } = require("console")
const asynchandler = require('express-async-handler')
const Goal = require('../model/goalmodel')


//get request to get the values
const getgoals = asynchandler( async(req,res) => {
    const vargoal = await Goal.find()
    res.status(200).json(vargoal)
}
)

//post request to insert the values
const setgoal = asynchandler( async(req,res) => {
      if (!req.body.text)
    {
        res.status(400)
        throw new Error('Please its error text was not provided')
    }

    const vargoal = await Goal.create({text : req.body.text})

    res.status(200).json({vargoal})
    console.log('Data was inserted')
})

//put to update the goal
const updategoal = asynchandler( async(req,res) => {
    console.log('In update Goal')
    const getgoal = await Goal.findById(req.params.id)
    //console.log(getgoal)

    if(!getgoal){
        throw new Error('Goal not found')
        res.status(400)
    }

    const updatedgoal = await Goal.findByIdAndUpdate(req.params.id,req.body)
    console.log('Goal was updated')
    console.log(updatedgoal)
    res.status(200).json(updatedgoal)
})

const deletegoal = asynchandler( async(req,res) => {

    const getgoal = await Goal.findById(req.params.id)
    //console.log(getgoal)

    if(!getgoal){
        throw new Error('Goal not found to be deleted')
        res.status(400)
    }

    const deletedgoal = await Goal.findByIdAndRemove(req.params.id)
    console.log('Goal Deleted')

    res.status(200).json({Message : `This is Goals deleted 2.0 ${req.params.id}`})
})


module.exports = {
    getgoals,
    setgoal,
    updategoal,
    deletegoal
    
}