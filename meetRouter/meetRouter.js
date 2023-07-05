import express from 'express'
import Meetup from '../meetModel/meetModel.js'

const router=new express.Router()

router.post('/meetup',async(req,res) => {
    console.log(req.body)
    const meetup=new Meetup(req.body)
    try{
        await meetup.save()
        res.send(meetup)
    }catch(error){
        res.status(201).json({message:'there is an error'})
    }
})

router.get('/meetup',async(req,res) => {
    try{
        const meetup=await Meetup.find({})
        res.send(meetup)
    }catch(error){
        res.status(201).json({message:'there is an error'})
    }
})

export default router