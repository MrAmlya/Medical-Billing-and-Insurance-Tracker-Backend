const express = require('express');
const { getClaims, addClaim, updateClaim, deleteClaim } = require('../controllers/claimController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware); // Protect all routes with authentication

router.get('/', getClaims);
router.post('/', addClaim);
router.put('/:id', updateClaim);
router.delete('/:id', deleteClaim);

module.exports = router;
