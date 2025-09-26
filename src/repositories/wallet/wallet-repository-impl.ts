import { injectable } from "inversify";
import { WalletRepository } from "./wallet-repository";

@injectable()
export class WalletRepositoryImpl implements WalletRepository {

  private balance: number = 0; // data source is in memory

  getBalance(): number {
    return this.balance;
  }

  cashIn(amount: number): number {
    this.balance += amount;

    return this.balance;
  }

  debit(amount: number): number {
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    
    this.balance -= amount;
    return this.balance;
  }
}
