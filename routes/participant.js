let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require("passport");


// connect to our participant Model
let participant = require('../models/participant');

let participantController = require('../controllers/participant');

//helpter function for guard purposes
function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) {
      return res.redirect("/login");
    }
    next();
  }

/* GET Route for the participant List page - READ Operation */
router.get('/', requireAuth, participantController.displayparticipantList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, participantController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, participantController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, participantController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, participantController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, participantController.performDelete);

/* Authentication */

module.exports = router;