const { sum, multiply, divide } = require('./02-math');

describe('test for math', () => {
  describe('test for sum', () => {
    test('adds 1 + 3 to equal 4', () => {
      expect(sum(1, 3)).toBe(4);
    });
  })
  describe('test for multiply', () => {
    test('should be 4', () => {
      expect(multiply(1, 4)).toBe(4);
    });
  })
  describe('test for divide', () => {
    test('should divide', () => {
      const rta = divide(6, 3);
      expect(rta).toBe(2);
      const rta2 = divide(5, 2);
      expect(rta2).toBe(2.5);
    });

    test('should divide for zero', () => {
      const rta = divide(6, 0);
      expect(rta).toBe(null);
      const rta2 = divide(5, 0);
      expect(rta2).toBe(null);
    });

  })

})



