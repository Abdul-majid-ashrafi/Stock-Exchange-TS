import { readFileSync } from 'fs';
import { calculateStock } from './stockCalculator';
import { Stock, Transaction } from '../customTypes/types';

const stockJson = readFileSync('src/data/stock.json', 'utf-8');
const transactionsJson = readFileSync('src/data/transactions.json', 'utf-8');

const stock: Stock[] = JSON.parse(stockJson);
const transactions: Transaction[] = JSON.parse(transactionsJson);

export async function getCurrentStock(sku: string): Promise<{ sku: string; qty: number }> {
  const stockMap = calculateStock(stock, transactions);

  if (stockMap.hasOwnProperty(sku)) {
    return { sku, qty: stockMap[sku] };
  } else {
    throw new Error(`SKU ${sku} not found.`);
  }
}
