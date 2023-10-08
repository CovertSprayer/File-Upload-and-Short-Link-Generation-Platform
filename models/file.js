const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  originalLink: String,
  shortLink: String,
},{timestamps:true});

const File = mongoose.model('File', fileSchema);

module.exports = File;
