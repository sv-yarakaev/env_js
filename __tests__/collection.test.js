import getFunction from '../src/function'

const get = getFunction();

//begin test
if (get({ hello: 'world' }, 'hello')) {
    console.log('OK')
}