'use strict';

const metatests = require('metatests');
const metagui = require('..');

metatests.test('Stub', async (test) => {
  test.strictSame(metagui, {});
  test.end();
});
