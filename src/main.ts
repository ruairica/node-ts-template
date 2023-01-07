import fs from 'fs'; // sample import from node modules
import { hey } from './helper.js'; // sample import for local files since w're using NodeNext, include .js extension

const x = fs // adding this so fs isn't an unused reference
console.log('hello, world')
console.log(hey)