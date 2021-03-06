import React from "react";

export type TransactionProps = {
    id: number;
    description: string;
    amount: number;
    wallet: {
        id: number,
        ownerId: number,
    } | null;
    isCredit: boolean;
    categories: [string];
    createdAt: Date;
    updatedAt: Date;
}

const Transaction: React.FC<{ transaction: TransactionProps }> = ({transaction}) => {
    const { id, description, amount} = transaction
    return (
        <div className="bg-blue-100">
            <span>{id}</span>
            <p>{description}</p>
            <h1>{amount}</h1>
        </div>
    )
}

export default Transaction