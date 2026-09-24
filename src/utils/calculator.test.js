import { describe, expect, it } from 'vitest';
import { add, subtract } from './calculator';
describe('calculator', () => {
    it('add', () => {
        expect(add(1, 2)).toBe(30);
    });

    it('subtract', () => {
        expect(subtract(7, 2)).toBe(5);
    });
});