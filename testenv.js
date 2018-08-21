const NodeEnvironment = require('jest-environment-node');

class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    this.global.__DUMMY_DATE__ = new Date();
    this.global.__DUMMY_PROMISE__ = Promise.resolve();
    // Workaround
    // this.global.Date = Date;
    // this.global.Promise = Promise;
    await super.setup();
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = CustomEnvironment;
