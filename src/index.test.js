const dummy_direct = require('./index');
const dummy_global = global.__DUMMY__;

describe('Test', () => {
  test('ok', async () => {
    const res = await dummy_direct();
    expect(res instanceof Date).toBe(true);
  });

  test('nok', async () => {
    const res = await dummy_global();
    // Why is this not true ?
    expect(res instanceof Date).toBe(true);
  });
});
