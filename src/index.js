import Block from 'ipfs-block';
import multihashing from 'multihashing-async';
import CID from 'cids';
import isBuffer from 'is-buffer';

/**
 * @param {string} codec
 * @param {string} multihash
 * @default codec leofcoin-block
 * @default multihash keccak-256
 */
export class DAGBlock {
  constructor(codec = 'leofcoin-block', algorithm = 'keccak-256') {
    this.codec = codec;
    this.algorithm = algorithm;
    return block => new Promise((resolve, reject) => {
      if (!isBuffer(block) || typeof block === 'string') {
        if (typeof block === 'object') block = new Buffer(JSON.stringify(block));
        else return reject(new Error(`expected Object or Buffer, instead found ${typeof block}`));
      }
      multihashing(block, this.algorithm, (error, multihash) => {
        if (error) return reject(error);
        const cid = new CID(1, this.codec, multihash) ;
        block = new Block(block, cid);
        resolve(block);
      });
    });
  }
}
export default options => new DAGBlock(options);
