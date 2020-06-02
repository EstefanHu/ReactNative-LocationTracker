const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = new User({ email, password });
    await user.save();
    res.send('success');
  } catch (error) {

  }
});

module.exports = router;