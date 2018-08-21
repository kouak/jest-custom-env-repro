describe('Test', () => {
  test('Date', () => {
    expect(new Date()).toEqual(expect.any(Date)); // OK
    expect(global.__DUMMY_DATE__).toEqual(expect.any(Date)); // Fails
  });

  test('Promise', () => {
    expect(Promise.resolve()).toEqual(expect.any(Promise));
    expect(global.__DUMMY_PROMISE__).toEqual(expect.any(Promise));
  });
});
