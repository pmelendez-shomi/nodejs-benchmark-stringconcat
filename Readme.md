# Benchmark to compare ES6 String Literals vs. String Concatenation in NodeJS

This is small piece of code that replicates in NodeJS the tests on: http://jsperf.com/es6-string-literals-vs-string-concatenation

## Output
```
$ node --version
v5.2.0
$ node index.js                                                                                      
ES6WithVar x 11,920,688 ops/sec ±3.80% (73 runs sampled)
StringConcatenationWithVar x 53,061,374 ops/sec ±6.36% (77 runs sampled)
ES6WithFunction x 766,388 ops/sec ±4.87% (76 runs sampled)
StringConcatWithFunction x 819,721 ops/sec ±4.51% (73 runs sampled)
Fastest is StringConcatenationWithVar

```


