import mongoose from 'mongoose';

const schema = mongoose.Schema;

//Create login schema
let ProfileSchema = new schema({
    employeeid: {
        type: Number
    },
    employeename: {
        type: String
    },
    designation: {
        type: String
    },
    project: {
        type: String
    },
    password: {
        type: String
    }
}, {
        collection: 'profile'
    });

//Create a model and make model available
export default mongoose.model('profile', ProfileSchema);