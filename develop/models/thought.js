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
            default: Date.now,
            get: timeStamp => format(timeStamp, 'MM/dd/yyyy'),
        },
        username: {
            type: string,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJson: {
            getter: true
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;