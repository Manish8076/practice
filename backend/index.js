import express from 'express'

const app = express();

// middleware 




app.get('/', (req,res,next)=>{
    res.send('onlyuuuuuuuuuuuuuuuuuuu welcome to the first code ')
})

app.get('/test', (req,res)=> {
    res.send(  '<h1>Just for test</h1>' )
})

app.use( (req,res,next)=>{
    console.log("middleware is runned");
    next()    
} )

app.get('/profile', (req,res)=>{
    res.send("<h1>this includes all the details of the user</h1>")
    })
app.use((req,res,next)=>{
    console.log("Middleware is runned in the server");
    next()
    
})

app.get('/profile/:username', (req,res)=>{
    res.send(`Hello my name is ${req.params.username}`)
})




app.listen(3000,function() {
    console.log("Server is connected");
})