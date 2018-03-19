# DAGBlock
> DAGChain block

## INSTALL
```sh
yarn add dagblock
```
or
```sh
npm i --save dagblock
```

## USAGE
Default
```js
import DAGBlock from 'dagblock';
DAGBlock({index: 0}).then(block => {
  console.log(block.data.toString());
});
```
Optional
```js
import { DAGBlock } from 'dagblock';
const block = DAGBlock({
  codec: 'lefcoin',
  algorithm: 'keccak-256'
})
block({index: 0}).then(block => {
  console.log(block.data.toString());
});
```
