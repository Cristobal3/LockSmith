const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');


module.exports = {
    sani: (req, res) => {
        body('fname').isLength({ min: 1}).trim().withMessage('Name empty.')
    .isAlpha().withMessage('Name must be alphabet letters.'),
    body('lname').isLength({ min: 1 }).trim().withMessage('Name empty.')
    .isAlpha().withMessage('Name must be alphabet letters.'),
    body('snumber', 'Invalid entry').optional({checkFalsy: true}).isLength('snumber',{ min: 1, max:1 }).trim().withMessage('empty.')
    .isISO8601().withMessage('Invalid entry'),
    body('enumber', 'Invalid entry').optional({checkFalsy: true}).isLength({ min: 1, max:1 }).trim().withMessage('empty.')
    .isISO8601().withMessage('Invalid entry')

    // sanitizeBody('fname').trim().escape(),
    // sanitizeBody('lname').trim().escape(),
    // sanitizeBody('snumber').trim().escape(),
    // sanitizeBody('enumber').trim().escape()
    console.log('Sanitized!');
    res.redirect('/schedule');
    }
}