export interface Stock {
    sku: string;
    stock: number;
  }
  
  export interface Transaction {
    sku: string;
    type: string;
    qty: number;
  }