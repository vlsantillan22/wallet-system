const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const wallet = require('./entries/wallet/wallet');

app.use(wallet);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
