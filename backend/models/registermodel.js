import mongoose from 'mongoose';

const schema = mongoose.Schema;

//Create login schema
let RegisterSchema = new schema({
    employeename: {
        type: String
    },
    employeeId: {
        type: Number
    },
    password: {
        type: String
    }
}, {
    collection: 'register'
});

//Create a model and make model available
export default mongoose.model('register', RegisterSchema);