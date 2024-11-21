const Claim = require('../models/Claim');

// Get All Claims for a User
exports.getClaims = async (req, res) => {
  try {
    const claims = await Claim.find({ userId: req.user._id });
    res.json(claims);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving claims" });
  }
};

// Add a New Claim
exports.addClaim = async (req, res) => {
  const { billId, claimAmount, status, claimDate, insuranceProvider } = req.body;
  try {
    const newClaim = new Claim({
      userId: req.user._id,
      billId,
      claimAmount,
      status,
      claimDate,
      insuranceProvider
    });
    await newClaim.save();
    res.status(201).json(newClaim);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding claim" });
  }
};

// Update an Existing Claim
exports.updateClaim = async (req, res) => {
  try {
    const updatedClaim = await Claim.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedClaim) return res.status(404).json({ message: "Claim not found" });
    res.json(updatedClaim);
  } catch (error) {
    res.status(500).json({ message: "Error updating claim" });
  }
};

// Delete a Claim
exports.deleteClaim = async (req, res) => {
  try {
    const deletedClaim = await Claim.findByIdAndDelete(req.params.id);
    if (!deletedClaim) return res.status(404).json({ message: "Claim not found" });
    res.json({ message: "Claim deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting claim" });
  }
};
