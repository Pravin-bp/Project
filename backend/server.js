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
    port:process.env.POR,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE

})

db.connect((err,data) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
    } else {
      console.log('Connected to MySQL');
    }
  });
//db.query = util.promisify(db.query);

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
    app.get("/post",async (req,res)=>
{
    //const f="mojito"
    const sql=`insert into foodsafari values
    (1,'Lemon',20,'Fresh Juice'),
    (2,'Ginger Lemon',30,'Fresh Juice'),
    (3,'Spicy Lemon',30,'Fresh Juice'),
    (4,'Pineapple Lemon',30,'Fresh Juice'),
    (5,'Pineapple',40,'Fresh Juice'),
    (6,'Sathukkudi',40,'Fresh Juice'),
    (7,'Red Banana',50,'Fruit Shake'),
    (8,'Dates',50,'Fruit Shake'),
    (9,'Apple',60,'Fruit Shake'),
    (10,'Pomogranate',60,'Fruit Shake'),
    (11,'Fig',60,'Fruit Shake'),
    (12,'Kiwi',80,'Fruit Shake'),
    (13,'Dry Fruit',80,'Fruit Shake'),
    (14,'Strawberry',50,'Milk Shake'),
    (15,'Butter Scotch',50,'Milk Shake'),
    (16,'Black Current',50,'Milk Shake'),
    (17,'Chocomocha',50,'Milk Shake'),
    (18,'Choco Oreo',60,'Milk Shake'),
    (19,'Nutty Berry',60,'Milk Shake'),
    (20,'Kitkat Shake',70,'Milk Shake'),
    (21,'Sneaker Shake',70,'Milk Shake'),
    (22,'High Protein',99,'Milk Shake'),
    (23,'Blue Ocean',60,'Mojito'),
    (24,'Classic Mint',60,'Mojito'),
    (25,'Green Land',70,'Mojito'),
    (26,'Lichy',70,'Mojito'),
    (27,'Sweet Lassi',30,'Lassi'),
    (28,'Strawberry Lassi',30,'Lassi'),
    (29,'Dates Lassi',30,'Lassi'),
    (30,'Gulkanth',30,'Lassi'),
    (31,'Royal',80,'Falooda'),
    (32,'Love Birds',100,'Falooda'),
    (33,'Big Temple',120,'Falooda'),
    (34,'Vennila',40,'Ice Cream'),
    (35,'Strawberry',40,'Ice Cream'),
    (36,'Pista',40,'Ice Cream'),
    (37,'Chocolate',50,'Ice Cream'),
    (38,'Butter Scotch',50,'Ice Cream'),
    (39,'Black Current',60,'Ice Cream'),
    (40,'Vsp Mix',40,'Ice Cream'),
    (41,'Bbc Mix',40,'Ice Cream'),
    (42,'Deathby Choco',40,'Ice Cream'),
    (43,'Veg Sandwich',50,'Sandwich'),
    (44,'Chicken Sandwich',70,'Sandwich'),
    (45,'Chicken Cheese',80,'Sandwich'),
    (46,'Classic',70,'Shawarma'),
    (47,'Spicy',80,'Shawarma'),
    (48,'Mexican',80,'Shawarma'),
    (49,'Bbq',90,'Shawarma'),
    (50,'Spicy Plate',130,'Shawarma'),
    (51,'Mexican Plate',130,'Shawarma'),
    (52,'Bbq Plate',130,'Shawarma'),
    (53,'Only Chicken',160,'Shawarma'),
    (54,'Quater Bbq',100,'Barbeque'),
    (55,'Half Bbq',190,'Barbeque'),
    (56,'Veg Rice',60,'Chineese'),
    (57,'Veg Noodles',60,'Chineese'),
    (58,'Mushroom Rice',70,'Chineese'),
    (59,'Mushroom Noodles',70,'Chineese'),
    (60,'Egg Rice',70,'Chineese'),
    (61,'Egg Noodles',70,'Chineese'),
    (62,'Chicken Rice',80,'Chineese'),
    (63,'Chicken Noodles',80,'Chineese'),
    (64,'Podimas',30,'Side Dish'),
    (65,'Chicken65 120gm',50,'Side Dish'),
    (66,'Lollipop 5pcs',80,'Side Dish'),
    (67,'Chilli Mushroom',80,'Side Dish'),
    (68,'Chilli Chicken',90,'Side Dish'),
    (69,'Manchurian',100,'Side Dish'),
    (70,'Lollipop Saucy',100,'Side Dish')`
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