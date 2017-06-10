const expect = require('expect')
const { encode, decode } = require('./index');

describe('paul cipher and kevin arnold', () => {
  describe('encode', () => {
    it('should handle empty string', () => {
      expect(encode('')).toBe('');
    });

    it('should handle null', () => {
      expect(encode(null)).toBe('');
    });

    it('should treat all characters as upper case', () => {
      expect(/[A-Z]/.test(encode('test'))).toBe(true);
    });

    it('should keep the first letter', () => {
      expect(encode('foo')[0]).toBe('F');
    });

    it('should move letters by the previous ones index', () => {
      expect(encode('AAAA')).toBe('ABBB');
    });

    it('should wrap around if passing Z', () => {
      expect(encode('YC')).toBe('YB');
    });

    it('should ignore non alpha chars', () => {
      expect(encode('He1lo!')).toBe('HM1QA!');
    });
  })

  describe('decode', () => {
    it('should handle empty string', () => {
      expect(decode('')).toBe('');
    });

    it('should handle null', () => {
      expect(decode(null)).toBe('');
    });

    it('should treat all characters as upper case', () => {
      expect(/[A-Z]/.test(decode('test'))).toBe(true);
    });

    it('should keep the first letter', () => {
      expect(decode('FOO')[0]).toBe('F');
    });

    it('should move letters by the previous ones index', () => {
      expect(decode('ABBB')).toBe('AAAA');
    });

    it('should wrap around if passing Z', () => {
       expect(decode('YB')).toBe('YC');
    });
    //
    it('should ignore non alpha chars', () => {
       expect(decode('HM1QA!')).toBe('HE1LO!');
    });
  });

  it('should encode & decode all letters', () => {
    expect(decode(encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  })
});
