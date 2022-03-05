const express=require("express");
const mongoose=require("mongoose");
const path=require("path");
const cors=require("cors");
const app=express();
const bodyParser=require('body-parser')
require('dotenv/config');
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(cors());

const postRoute=require('./routes/post');
app.use('/post',postRoute);

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log("connected to db"));


app.listen(7080);