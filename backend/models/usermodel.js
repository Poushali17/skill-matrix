import mongoose from 'mongoose';

const schema = mongoose.Schema;

//Create login schema
let UserSchema = new schema({
    _id: {
        type: String
    },
    employeeid: {
        type: Number
    },
    employeename: {
        type: String
    },
    password: {
        type: String
    }
}, {
        collection: 'user'
    });

//Create a model and make model available
export default mongoose.model('user', UserSchema);