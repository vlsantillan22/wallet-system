import "reflect-metadata";
import express, { Application } from "express";
import walletEntry from "./entries/wallet/wallet";

const app: Application = express();
const PORT = 3000;

app.use(express.json());

app.use("/wallet", walletEntry);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
