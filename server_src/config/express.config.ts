import express from "express";
import cors from "cors";


import mainRoute from '../routes/main.route'

import isProduction from '../services/env.service';
const app = express();


// setting enviroment variables

// @ts-ignore 
app.use(cors('*'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
let port = process.env.PORT || 8089;





app.use((req, res, next) => {

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE');

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );


    next();
})




app.use('/api/v1/', mainRoute)

export const server = app.listen(port, () => {
    console.log("connected to server " + port);
});

export default app;
