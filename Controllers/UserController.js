const express = require("express");
const userModel = require("../Models/Users");

exports.addUser = async (req, res) => {
  const user = new userModel(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
