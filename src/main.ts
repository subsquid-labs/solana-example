import {run} from '@subsquid/batch-processor'
import {augmentBlock} from '@subsquid/solana-objects'
import {DataSourceBuilder, FieldSelection} from '@subsquid/solana-stream'
import {TypeormDatabase} from '@subsquid/typeorm-store'
import assert from 'assert'
import * as tokenProgram from './abi/token-program'
import * as whirlpool from './abi/whirlpool'
import {Exchange} from './model'

 const SelectedSolFields = {
  block: {
    hash: false,
    number: true,
    parentHash: false,
    timestamp: true,
  },

  tokenBalance: {
    transactionIndex: true,
    account: false,
    preMint: false,
    postMint: true,
    preDecimals: false,
    postDecimals: true,
    preOwner: false,
    postOwner: true,
    preAmount: true,
    postAmount: true,
  },
} as FieldSelection;

const dataSource = new DataSourceBuilder()
    .setPortal({
        url: 'https://portal.sqd.dev/datasets/solana-mainnet',
        http: {
            retryAttempts: Infinity
        }
    })
    .setBlockRange({from: 317617480, to: 317617481})
    .setFields<typeof SelectedSolFields>(SelectedSolFields)
    .addTokenBalance({
      include: { transaction: false, transactionInstructions: false },
    })
    .includeAllBlocks()
    .build()

const database = new TypeormDatabase({supportHotBlocks: true})

run(dataSource, database, async ctx => {
    for (let block of ctx.blocks) {
        for (let tb of block.tokenBalances) {
            console.log(tb)
        }
    }
})
