const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res)=>{
    res.send({
        message: 'Email: '+ req.body.email + ', pass:' + req.body.password
    })
});

app.listen(process.env.PORT||8081)