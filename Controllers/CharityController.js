const express = require("express");
const charityModel = require("../Models/Charity");

exports.index = async (req, res) => {
  const charity = await charityModel.find({});
  
  try {
    res.send(charity);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.addCharity = async (req, res) => {
  const charity = new charityModel(req.body);

  try {
    await charity.save();
    res.send(charity);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.changeApproval = async (req, res) => {
  const { _id, isApproved } = req.body;
  const filter = { _id };
  const updates = { isApproved };
  const charity = await charityModel.findOneAndUpdate(filter, updates);
  try {
    res.send(charity);
  } catch (error) {
    res.status(500).send(error);
  }
};
