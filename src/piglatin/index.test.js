const expect = require('expect')
const transform = require('./index');

describe('pig latin', () => {
  it('should not translate vowel-less words', () => {
    expect(transform('sky')).toBe('sky');
  });

  it('should translate single world', () => {
    expect(transform('hello')).toBe('ellohay');
  });

  it('should translate single world starting with a vowel', ()=>{
    expect(transform('aardvark')).toBe('aardvarkway');
  });

  it('should handle capital vowels', () => {
    expect(transform('Aardvark')).toBe('Aardvarkway');
  });

  it('should handle words with spaces', () => {
    expect(transform('hello there')).toBe('ellohay erethay');
  });

  it('should handle capital letters in sentences', () => {
    expect(transform('Hello There')).toBe('Ellohay Erethay');
  });

  it('should handle punctuation', () => {
    expect(transform('Pizza? Yes Please!!')).toBe('Izzapay? Esyay Easeplay!!');
  });

  it('should handle sentences with numbers', () => {
    expect(transform('There are 2 birds')).toBe('Erethay areway 2 irdsbay');
  });
});
