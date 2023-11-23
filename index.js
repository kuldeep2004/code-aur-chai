require('dotenv').config
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hell',(req,res)=>{
    res.send('thik')
})

app.get('/youtube',(req,res)=>{
    res.send('Youtube')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})