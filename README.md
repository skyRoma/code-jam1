# code-jam1
rs-task-code-jam1

###  tests
run:
  1) npm install
  2) npm test

#### if you have this issue 
```
sh: 1: mocha: Permission denied
npm ERR! Test failed.  See above for more details.

```
add permossions 'Execute: Allow executing file as program' in file:
code-jam1/node_modules/mocha/bin/mocha

