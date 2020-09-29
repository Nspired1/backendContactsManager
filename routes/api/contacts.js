const express = require("express");
const router = express.Router();
const db = require("../../config/db");

// @route GET all contacts
// @desc Test route
// @access Public
router.get("/", (req, res) => {
  db.Contact.find()
    .then(function (contacts) {
      res.json(contacts);
    })
    .catch(function (err) {
      res.send(err);
    });
});

// @route POST
// @desc ADD or CREATE a contact
// @access Public
router.post("/", (req, res) => {
  db.Contact.create(req.body)
    .then(function (newContact) {
      res.status(201).json(newContact);
    })
    .catch(function (err) {
      res.send(err);
    });
});

// @route GET
// @desc Get ONE contact
// @access Public
router.get("/:contactId", function (req, res) {
  db.Contact.findById(req.params.contactId)
    .then(function (foundContact) {
      res.json(foundContact);
    })
    .catch(function (err) {
      res.send(err);
    });
});

// @route PUT
// @desc update ONE contact
// @access Public
router.put("/:contactId", function (req, res) {
  //res.send("UPDATE ROUTE");
  db.Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, {
    new: true,
  })
    .then(function (contact) {
      res.json(contact);
    })
    .catch(function (err) {
      res.send(err);
    });
});

// @route DELETE
// @desc delete ONE contact
// @access Public
router.delete("/:contactId", function (req, res) {
  db.Contact.remove({ _id: req.params.contactId })
    .then(function () {
      res.json({ message: "Contact Deleted" });
    })
    .catch(function (err) {
      res.send(err);
    });
});

module.exports = router;
