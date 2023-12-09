

const userModel = require('../models/userModel');

// Controller for user registration
const registerController = async (req, res) => {
  try {
    // Create a new user object with the required fields
    const newUser = new userModel({
      d_templename: req.body.d_templename,
      d_deity: req.body.d_deity,
      d_district: req.body.d_district[0],
      d_state: req.body.d_state[0],
      d_pincode: req.body.d_pincode,
      d_era: req.body.d_era[0],
      d_category: req.body.d_category[0],
      d_count: req.body.d_count,
      d_year_of_built: req.body.d_year_of_built,
      d_revenue: req.body.d_revenue,
      d_gold: req.body.d_gold,
      d_opening_time: req.body.d_opening_time,
      d_closing_time: req.body.d_closing_time,
      d_email: req.body.d_email,
      d_description: req.body.d_description,

      
    });

    // Attempt to save the document
    await newUser.save();
    res.status(201).send({
      message: 'Registered Successfully',
      success: true,
    });
  } catch (error) {
    console.error('Error in registerController:', error);
    res.status(500).send({
      success: false,
      message: 'Register controller',
    });
  }
};

module.exports = { registerController };

