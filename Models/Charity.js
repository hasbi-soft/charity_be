const mongoose = require("mongoose");

const CharitySchema = new mongoose.Schema({
  einNumber: { type: Number, required: true },
  fullName: { type: String, required: true },
  title: { type: String, required: true },
  email: { type: String, required: true },
  isApproved: { type: Boolean, default: false },
});

const Charity = mongoose.model("Charity", CharitySchema);

module.exports = Charity;
