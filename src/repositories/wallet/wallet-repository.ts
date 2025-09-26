export interface WalletRepository {

  getBalance(): number;

  cashIn(amount: number): number;
  
  debit(amount: number): number;
}
