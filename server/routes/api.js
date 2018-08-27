const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const registerUser = require('../models/RegisteredUser')
const mongoose = require('mongoose')


const mysql = require('mysql')

const router = express.Router()

//mysql api

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'csv_db'
  });
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... \n\n");  
} else {
    console.log("Error connecting database ... \n\n");  
}
});

router.get("/qus",function(req,res){
    connection.query('SELECT * from tbl_name', function(err, rows, fields) {
   //  connection.end();
      if (!err){
        console.log('The solution is: ', rows);
        res.json(rows);
       }
      else{
        console.log('Error while performing Query.');
       }
      
      });
    });
    router.get("/qus/:id",function(req,res){
      var id = req.params['id'];
       connection.query('SELECT * from tbl_name where QUS_ID = ' + id, function(err, rows, fields) {
       // connection.end();
         if (!err){
           console.log('The solution is: ', rows);
           res.json(rows);
          }
         else{
           console.log('Error while performing Query.');
          }
         
         });
       });
   






const db = "mongodb://divaymohan:divmoh1305@ds255329.mlab.com:55329/eventdb"

mongoose.connect(db, err=>{
    if(err){
        console.error('Error!'+err)
    } else{
        console.log('Connected to MongoDb')
    }

})
router.get('/',(req, res)=>{
    res.send('From API route')

})


router.post('/register',(req, res)=>{
    let userData = req.body
    let user = new registerUser(userData)
    if(user.password==user.password1){
        user.save((error, registeredUser)=>{
            if(error){
                console.log(error)
            } else{
                let payload = { subject: registeredUser._id }
                let token = jwt.sign(payload,'secretKey')
                res.status(200).send({token})
            }
        })
    }
    else{
        res.status(401).send('Password not matched')
            
    }

})

router.post('/login',(req, res)=>{
    let userData = req.body
    User.findOne({email: userData.email},(error, user)=>{
        if(error){
            console.log(error)
        } else
            if(!user){
                res.status(401).send('Invalid email')
            }else{
                if(user.password !== userData.password){
                    res.status(401).send('Invalid password')

                } else{
                    let payload = { subject: user._id }
                    let token = jwt.sign(payload,'secretKey')
                    res.status(200).send({token})
                    
                }
            }
        
    })

})
// router.post('/register',(req, res)=>{
//     let userData = req.body
    
//     let user = new User(userData)
//     user.save((error, registeredUser)=>{
//         if(error){
//             console.log(error)
//         } else{
//             user.findOne({email : userData.email}),(error,user)=>{
//                 if(user){
//                     console.log("already exists user.>!!")
//                 }
//                 else{
//                     let payload = { subject: registeredUser._id }
//                     let token = jwt.sign(payload,'secretKey')
//                     res.status(200).send({token})

//                 }
//             }
            
//         }
//     })
    
    
        
    



router.get('/events', (req, res)=>{
    let events = [
        {
            "_id": "1",
            "name": "IES",
            "description": "Indian Engineering Services",
            "date": "CONDUCTED BY: UPSC"
        },
        {
            "_id": "2",
            "name": "CDS",
            "description": "Combined defence services",
            "date": "CONDUCTED BY: UPSC"
        },
        {
            "_id": "3",
            "name": "NDA-1",
            "description": "National Defence Academy",
            "date": "CONDUCTED BY: UPSC"
        },
        {
            "_id": "4",
            "name": "NDA-2",
            "description": "National Defence Academy",
            "date": "CONDUCTED BY: UPSC"
        },
        {
            "_id": "5",
            "name": "CAPF",
            "description": "Central Armed Police forces",
            "date": "CONDUCTED BY: UPSC"
        },
        {
            "_id": "6",
            "name": "SCRA",
            "description": "Special class railway aprentice",
            "date": "CONDUCTED BY: UPSC"
        },
        {
            "_id": "6",
            "name": "PSC",
            "description": "Public services States",
            "date": "CONDUCTED BY: PSC"
        }


    ]
    res.json(events)

})
router.get('/special', verifyToken, (req, res)=>{
    let events = [
        {
            "_id": "1",
            "name": "divay mohan",
            "description": "student",
            "date": "2018-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "diksha rajput",
            "description": "student",
            "date": "2018-05-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "tushar tiwari",
            "description": "student",
            "date": "2014-04-23T18:25:43.511Z"
        },
        {
            "_id": "4",
            "name": "anand singh kushwah",
            "description": "student",
            "date": "2018-02-23T18:25:43.511Z"
        },
        {
            "_id": "5",
            "name": "raj kumar",
            "description": "student",
            "date": "2013-04-23T18:25:43.511Z"
        },
        {
            "_id": "6",
            "name": "allan dsouza",
            "description": "student",
            "date": "2012-02-23T18:25:43.511Z"
        }


    ]
    res.json(events)

})
function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token==='null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token,'secretKey')
    if(!payload){
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()


}

module.exports = router
