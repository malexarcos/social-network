const { Schema, Types } = require('mongoose');
const format = require('date-fns/format');
const { TimeStamp } = require('console');



const userSchema = new Schema(
     {
        reactionId: {
            //Use Mongoose's ObjectId data type
            type: Schema.Types.ObjectId,
            //Default value is set to a new ObjectId
            default: () => new Types.ObjectId(),
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
            type: Date,
            default: Date.now,
             //Use a getter method to format the timestamp on query
            get: timeStamp => format(timeStamp, 'MM/dd/yyyy'),
        },
    }
)

module.exports = reactionSchema;