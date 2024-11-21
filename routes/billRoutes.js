const express = require('express');
const { getBills, addBill, updateBill, deleteBill } = require('../controllers/billController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware); // Protect all routes with authentication

router.get('/', getBills);
router.post('/', addBill);
router.put('/:id', updateBill);
router.delete('/:id', deleteBill);

module.exports = router;
