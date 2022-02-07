const express = require('express')
const { userInfo } = require('os')
const app = express()

app.get( '/', (req,res,next) => {

  res.send("Hello world")
} )

app.get( '/paolo', (req,res,next) => {
  if (Math.random() > 0.5){
    res.send("X")  
  }else{
    res.send("O")
  }
} )

app.listen(3000)
