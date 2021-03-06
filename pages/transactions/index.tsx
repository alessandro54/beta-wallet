import React from "react";
import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import prisma from "../../lib/prisma";
import Transaction, {TransactionProps} from "../../components/Transaction";
import { serialize} from "superjson";

export const getStaticProps: GetStaticProps = async () => {
    const response = await prisma.transaction.findMany(
        {
            take:5,
            select: {
                id:true,
                description:true,
                amount: true,
                isCredit: true,
                createdAt:true

            }
        }
    )
    const {json: transactions } = serialize(response)
    return {
        props: { transactions },
    };
};

type Props = {
    transactions: TransactionProps[];
}
const Transactions: React.FC<Props> = (props) => {
    return(
        <Layout>
            {
                props.transactions.map((transaction) => (
                    <React.Fragment key = {transaction.id}>
                        <Transaction transaction={transaction}/>
                    </React.Fragment>
                ))
            }
        </Layout>
    )
}

export default Transactions