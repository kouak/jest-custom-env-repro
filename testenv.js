const dummy = require('./src/index');
const NodeEnvironment = require('jest-environment-node');

class DummyEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();

    this.global.__DUMMY__ = dummy;
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = DummyEnvironment;
