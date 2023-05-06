const express = require('express');
const app = express();

const port = 8080;


app.get('/',(req,res)=>{
    console.log(req);
    console.log('i am inside get');
    // res.send('Hi welcome Name is  ' + req.query['name'] + ' age is '+req.query['age']);
    res.json([
        {name:req.query['name'],age:req.query['age']},
        {name:req.query['name'],age:req.query['age']},
        {name:req.query['name'],age:req.query['age']},
    ]);
    console.log(req.query['name'] )
})

let usersList = [
    {name:'Ponneelan',age:22},
    {name:'Thangam',age:20},
    {name:'Vicky',age:22},
    {name:'Ragul',age:22}
];
app.get('/users',(req,res)=>{
    res.json(usersList);
})

app.get('/getuser/:age',(req,res)=>{
    res.json(usersList.filter(e => e.age == req.params['age']));
});

app.get('/myapi',()=>{
    console.log('i am inside myapi');
})

app.listen(port,()=>{
    console.log('listening on port 3000');
})



