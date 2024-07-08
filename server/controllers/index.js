import ClosingRank from '../Models/Mains.js';


export const postData = async (req, res) => {
    const {
        college_name,
        college_type,
        branch_name,
        gender_name,
        state_name,
        category_name,
        year1,
        year1_closing_rank,
        year2,
        year2_closing_rank,
        year3,
        year3_closing_rank
      } = req.body;
    
      try {
        const newClosingRank = new ClosingRank({
          college_name,
          college_type,
          branch_name,
          gender_name,
          state_name,
          category_name,
          year1,
          year1_closing_rank,
          year2,
          year2_closing_rank,
          year3,
          year3_closing_rank
        });
    
        const savedClosingRank = await newClosingRank.save();
        res.status(201).json(savedClosingRank);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  };

  export const filterData = async (req, res) => {
    try {
        // Extract filters from the request body
        const {
          collegeName = 'all',
          branch = 'all',
          gender = 'all',
          state = 'all',
          category = 'all'
        } = req.body;
    
        // Build the query object based on provided filters
        const query = {};
    
        if (collegeName !== 'all') {
          query.college_name = collegeName;
        }
        if (branch !== 'all') {
          query.branch_name = branch;
        }
        if (gender !== 'all') {
          query.gender_name = gender;
        }
        if (state !== 'all') {
          query.state_name = state;
        }
        if (category !== 'all') {
          query.category_name = category;
        }
    
        // Fetch filtered data from the database
        const filteredData = await ClosingRank.find(query);
        
        // Send the filtered data as the response
        res.json(filteredData);
      } catch (error) {
        console.error('Error fetching filtered data:', error);
        res.status(500).json({ error: error.message });
      }
  };