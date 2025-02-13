import {
    BigIntColumn,
    DateTimeColumn,
    Entity,
    IntColumn,
    PrimaryColumn,
    BooleanColumn,
    StringColumn
} from '@subsquid/typeorm-store'

@Entity()
export class Trade {
    constructor(props?: Partial<Trade>) {
        Object.assign(this, props)
    }

    // All entities must have single column primary key named `id`.
    @PrimaryColumn()
    id!: string

    @IntColumn({nullable: false})
    slot!: number

    @StringColumn({nullable: false})
    tx!: string

    @StringColumn()
    fromOwner!: string | undefined | null

    @StringColumn({nullable: false})
    fromToken!: string

    @BigIntColumn({nullable: false})
    fromAmount!: bigint

    @StringColumn()
    toOwner!: string | undefined | null

    @StringColumn({nullable: false})
    toToken!: string

    @BigIntColumn({nullable: false})
    toAmount!: bigint

    // @StringColumn({nullable: false})
    // mint!: string
    //
    // @BigIntColumn({nullable: true})
    // sol_amount!: bigint | null
    //
    // @BigIntColumn({nullable: true})
    // token_amount!: bigint | null
    //
    // @BooleanColumn({nullable: false})
    // is_buy!: boolean
    //
    // @StringColumn({nullable: false})
    // user!: string
    //
    // @BigIntColumn({nullable: true})
    // virtual_sol_reserves!: bigint | null
    //
    // @BigIntColumn({nullable: true})
    // virtual_token_reserves!: bigint | null
    //
    @DateTimeColumn({nullable: false})
    timestamp!: Date
    //
    // @StringColumn({nullable: false})
    // signature!: string
    //
    // @IntColumn({nullable: false})
    // log_index!: number
}
