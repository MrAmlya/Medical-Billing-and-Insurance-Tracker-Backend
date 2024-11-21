const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  provider: String,
  amount: Number,
  dueDate: Date,
  status: { type: String, enum: ['paid', 'unpaid'], default: 'unpaid' },
});

module.exports = mongoose.model('Bill', BillSchema);
