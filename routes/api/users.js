const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

//  @route            POST api/users
//  @description      register user
//  @access           Public

router.post('/',
[
    check('name', 'Name is required')
    .not()
    .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
        'password',
        'Please enter a password with 5 or more characters'
        ).isLength({ min: 5}),
], 
    (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        console.log(req.body)
        res.send('User route');
});

module.exports = router;