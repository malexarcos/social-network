const { Schema, Types } = require('mongoose');
const format = require('date-fns/format');



const reactionSchema = new Schema(
     {
        reactionId: {
            type: Schema.Types.ObjectId,
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
            get: timeStamp => format(timeStamp, 'MM/dd/yyyy'),
        },
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
)

module.exports = reactionSchema;