const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DataSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  voice: {
    type: Number,
    required: true
  },
  bts: {
    type: Number,
    required: true
  },
  revenue: {
    type: Number,
    required: true
  },
  acc: {
    type: Number,
    required: true
  },
  voicegoal: {
    type: Number,
    required: true
  },
  btsgoal: {
    type: Number,
    required: true
  },
  accgoal: {
    type: Number,
    required: true
  },
  multiplier: {
    type: Number,
    required: true
  },
  pre: {
    type: Number,
    required: true
  },
  sim3: {
    type: Number,
    required: true
  },
  smart7: {
    type: Number,
    required: true
  },
  super11: {
    type: Number,
    required: true
  },
  btsact: {
    type: Number,
    required: true
  },
  actrevenue: {
    type: Number,
    required: true
  },
  mpr: {
    type: Number,
    required: true
  },
  uso3: {
    type: Number,
    required: true
  },
  uso7: {
    type: Number,
    required: true
  },
  ua: {
    type: Number,
    required: true
  },
  accessories: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  userID: {
    type: String,
    required:true,
    unique: false
  },
  description: {
    type: String,
    require: true
  }
});

module.exports = Data = mongoose.model("datas", DataSchema);
