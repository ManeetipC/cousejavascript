export const ADDTOCART = 'ADDTOCART';

export function incrementBy(number) {
    return { type: ADDTOCART, amount: number };
}
