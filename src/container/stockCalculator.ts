import { Stock, Transaction } from './types/types';

export function calculateStock(stock: Stock[], transactions: Transaction[]): Record<string, number> {
  let stockInLoss: boolean = false;
  const stockMap: Record<string, number> = {};

  // Initialize stock levels from the stock.json file
  for (const stockData of stock) {
    stockMap[stockData.sku] = stockData.stock;
  }

  // Process transactions to update stock levels
  for (const transaction of transactions) {
    const { sku, type, qty } = transaction;
    if (!stockMap[sku]) {
      stockMap[sku] = 0; // Initialize stock for new SKUs
    }
    if (type === 'order') {
      if(!stockMap[sku]){
        stockInLoss = true;
      }
      stockMap[sku] -= qty;
    } else if (type === 'refund') {
      stockMap[sku] += qty;
    }
  }
  // if(stockInLoss)
  
// returning the expected value
  return stockMap;
}
