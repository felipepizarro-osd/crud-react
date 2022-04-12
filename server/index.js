const express =require('express');
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser')
const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'T0m4s&&M0ncho1998',
    database:'CRUD',
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.get('/api/get',(req,res)=>{
    const sqlShow = 'SELECT * FROM user';
    db.query(sqlShow,(err,result)=>{
        res.send(result)
    })
})
app.post('/api/insert',(req,res)=>{
    const userName = req.body.userName
    const LastName = req.body.lastName
    const sqlInsert = 'INSERT INTO user (name,lastname) values (?,?)'
    db.query(sqlInsert,[userName,LastName],(err,result)=>{
        console.log(result);
    })
})

app.listen(3001, () => {
    console.log("running on port 3001");
})
