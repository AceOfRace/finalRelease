let mongoose = require('mongoose');

// create a model class
let participantModel = mongoose.Schema({
    title: String,
    description: String,
    p1: String,
    s1: String,
    p2: String,
    s2: String,
    p3: String,
    s3: String,
    p4: String,
    s4: String,
    p5: String,
    s5: String,
    p6: String,
    s6: String,
    p7: String,
    s7: String,
    p8: String,
    s8: String,
    p9: String,
    s9: String,
    p10: String,
    s10: String,
    p11: String,
    s11: String,
    p12: String,
    s12: String,
    p13: String,
    s13: String,
    p14: String,
    s14: String,
    p15: String,
    s15: String
},
{
    collection: "participant"
});

module.exports = mongoose.model('participant', participantModel);