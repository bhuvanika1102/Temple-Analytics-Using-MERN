const userModel = require('../models/userModel');
const searchcontroller = async (req, res) => {
// const express=require("express")
// const cors=require("cors")


// const app=express()
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use(cors())

// app.set("view engine","ejs")


 
app.get('/register/:email', async (req, res) => {
    const d_email = req.params.d_email;
    try {
      const templeDetails = await templeform.findOne({ d_email: d_email });
      if (templeDetails) {
        res.json(templeDetails);
      } else {
        res.status(404).json({ message: 'Temple not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
}

module.exports = { searchcontroller };