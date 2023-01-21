const { Schema, model } = require('mongoose');
const { Thought } = require('.');


const thoughtSchema = new Schema( 
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280, 
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timeStamp => format(timeStamp, 'MM/dd/yyyy'),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;