export type Transaction = {
  id:number;
  description: string;
  amount: number;
  createdAt: string;
}
export type Wallet = {
  id: number;
  name: string;
  transactions: Array<Transaction>
}
