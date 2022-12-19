const express=require('express');
const app=express();
const errorhandler=require('./errorhandler.js')
// const connecttomongo=require('./db.js');
const cors=require('cors')
app.use(cors())
app.use(express.json({limit: '50mb'}));

app.use('/api',require('./routes/msg.js'));
app.use(errorhandler)
module.exports=app;
