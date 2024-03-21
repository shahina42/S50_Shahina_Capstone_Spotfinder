const express = require('express');
const app = express();

require('dotenv').config();
const port=process.env.PORT||3000;

app.get('/ping',(req,res)=>{
    res.json({
        message:"pong"
    })
})

if(require.main === module){
    app.listen(port,()=>{
        console.log(`server running on PORT: ${port}`)
    })
    
}
module.exports=app;