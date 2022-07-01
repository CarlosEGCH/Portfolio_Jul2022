const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));
app.use(morgan('tiny'));

app.listen(8080, () => {
    console.log('Listening on port: 8080')
})