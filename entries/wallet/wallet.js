const express = require('express');
const router = express.Router();

// GET /balance-inquiry
router.get('/balance-inquiry', (req, res) => {
  res.json({ message: 'Balance inquiry successful', balance: 1000 });
});

router.post('/cash-in', (req, res) => {
  const { amount } = req.body;
  res.json({ message: 'Cash in successful', amount });
});

router.post('/debit', (req, res) => {
  const { amount } = req.body;
  res.json({ message: 'Debit successful', amount });
});

module.exports = router;
