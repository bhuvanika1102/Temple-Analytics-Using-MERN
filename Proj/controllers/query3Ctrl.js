const userModel = require('../models/userModel');

const query3Controller = async (req, res) => {
  const { startDate, endDate,d_deity} = req.query;
  const startYear = new Date(startDate).getFullYear();
  const endYear = new Date(endDate).getFullYear();

  try {
    const result = await userModel.aggregate([
      {
        $match: {
          $expr: {
            $and: [
              { $gte: [{ $year: { $toDate: '$d_year_of_built' } }, startYear] },
              { $lte: [{ $year: { $toDate: '$d_year_of_built' } }, endYear] },
            ],
          },
        },
      },
      {
        $match: {
          d_deity: d_deity,
        },
      },
      {
        $group: {
          _id: {
            state: '$d_state',
            deity: '$d_deity'
          }, // Group by destination
          count: { $sum: { $toDouble: '$d_count' } }, // Count the number of bookings for each destination
        },
      },
      {
        $sort: { count: -1 }, // Sort in descending order by count
      },
      {
        
          $project: {
            startYear: startYear, // Project the startYear
            endYear: endYear, // Project the endYear
            state: '$_id.state',
            deity: '$_id.deity', // Project the state
            count: 1, // Project the count
            _id: 0 // Exclud
        }
      }
    ]);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = { query3Controller };
