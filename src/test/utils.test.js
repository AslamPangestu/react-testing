import {multiple,sum} from '../utils/arithmatic';
import { calculateNetSalary,hello } from "../utils/text";

describe('dasar testing',()=>{
    it("cobain testing",()=>{
        expect(true).toBe(true)
    })
    
    it('hitung nilai', () => {
        expect(1+1).toBe(2)
    })
})

describe('aritmatika',()=>{
    test('fungsi penjumblahan', () => {
        expect(sum(3,2)).toBe(5)
        expect(sum(4,8)).toBe(12)
    })
    
    test('fungsi perkalian', () => {
        expect(multiple(2,3)).toBe(6)
        expect(multiple(3,5)).toBe(15)
    })
})

describe('text testing',()=>{
    test('hitung gaji bersih', () => {
        expect(calculateNetSalary(10000000)).toBe('Gaji bersih anda: RP 9000000')
    })
    
    test('menyapa', () => {
        expect(hello('Aslam')).toBe('Hello Aslam')
    })
})



