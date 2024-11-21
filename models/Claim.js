const mongoose = require('mongoose');

const ClaimSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  billId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bill' },
  claimAmount: Number,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  claimDate: Date,
  insuranceProvider: String,
});

module.exports = mongoose.model('Claim', ClaimSchema);
