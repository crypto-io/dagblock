const test = require('tape');
const { DAGBlock } = require('./');

test('New DAGBlock', tape => {  
  tape.plan(1);  
  const block = new DAGBlock();
  block({index: 0}).then(block => tape.ok(true)).catch(err => tape.ok(false))
});

test('New DAGBlock should fail', tape => {  
  tape.plan(1);
  const block = new DAGBlock();
  block('index').then(block => tape.ok(false)).catch(err => tape.ok(true))
});
