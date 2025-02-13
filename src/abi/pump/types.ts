import {Codec, struct, bool, address, u64, i64, string} from '@subsquid/borsh'

export interface Global {
    initialized: boolean
    authority: string
    feeRecipient: string
    initialVirtualTokenReserves: bigint
    initialVirtualSolReserves: bigint
    initialRealTokenReserves: bigint
    tokenTotalSupply: bigint
    feeBasisPoints: bigint
}

export const Global: Codec<Global> = struct({
    initialized: bool,
    authority: address,
    feeRecipient: address,
    initialVirtualTokenReserves: u64,
    initialVirtualSolReserves: u64,
    initialRealTokenReserves: u64,
    tokenTotalSupply: u64,
    feeBasisPoints: u64,
})

export interface LastWithdraw {
    lastWithdrawTimestamp: bigint
}

export const LastWithdraw: Codec<LastWithdraw> = struct({
    lastWithdrawTimestamp: i64,
})

export interface BondingCurve {
    virtualTokenReserves: bigint
    virtualSolReserves: bigint
    realTokenReserves: bigint
    realSolReserves: bigint
    tokenTotalSupply: bigint
    complete: boolean
}

export const BondingCurve: Codec<BondingCurve> = struct({
    virtualTokenReserves: u64,
    virtualSolReserves: u64,
    realTokenReserves: u64,
    realSolReserves: u64,
    tokenTotalSupply: u64,
    complete: bool,
})

export interface CreateEvent {
    name: string
    symbol: string
    uri: string
    mint: string
    bondingCurve: string
    user: string
}

export const CreateEvent: Codec<CreateEvent> = struct({
    name: string,
    symbol: string,
    uri: string,
    mint: address,
    bondingCurve: address,
    user: address,
})

export interface TradeEvent {
    mint: string
    solAmount: bigint
    tokenAmount: bigint
    isBuy: boolean
    user: string
    timestamp: bigint
    virtualSolReserves: bigint
    virtualTokenReserves: bigint
    realSolReserves: bigint
    realTokenReserves: bigint
}

export const TradeEvent: Codec<TradeEvent> = struct({
    mint: address,
    solAmount: u64,
    tokenAmount: u64,
    isBuy: bool,
    user: address,
    timestamp: i64,
    virtualSolReserves: u64,
    virtualTokenReserves: u64,
    realSolReserves: u64,
    realTokenReserves: u64,
})

export interface CompleteEvent {
    user: string
    mint: string
    bondingCurve: string
    timestamp: bigint
}

export const CompleteEvent: Codec<CompleteEvent> = struct({
    user: address,
    mint: address,
    bondingCurve: address,
    timestamp: i64,
})

export interface SetParamsEvent {
    feeRecipient: string
    initialVirtualTokenReserves: bigint
    initialVirtualSolReserves: bigint
    initialRealTokenReserves: bigint
    tokenTotalSupply: bigint
    feeBasisPoints: bigint
}

export const SetParamsEvent: Codec<SetParamsEvent> = struct({
    feeRecipient: address,
    initialVirtualTokenReserves: u64,
    initialVirtualSolReserves: u64,
    initialRealTokenReserves: u64,
    tokenTotalSupply: u64,
    feeBasisPoints: u64,
})
