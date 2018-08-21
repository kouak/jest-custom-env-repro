const NodeEnvironment = require('jest-environment-node');

class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    this.global.__DUMMY__ = {
      Date: new Date(),
      Promise: Promise.resolve(),
      Buffer: Buffer.alloc(1),
      Array: new Array(),
    };

    // Workaround
    // this.global.Date = Date;
    // this.global.Promise = Promise;
    // this.global.Array = Array;
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
