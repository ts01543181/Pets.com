const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    team: {
      type: String,
      required: false
    },
    private: {
      type: Boolean,
      required: true
    },
    theme: {
        type: String,
        required: true
    },
    creator: {
      type: String,
      required: true
    }
  }, {collection: "boards", timestamps: { createdAt: "createdAt", updatedAt: "updatedAt"}});

  module.exports = Board = mongoose.model('boards', BoardSchema);