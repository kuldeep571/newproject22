const express = require('express')
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const cookies = require('cookie-parser');
const fileupload = require('express-fileupload');
const userRouter = require('./router/userRouter');
const expressSession = require('express-session');
const sessionConfig = {
    secret: 'bogs121311',
    resave: false,
    saveUninitialized: true,
};
app.use(expressSession(sessionConfig));

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(cookies())
app.use(bodyParser.urlencoded({extended:false}));
app.use(fileupload());
app.use('/', userRouter);


let port = process.env.PORT;
app.listen(port, function(){
    console.log('server is connected', port);
})
