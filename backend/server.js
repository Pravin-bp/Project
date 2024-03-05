const express=require('express')
const mysql=require('mysql')
const cors=require('cors')
const app=express()
app.use(cors())
const util=require('util')

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"hotel"

})
db.query = util.promisify(db.query);

app.get("/",(req,res)=>
{
    return res.json("from")
})

app.get("/users",(req,res)=>
{
    //const f="mojito"
    const sql="SELECT * FROM foodsafari"
    db.query(sql,(err,data)=>
    {
        if(err)
        {
            console.log(err)
            return res.json(err)
        }
        return res.json(data)
    })
    })
app.listen(8081,()=>
{
    console.log("yes")
})