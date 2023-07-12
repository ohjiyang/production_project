import { counterReducer, counterActions } from './counterSlice';
import type { counterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
    test('decrement value', () => {
        const state: counterSchema = { value: 10 };

        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });

    test('increment value', () => {
        const state: counterSchema = { value: 10 };

        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });

    test('уьзен value', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
