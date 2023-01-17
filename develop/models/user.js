const { Schema, model } = require('mongoose');
//const userSchema = require('./')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            //unique
            //trimmed
        },
        email: {
            type: String,
            required: true,
            //unique
            //  * Must match a valid email address (look into Mongoose's matching validation)
        },
        // thoughts: {
        // }
        // friends: {
        // }
})