import {calMatchedWord} from "./helper";

describe('calculate count of matched word', () => {
    const secreteWord='drive';

    test('if no any word matched', () => {
        const count=calMatchedWord('app',secreteWord);
        expect(count).toBe(0);
    })
    test('if 2 word matched', () => {
        const count=calMatchedWord('mobile',secreteWord);
        expect(count).toBe(2);
    })
    test('if 2 word matched is duplicated', () => {
        const count=calMatchedWord('arrive',secreteWord);
        expect(count).toBe(4);
    })
});