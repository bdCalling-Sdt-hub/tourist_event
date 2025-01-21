'use client'
import React from 'react';
import { Table, Typography } from 'antd';
import { usePaymentHistoryQuery } from '@/Redux/Apis/paymentApis';

const { Text } = Typography;

const BillingHistory: React.FC = () => {
    const { data } = usePaymentHistoryQuery(undefined)
    const dataSource = [
        {
            key: '1',
            date: 'Dec 1, 2020',
            amount: '$0',
            package: 'Team Package',
        },
        {
            key: '2',
            date: 'Jan 1, 2021',
            amount: '$0',
            package: 'Team Package',
        },
        {
            key: '3',
            date: 'Feb 1, 2021',
            amount: '$0',
            package: 'Team Package',
        },
        {
            key: '4',
            date: 'Mar 1, 2021',
            amount: '$0',
            package: 'Team Package',
        },
        {
            key: '5',
            date: 'Apr 1, 2021',
            amount: '$0',
            package: 'Team Package',
        },
        // Add more data here if needed for pagination
    ];

    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: (text: string) => (
                <span>
                    {text}
                </span>
            ),
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Package',
            dataIndex: 'package',
            key: 'package',
        },
    ];
    console.log(data)
    return (
        <div style={{ maxWidth: 600, margin: 'auto' }}>
            <Text strong>BILLING HISTORY</Text>
            <div style={{ borderBottom: '1px solid #000', margin: '8px 0' }} />
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={{ pageSize: 3 }}
                bordered={false}
                showHeader={false}
            />
        </div>
    );
};

export default BillingHistory;
