const express = require('express')
const fileUpLoad = require('express-fileupload')

const app = express() 

app.use(fileUpLoad())

app.post('/upload',(req,res) => {
   if(req.files === null){
     return res.status(400).json({msg:'No file upload'})
   }
   const file = req.files.file
   file.mv(`${__dirname}/client/public/uploads/${file.name}`,err => {
     if(err){
        console.error(err)
        return res.status(500).send(err)
      }
      res.json({fileName:file.name,filePath:`/uploads/${file.name}`})
   })
})


app.listen(5000,() => console.log(`server run on port 5000`))