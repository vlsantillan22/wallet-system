import { Router, Request, Response } from "express";
import container from "../../../inversify.config";
import { WalletController } from "../../controllers/wallet/wallet-controller";

const router = Router();

const walletController = container.get(WalletController);

router.get("/balance-inquiry", (req: Request, res: Response) =>
    walletController.balanceInquiry(req, res)
);

router.post("/cash-in", (req: Request, res: Response) =>
    walletController.cashIn(req, res)
);

router.post("/debit", (req: Request, res: Response) =>
    walletController.debit(req, res)
);

export default router;
