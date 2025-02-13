import {event} from '../abi.support'
import {CreateEvent as CreateEvent_, TradeEvent as TradeEvent_, CompleteEvent as CompleteEvent_, SetParamsEvent as SetParamsEvent_} from './types'

export type CreateEvent = CreateEvent_

export const CreateEvent = event(
    {
        d8: '0x1b72a94ddeeb6376',
    },
    CreateEvent_,
)

export type TradeEvent = TradeEvent_

export const TradeEvent = event(
    {
        d8: '0xbddb7fd34ee661ee',
    },
    TradeEvent_,
)

export type CompleteEvent = CompleteEvent_

export const CompleteEvent = event(
    {
        d8: '0x5f72619cd42e9808',
    },
    CompleteEvent_,
)

export type SetParamsEvent = SetParamsEvent_

export const SetParamsEvent = event(
    {
        d8: '0xdfc39ff63e308f83',
    },
    SetParamsEvent_,
)
