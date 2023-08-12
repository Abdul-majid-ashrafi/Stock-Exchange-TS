// __tests__/main.test.ts
import { getCurrentStock } from '../src/main';

describe('getCurrentStock', () => {
    it('should return the correct current stock for an existing SKU', async () => {
        const sku = 'ZCP838287/58/07';
        const result = await getCurrentStock(sku);
        expect(result).toEqual({ sku, qty: 9075 });
    });

    it('should throw an error for a non-existent SKU', async () => {
        const sku = 'NON_EXISTENT_SKU';
        await expect(getCurrentStock(sku)).rejects.toThrow(`SKU ${sku} not found.`);
    });
});
