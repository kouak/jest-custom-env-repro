describe('Test', () => {
  test('Date', () => {
    expect(global.__DUMMY__.Date).toEqual(expect.any(Date));
  });

  test('Promise', () => {
    expect(global.__DUMMY__.Promise).toEqual(expect.any(Promise));
  });

  test('Buffer', () => {
    expect(global.__DUMMY__.Buffer).toEqual(expect.any(Buffer));
  });

  test('Array', () => {
    expect(global.__DUMMY__.Array).toEqual(expect.any(Array));
  });
});
