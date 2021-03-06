const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    private: {
      type: Boolean,
      required: true
    },
    admin: [{
        type: String
    }],
    members: [{
      type: String
    }],
    boards: [{
      type: Schema.Types.ObjectId
    }]
  }, {collection: "teams", timestamps: { createdAt: "createdAt"}});

  module.exports = Team = mongoose.model('teams', TeamSchema);