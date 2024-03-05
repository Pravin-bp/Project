const express=require('express')
const mysql=require('mysql')
const cors=require('cors')
const app=express()
app.use(cors())
const util=require('util')
require('dotenv').config()
const port=process.env.PORT || 8081


const db=mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE

})

db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
    } else {
      console.log('Connected to MySQL');
    }
  });
db.query = util.promisify(db.query);

app.get("/",(req,res)=>
{
    return res.json("from")
})

app.get("/users",async (req,res)=>
{
    //const f="mojito"
    const sql="SELECT * FROM foodsafari"
    await db.query(sql,(err,data)=>
    {
        console.log("logs",data)
        if(err)
        {
            console.log(err)
            return res.json(err)
        }
        return res.json(data)
    })
    })
app.listen(port,()=>
{
    console.log("yes")
})