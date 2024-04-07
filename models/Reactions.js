const { Schema, model } = require('mongoose');

// Schema to create a course model
const reactionsSchema = new Schema(
  {
    reactionId: {
      type: String,
      required: true,
    },
    reactionBody: {
      type: String,
      default: true,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
  },
);

const Reactions = model('reactions', reactionsSchema);

module.exports = Reactions;
