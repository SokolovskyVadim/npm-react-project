import someRandomFunction from "./someRandomFunction"

describe('test sample function', ()=> {
  test('adds 1 + 2 to equal 3', () => {
    expect(someRandomFunction(1, 2)).toBe(3);
  });
});
