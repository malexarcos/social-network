const { Schema, model } = require('mongoose');
//const userSchema = require('./')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trimmed: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            //  * Must match a valid email address (look into Mongoose's matching validation)
        },
        // thoughts: {
            //Array of _id values referencing the Thought model
        // }
        // friends: {
            //Array of _id values referencing the User model (self-reference)
        // }
})

module.exports = userSchema;