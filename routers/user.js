const express=require('express')
const router=new express.Router()

const db=require('../db')

router.post('/users/add',async (req,res)=>{

    try {
        await db.query("INSERT INTO users (username, email) VALUES ($1,$2)",[req.body.username, req.body.email])

        
            res.status(200).send()
    } catch (e) {
        res.status(400).send(e)
    }
      
})

router.get('/users',async (req,res)=>{
    
    try {
        let users=await db.query(
            `SELECT username, email FROM users`
        )
            res.status(200).send(users)
    } catch (e) {
        res.status(400).send(e)
    }
      
})
module.exports=router