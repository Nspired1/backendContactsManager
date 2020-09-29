const mongoose = require("mongoose");

//defining the Schema for contact
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    require: "Name must be filled out",
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

//compiling schema into a model, which is a class made of documents
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
