const { Schema, model } = require('mongoose');
const { Thought } = require('.');


const userSchema = new Schema( 
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280, 
        },
        createdAt: {
            type: date,
            //Set default value to the current timestamp
            //Use a getter method to format the timestamp on query
            get: timeStamp => format(timeStamp, 'MM/dd/yyyy'),
        },
        //(The user that created this thought)
        username: {
            type: string,
            required: true,
        },
        //(These are like replies)
        reactions: {
            //Array of nested documents created with the reactionSchema
        }
    }
)

module.exports = thoughtSchema;