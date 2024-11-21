const Bill = require('../models/Bill');

// Get All Bills for a User
exports.getBills = async (req, res) => {
  try {
    const bills = await Bill.find({ userId: req.user._id });
    res.json(bills);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving bills" });
  }
};

// Add a New Bill
exports.addBill = async (req, res) => {
  const { provider, amount, dueDate, status } = req.body;
  try {
    const newBill = new Bill({
      userId: req.user._id,
      provider,
      amount,
      dueDate,
      status
    });
    await newBill.save();
    res.status(201).json(newBill);
  } catch (error) {
    res.status(500).json({ message: "Error adding bill" });
  }
};

// Update an Existing Bill
exports.updateBill = async (req, res) => {
  try {
    const updatedBill = await Bill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBill) return res.status(404).json({ message: "Bill not found" });
    res.json(updatedBill);
  } catch (error) {
    res.status(500).json({ message: "Error updating bill" });
  }
};

// Delete a Bill
exports.deleteBill = async (req, res) => {
  try {
    const deletedBill = await Bill.findByIdAndDelete(req.params.id);
    if (!deletedBill) return res.status(404).json({ message: "Bill not found" });
    res.json({ message: "Bill deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting bill" });
  }
};
