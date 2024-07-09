import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define the schema for Closing Rank without references
const closingRankSchema = new Schema({
  college_name: { type: String, required: true },
  college_image:{type: String, required: true },
  college_type: { type: String, required: true },
  branch_name: { type: String, required: true },
  gender_name: { type: String, required: true },
  state_name: { type: String, required: true },
  category_name: { type: String, required: true },
  location: { type: String, required: true },
  year1: { type: Number, required: true },
  year1_closing_rank: { type: Number, required: true },
  year2: { type: Number, required: true },
  year2_closing_rank: { type: Number, required: true },
  year3: { type: Number, required: true },
  year3_closing_rank: { type: Number, required: true }
});

// Create the model
const ClosingRank = mongoose.model('ClosingRank', closingRankSchema);

export default ClosingRank;