const router = require('express').Router();
const { millisecondsInHour } = require('date-fns');
const { User } = require('../../models/index');

router
    .route('/')
    .get((req, res) => {
        User.find() 
            .select('-__v')
            .then(Users => {
                res.json(Users)
            })
            .catch(err => {
                res.json(err)
            })
    })
    .post((req, res) => {
        User.create(req.body)
            .then(User => {
                res.json(User)
            })
            .catch(err => {
                res.json(err)
            })
    })
    
router
    .route('/:userId')
    .get((req, res) => {
        User.findOne({_id: req.params.userId})
            .select('-__v')
            .populate('thoughts')
            .populate('friends')
            .then(User => {
                if(!User) {
                   return res.json({message: 'User does not exist'})
                }
                res.json(User)
            })
            .catch(err => {
                res.json(err)
            })
    })
    .put((req, res) => {
        User.findOneAndUpdate(
            {_id: req.params.userId}, 
            {$set: req.body},
            {new: true}
        )
        .then(User => {
            if(!User) {
               return res.json({message: 'User does not exist'})
            }
            res.json(User)
        })
        .catch(err => {
            res.json(err)
        })
    })
    .delete((req, res) => {
        User.findOneAndDelete(
            {_id: req.params.userId}, 
        )
        .then(User => {
            if(!User) {
               return res.json({message: 'User does not exist'})
            }
            res.json({message: 'User deleted'})
        })
        .catch(err => {
            res.json(err)
        })
    })

router
    .route('/:userId/friends/:friendId')
    .post((req, res) => {
        User.findOneAndUpdate(
            {_id: req.params.userId}, 
            {$addToSet: {
                friends: req.params.friendId
            }},
            {new: true}
        )
        .then(User => {
            if(!User) {
               return res.json({message: 'User does not exist'})
            }
            res.json(User)
        })
        .catch(err => {
            res.json(err)
        })
    })

    .delete((req, res) => {
        User.findOneAndUpdate(
            {_id: req.params.userId}, 
            {$pull: {
                friends: req.params.friendId
            }},
            {new: true}
        )
        .then(User => {
            if(!User) {
               return res.json({message: 'User does not exist'})
            }
            res.json(User)
        })
        .catch(err => {
            res.json(err)
        })
    })


    module.exports = router


