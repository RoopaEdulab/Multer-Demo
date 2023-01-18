const express = require("express")
const multer = require("multer")
const app = express()

const upload = multer({
    storage:multer.diskStorage({
       destination:function(req, file ,cb) {    //cb is called callback write etc in cb
          cb(null, "upload")
       },
       filename:function(req, file,cb){
        cb(null, file.fieldname+"-"+Date.now +".jpg")  //want to modify file name date.now use
       }
       
    })
}).single("user_file"); // single upload and you can upload multiple


app.post("/upload",upload,(req, res) =>{
   res.send("file Upload")
});

app.listen(6000);