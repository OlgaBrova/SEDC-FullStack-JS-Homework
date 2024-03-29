const express = require('express');
const router = require('./const/router.const');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser')
const session = require('./const/session.const');

const app = express();

app.use(helmet());
app.use(cors());
app.use(session);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';


app.use('/api', router);

app.listen(PORT, HOST, () => {
    console.log('Server is listening at http://localhost:3000');
})