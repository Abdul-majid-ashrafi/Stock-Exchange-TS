import { getCurrentStock } from './container/main';

async function main() {
    try {
        const sku = 'CLQ274846/07/46';
        const result = await getCurrentStock(sku);
        console.log(`Current stock for SKU ${result.sku}: ${result.qty}`);
    } catch (error: any) {
        console.error(error.message);
    }
}
// calling main function which will show the result in console
main();
