import {unit, struct, address, u64, string} from '@subsquid/borsh'
import {instruction} from '../abi.support'

/**
 * Creates the global state.
 */
export type Initialize = undefined

/**
 * Creates the global state.
 */
export const initialize = instruction(
    {
        d8: '0xafaf6d1f0d989bed',
    },
    {
        global: 0,
        user: 1,
        systemProgram: 2,
    },
    unit,
)

/**
 * Sets the global state parameters.
 */
export interface SetParams {
    feeRecipient: string
    initialVirtualTokenReserves: bigint
    initialVirtualSolReserves: bigint
    initialRealTokenReserves: bigint
    tokenTotalSupply: bigint
    feeBasisPoints: bigint
}

/**
 * Sets the global state parameters.
 */
export const setParams = instruction(
    {
        d8: '0x1beab2349302bb8d',
    },
    {
        global: 0,
        user: 1,
        systemProgram: 2,
        eventAuthority: 3,
        program: 4,
    },
    struct({
        feeRecipient: address,
        initialVirtualTokenReserves: u64,
        initialVirtualSolReserves: u64,
        initialRealTokenReserves: u64,
        tokenTotalSupply: u64,
        feeBasisPoints: u64,
    }),
)

/**
 * Creates a new coin and bonding curve.
 */
export interface Create {
    name: string
    symbol: string
    uri: string
}

/**
 * Creates a new coin and bonding curve.
 */
export const create = instruction(
    {
        d8: '0x181ec828051c0777',
    },
    {
        mint: 0,
        mintAuthority: 1,
        bondingCurve: 2,
        associatedBondingCurve: 3,
        global: 4,
        mplTokenMetadata: 5,
        metadata: 6,
        user: 7,
        systemProgram: 8,
        tokenProgram: 9,
        associatedTokenProgram: 10,
        rent: 11,
        eventAuthority: 12,
        program: 13,
    },
    struct({
        name: string,
        symbol: string,
        uri: string,
    }),
)

/**
 * Buys tokens from a bonding curve.
 */
export interface Buy {
    amount: bigint
    maxSolCost: bigint
}

/**
 * Buys tokens from a bonding curve.
 */
export const buy = instruction(
    {
        d8: '0x66063d1201daebea',
    },
    {
        global: 0,
        feeRecipient: 1,
        mint: 2,
        bondingCurve: 3,
        associatedBondingCurve: 4,
        associatedUser: 5,
        user: 6,
        systemProgram: 7,
        tokenProgram: 8,
        rent: 9,
        eventAuthority: 10,
        program: 11,
    },
    struct({
        amount: u64,
        maxSolCost: u64,
    }),
)

/**
 * Sells tokens into a bonding curve.
 */
export interface Sell {
    amount: bigint
    minSolOutput: bigint
}

/**
 * Sells tokens into a bonding curve.
 */
export const sell = instruction(
    {
        d8: '0x33e685a4017f83ad',
    },
    {
        global: 0,
        feeRecipient: 1,
        mint: 2,
        bondingCurve: 3,
        associatedBondingCurve: 4,
        associatedUser: 5,
        user: 6,
        systemProgram: 7,
        associatedTokenProgram: 8,
        tokenProgram: 9,
        eventAuthority: 10,
        program: 11,
    },
    struct({
        amount: u64,
        minSolOutput: u64,
    }),
)

/**
 * Allows the admin to withdraw liquidity for a migration once the bonding curve completes
 */
export type Withdraw = undefined

/**
 * Allows the admin to withdraw liquidity for a migration once the bonding curve completes
 */
export const withdraw = instruction(
    {
        d8: '0xb712469c946da122',
    },
    {
        global: 0,
        lastWithdraw: 1,
        mint: 2,
        bondingCurve: 3,
        associatedBondingCurve: 4,
        associatedUser: 5,
        user: 6,
        systemProgram: 7,
        tokenProgram: 8,
        rent: 9,
        eventAuthority: 10,
        program: 11,
    },
    unit,
)
