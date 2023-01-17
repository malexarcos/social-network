const { Schema, model } = require('mongoose');



const userSchema = new Schema(
     {
        reactionId: {
            //Use Mongoose's ObjectId data type
            //Default value is set to a new ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            //date
            //Set default value to the current timestamp
            //Use a getter method to format the timestamp on query
        },
    }
)