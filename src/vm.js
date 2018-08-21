const vm = require('vm');

const d = new Date();

const code = `
  if (d instanceof Date) {
    isDate = true;
  }
`;
let sandbox = {};

sandbox = { d, isDate: false };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

console.log('Without passing Date as global in sandbox');
console.log('\t[VM] d instanceof Date ===', sandbox.isDate);
console.log('\tsandbox.d instanceof Date === ', sandbox.d instanceof Date);
console.log('\td instanceof Date === ', d instanceof Date);
console.log('\n');

sandbox = { Date, d, isDate: false };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
console.log('With passing Date as global in sandbox');
console.log('\t[VM] d instanceof Date ===', sandbox.isDate);
console.log('\tsandbox.d instanceof Date === ', sandbox.d instanceof Date);
console.log('\td instanceof Date === ', d instanceof Date);
console.log('\n');
