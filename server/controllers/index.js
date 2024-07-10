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
    year3_closing_rank,
    image_url,
    location
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
      year3_closing_rank,
      image_url,  // Include image URL
      location    // Include location
    });

    //console.log(newClosingRank);

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



  

  export const predictCollege = async (req, res) => {
       
    console.log(req.body);
      
    try {
      // Extract filters from the request body
      const {
         rank,
         homeState,
         casteGroup,
         gender
      } = req.body;
  
      // Build the query object based on provided filters
      const query = {};
  
     
       //console.log(homeState);
       
       // query.gender_name = gender;
        query.category_name = casteGroup;
       // console.log(casteGroup);
  
      // Fetch filtered data from the database
      const filteredData = await ClosingRank.find(query);
     // console.log(filteredData);

      const filter2=[];
      for(let i=0;i<filteredData.length;i++){
        
        let rank1=filteredData[i].year3_closing_rank;
        let rank2=filteredData[i].year2_closing_rank;
        let rank3=filteredData[i].year1_closing_rank;
        
         
        if(filteredData[i].location===homeState && filteredData[i].state_name==='Home State'){
             
          if(rank<rank1 || rank<rank2 || rank<rank3){
            filter2.push(filteredData[i]);
            
          }
          //console.log("hello");
          
            
        }
        if(filteredData[i].state_name==='Other State'){
             
          if(rank<rank1 || rank<rank2 || rank<rank3){
            filter2.push(filteredData[i]);
          }
            
        }
        }
          
        const filter3=[];
       // console.log(filter2);

        for(let i=0;i<filter2.length;i++){
        
          let rank1=filter2[i].year3_closing_rank;
          let rank2=filter2[i].year2_closing_rank;
          let rank3=filter2[i].year1_closing_rank;
          
           
          if(filter2[i].gender_name===gender && gender==='Male'){
               
            if(rank<rank1 || rank<rank2 || rank<rank3){
              filter3.push(filter2[i]);
              
            }

            //console.log("hello");
            
              
          }
          if(gender==='Female'){
               
            if(rank<rank1 || rank<rank2 || rank<rank3){
              filter3.push(filter2[i]);
            }
              
          }
          }
      //  console.log(filter2);

        const obj={
          college_name:"",
          college_type:"",
          college_location:"",
          image_url:"",
          prob:"",
          college_branch:[]
}
        

let uniqueColleges = [];
let collegeMap = new Map();


filter3.forEach(college => {
    let key = `${college.college_name}-${college.college_type}-${college.location}-${college.image_url}`;

    if (collegeMap.has(key)) {
        let existingCollege = collegeMap.get(key);
        if (!existingCollege.college_branch.includes(college.branch_name)) {
            existingCollege.college_branch.push(college.branch_name);
        }
    } else {
        // If it doesn't exist, create a new college object and add it to the map
        let newCollege = {
            college_name: college.college_name,
            college_type: college.college_type,
            college_location: college.location,
            image_url: college.image_url,
            prob: "", // You can set this later based on your calculation
            college_branch: [college.branch_name]
        };
        collegeMap.set(key, newCollege);
    }
});

// Convert the map values (unique colleges) to an array
uniqueColleges = Array.from(collegeMap.values());

// Output the unique colleges array
//console.log(uniqueColleges);


      
      
      // Send the filtered data as the response
      res.json(uniqueColleges);
    } catch (error) {
      console.error('Error fetching filtered data:', error);
      res.status(500).json({ error: error.message });
    }
  };