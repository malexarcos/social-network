const { Thought } = require('../../models');

const router = require('express').Router();


router
    .route('/')
    .get((req, res) => {
        Thought.find() 
            .select('-__v')
            .then(Thoughts => {
                res.json(Thoughts)
            })
            .catch(err => {
                res.json(err)
            })
    })
    .post((req, res) => {
        Thought.create(req.body)
            .then(Thought => {
                res.json(Thought)
            })
            .catch(err => {
                res.json(err)
            })
    })
    
router
    .route('/:ThoughtId')
    .get((req, res) => {
        Thought.findOne({_id: req.params.ThoughtId})
            .select('-__v')
            .then(Thought => {
                if(!Thought) {
                   return res.json({message: 'Thought does not exist'})
                }
                res.json(Thought)
            })
            .catch(err => {
                res.json(err)
            })
    })
    .put((req, res) => {
        Thought.findOneAndUpdate(
            {_id: req.params.ThoughtId}, 
            {$set: req.body},
            {new: true}
        )
        .then(Thought => {
            if(!Thought) {
               return res.json({message: 'Thought does not exist'})
            }
            res.json(Thought)
        })
        .catch(err => {
            res.json(err)
        })
    })
    .delete((req, res) => {
        Thought.findOneAndDelete(
            {_id: req.params.ThoughtId}, 
        )
        .then(Thought => {
            if(!Thought) {
               return res.json({message: 'Thought does not exist'})
            }
            res.json({message: 'Thought deleted'})
        })
        .catch(err => {
            res.json(err)
        })
    })

    router
    .route('/:thoughtId/reactions')
    .post((req, res) => {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId}, 
            {$addToSet: {
                reactions: req.body
            }},
            {new: true}
        )
        .then(Thought => {
            if(!Thought) {
               return res.json({message: 'Thought does not exist'})
            }
            res.json(Thought)
        })
        .catch(err => {
            res.json(err)
        })
    })

    router
    .route('/:thoughtId/reactions/:reactionId')
    .delete((req, res) => {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId}, 
            {$pull: {
                reactions: {
                    reactionId: req.params.reactionId
                }
            }},
            {new: true}
        )
        .then(Thought => {
            if(!Thought) {
               return res.json({message: 'Thought does not exist'})
            }
            res.json(Thought)
        })
        .catch(err => {
            res.json(err)
        })
    })


    module.exports = router

