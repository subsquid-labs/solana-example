import {run} from '@subsquid/batch-processor'
import {augmentBlock} from '@subsquid/solana-objects'
import {DataSourceBuilder} from '@subsquid/solana-stream'
import {TypeormDatabase} from '@subsquid/typeorm-store'
import assert from 'assert'
import * as tokenProgram from './abi/token-program'
import * as whirlpool from './abi/whirlpool'
import {Exchange} from './model'

const meteoraDlmmProgramId = 'LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo'
const meteoraDammV2ProgramId = 'cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG'
const pumpfunAmmProgramId = 'pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA'
// const heavenAmmProgramId,
const orcaClmmProgramId = 'whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc'
const raydiumAmmV4ProgramId = '675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8'
const raydiumClmmProgramId = 'CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK'
const raydiumCpmmProgramId = 'CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C'
// const pancakeSwapAmmProgramId,
const programs = [
  meteoraDlmmProgramId,
  meteoraDammV2ProgramId,
  pumpfunAmmProgramId,
//  heavenAmmProgramId,
  orcaClmmProgramId,
  raydiumAmmV4ProgramId,
  raydiumClmmProgramId,
  raydiumCpmmProgramId,
//  pancakeSwapAmmProgramId,
]

const dataSource = new DataSourceBuilder()
  .setPortal({
    url: 'https://portal.sqd.dev/datasets/solana-mainnet',
    http: {
      retryAttempts: Infinity
    }
  })
  .setBlockRange({from: 3902470696})
  .setFields({
    block: {
      timestamp: true,
      number: true
    },
    transaction: {
      signatures: true,
      accountKeys: true
    },
    instruction: {
      programId: true,
      accounts: true,
      data: true
    }
  })
  .addInstruction({
    where: {
      programId: programs,
      isCommitted: true
    },
    include: {
      innerInstructions: true,
      transaction: true,
      transactionTokenBalances: true,
      logs: true
    }
  })
  .build()

const database = new TypeormDatabase({supportHotBlocks: true})

run(dataSource, database, async ctx => {
  for (let block of ctx.blocks) {
    console.log(`Got ${block.instructions.length} instructions`)
  }
})
