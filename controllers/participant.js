let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// create a reference to the model
let participant = require("../models/participant");

module.exports.displayparticipantList = (req, res, next) => {
  participant.find((err, participantList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(participantList);

      res.render("participant/list", {
        title: "Active Brackets",
        participantInfo: participantList,
      });
    }
  });
};

module.exports.displayAddPage = (req, res, next) => {
  res.render("participant/add", { title: "Add participant" });
};

module.exports.processAddPage = (req, res, next) => {
  let newparticipant = participant({
    title: req.body.title,
    description: req.body.description,
    p1: req.body.p1,
    s1: req.body.s1,
    p2: req.body.p2,
    s2: req.body.s2,
    p3: req.body.p3,
    s3: req.body.s3,
    p4: req.body.p4,
    s4: req.body.s4,
    p5: req.body.p5,
    s5: req.body.s5,
    p6: req.body.p6,
    s6: req.body.s6,
    p7: req.body.p7,
    s7: req.body.s7,
    p8: req.body.p8,
    s8: req.body.s8,
    p9: req.body.p9,
    s9: req.body.s9,
    p10: req.body.p10,
    s10: req.body.s10,
    p11: req.body.p11,
    s11: req.body.s11,
    p12: req.body.p12,
    s12: req.body.s12,
    p13: req.body.p13,
    s13: req.body.s13,
    p14: req.body.p14,
    s14: req.body.s14,
    p15: req.body.p15,
    s15: req.body.s15,
  });

  participant.create(newparticipant, (err, participant) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the participant list
      res.redirect("/participant-list");
    }
  });
};

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;

  participant.findById(id, (err, participantToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("participant/edit", {
        title: "Edit participant",
        participant: participantToEdit,
      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;

  let updatedparticipant = participant({
    _id: id,
    title: req.body.title,
    description: req.body.description,
    p1: req.body.p1,
    s1: req.body.s1,
    p2: req.body.p2,
    s2: req.body.s2,
    p3: req.body.p3,
    s3: req.body.s3,
    p4: req.body.p4,
    s4: req.body.s4,
    p5: req.body.p5,
    s5: req.body.s5,
    p6: req.body.p6,
    s6: req.body.s6,
    p7: req.body.p7,
    s7: req.body.s7,
    p8: req.body.p8,
    s8: req.body.s8,
    p9: req.body.p9,
    s9: req.body.s9,
    p10: req.body.p10,
    s10: req.body.s10,
    p11: req.body.p11,
    s11: req.body.s11,
    p12: req.body.p12,
    s12: req.body.s12,
    p13: req.body.p13,
    s13: req.body.s13,
    p14: req.body.p14,
    s14: req.body.s14,
    p15: req.body.p15,
    s15: req.body.s15,
  });

  participant.updateOne({ _id: id }, updatedparticipant, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the participant list
      res.redirect("/participant-list");
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  participant.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the participant list
      res.redirect("/participant-list");
    }
  });
};
