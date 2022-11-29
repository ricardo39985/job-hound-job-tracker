const { urlencoded } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema(
  {
    company: { type: String, required: true },
    from: {
      type: Number,
      required: true,
    },
    to: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['applied', 'rejected', 'interviewed', 'offer', 'accepted', 'declined'],
      default: 'applied',
    },
    link:{
      type: String
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        return ret;
      },
    },
  }
);

module.exports = mongoose.model('Job', jobSchema);
