
//CommonJS module
var sayHelloCommonJs = require('./greeting_commonjs');

import { sayHello as sayHelloES6 } from './greeting_es6';


sayHelloCommonJs();

sayHelloES6();