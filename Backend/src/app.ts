import express from 'express'


const app = express();

app.get('/' , (req,res)=>{
    res.send("Hello world");
})

app.post('/signin' , (req,res)=>{
})

app.listen(3000 , ()=>{
    console.log("app listening to port ",3000);
})