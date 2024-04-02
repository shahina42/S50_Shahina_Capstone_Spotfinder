const express = require('express');
const app = express();
const cors=require("cors")
const Joi = require('joi')
require('dotenv').config();
const port=process.env.PORT||3000;
const connectDb = require('./config/connect'); 
const user_router = require('./Routes/User_routes'); 

connectDb(process.env.MONGO_URI); 
app.use(cors())

app.use(express.json()); 

// Routes
app.get('/ping', (req, res) => {
    res.send('<h1>pong</h1>');
});

app.use("/user", user_router); 
// app.use("/posts", post_router);

if (require.main === module) {
    app.listen(port, () => {
        console.log(`server running on PORT: ${port}`);
    });
}

module.exports = app;
