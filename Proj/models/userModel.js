

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    d_templename: String,
    d_deity: String,
    d_district: String,
    d_state: String,
    d_pincode: String,
    d_era: String,
    d_category: String,
    d_count:String,
    d_year_of_built: String,
    d_revenue:String,
    d_gold:String,
    d_opening_time: String,
    d_closing_time: String,
    d_email: String,
    d_description: String,
    d_start_date:String,
    d_end_date:String,
    templeCount:String,
});

const userModel = mongoose.model('temple', userSchema);

module.exports = userModel;

