// Example usage
import { getCurrentStock } from './main';

async function main() {
    try {
        const sku = 'MRP846986/84/16';
        const result = await getCurrentStock(sku);
        console.log(`Current stock for SKU ${result.sku}: ${result.qty}`);
    } catch (error: any) {
        console.error(error.message);
    }
}
// calling main function which will show the result in console
main();
