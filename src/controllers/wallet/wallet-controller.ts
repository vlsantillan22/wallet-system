import { inject, injectable } from "inversify";
import TYPES from "../../types";
import { WalletRepository } from "../../repositories/wallet/wallet-repository";
import { Request, Response } from "express";

@injectable()
export class WalletController {

  constructor(
    @inject(TYPES.WalletRepository) private walletRepository: WalletRepository
  ) { }

  balanceInquiry(req: Request, res: Response) {
    const balance = this.walletRepository.getBalance();

    res.json({ balance });
  }

  cashIn(req: Request, res: Response) {
    const { amount } = req.body;
    const newBalance = this.walletRepository.cashIn(amount);

    res.json({ message: "Cash in successful", balance: newBalance });
  }

  debit(req: Request, res: Response) {
    try {
      const { amount } = req.body;
      const newBalance = this.walletRepository.debit(amount);

      res.json({ message: "Transaction successful", balance: newBalance });
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  }
}
