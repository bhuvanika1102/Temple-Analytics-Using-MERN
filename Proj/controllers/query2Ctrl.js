// const userModel = require('../models/userModel');

// const query3Controller = async (req, res) => {
//   try {
//     const result = await userModel.aggregate([
//       {
//         $addFields: {
//           convertedDate: { $toDate: '$d_year_of_built' }, // Convert 'd_date' from string to Date
//         },
//       },
//       {
//         $project: {
//           year: { $year: '$convertedDate' }, // Extract the year from the converted date
//         },
//       },
//       {
//         $group: {
//           _id: '$year',
//           totaltemples: { $sum: 1 }, // Count the number of passengers
//         },
//       },
//       {
//         $sort: { _id: 1 }, // Sort by year in ascending order
//       },
      
//     ]);

//     res.status(200).json(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Error fetching data' });
//   }
// };

// module.exports = { query3Controller };
const userModel = require('../models/userModel');

const query2Controller = async (req, res) => {
  const { d_state, d_deity } = req.query;
  try {
    let pipeline = [
      {
        $group: {
          _id: {
            state: '$d_state',
            deity: '$d_deity',
          },
          totaltemples: { $sum: 1 },
        },
      },
      {
        $project: {
          state: '$_id.state',     // Project the state field
          deity: '$_id.deity',     // Project the deity field
          totaltemples: 1,         // Include the totaltemples field
          _id: 0,                  // Exclude the _id field
        },
      },
    ];

    // Optionally, add a $match stage for deity filtering if a deity is specified
    if (d_deity) {
      pipeline = [
        {
          $match: {
            'd_deity': d_deity,
          },
        },
        ...pipeline,
      ];
    }
    const result = await userModel.aggregate(pipeline);


    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching data' });
  }
};

module.exports = { query2Controller };

