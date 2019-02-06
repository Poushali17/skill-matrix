import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import UserSchema from './models/usermodel';
// import registerSchema from './models/usermodel';

const app = express();
const router = express.Router();
var id;

app.get('/', (req, res) => res.send('Skill Matrix'));

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/skillmatrix');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

//get all login details
router.route('/user').get((req, res) => {
    console.log(req);
    UserSchema.find((err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});

//get login details by employee Id
router.route('/user/:employeeid').get((req, res) => {
    let query = { 'employeeid': req.params.employeeid };
    UserSchema.find(query, (err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});

//add new user
router.route('/user/add').post((req, res) => {
    let user = new UserSchema(req.body);
    // user.save()
    //     .then(user => {
    //         res.status(200).json('user', 'Added successfully');
    //     })
    //     .catch(err => {
    //         res.status(400).send('Failed to create new record');
    //     });
    connection.collection('user').insert(user);
});

//update user profile
router.route('/user/add').post((req, res) => {
    let user = new UserSchema(req.body);
    // user.save()
    //     .then(user => {
    //         res.status(200).json('user', 'Added successfully');
    //     })
    //     .catch(err => {
    //         res.status(400).send('Failed to create new record');
    //     });
    connection.collection('user').insert(user);
});

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));