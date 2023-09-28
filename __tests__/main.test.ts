import { getCurrentStock } from '../src/container/main';

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

    it('should throw an error for a non-string SKU input', async () => {
        const invalidSku = 123; // Invalid SKU input (not a string)
        await expect(getCurrentStock(invalidSku as any)).rejects.toThrow('Invalid SKU: SKU must be a non-empty string.');
    });

    it('should throw an error for a non-string SKU input', async () => {
        const invalidSku = {}; // Invalid SKU input (not a string)
        await expect(getCurrentStock(invalidSku as any)).rejects.toThrow('Invalid SKU: SKU must be a non-empty string.');
    });

});
