import apiConfig from '@constants/apiConfig';
import useListBase from '@hooks/useListBase';
import React from 'react';
import BaseTable from '@components/common/table/BaseTable';
import { FieldTypes } from '@constants/formConfig';
import PageWrapper from '@components/common/layout/PageWrapper';
import ListPage from '@components/common/layout/ListPage';
import useTranslate from '@hooks/useTranslate';
import { commonMessage } from '@locales/intl';
import { useNavigate } from 'react-router-dom';
import { statusOptions } from '@constants/masterData';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Tag } from 'antd';

import {
    TRANSACTION_KIND_INCOME,
    TRANSACTION_KIND_EXPENDITURE,
    TRANSACTION_STATE_CREATED,
    TRANSACTION_STATE_APPROVE,
    TRANSACTION_STATE_REJECT,
} from '@constants/index';

const TransactionListPage = ({ pageOptions }) => {
    const translate = useTranslate();
    const navigate = useNavigate();
    const statusValues = translate.formatKeys(statusOptions, ['label']);
    const stateValues = [
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' },
        { label: 'Pending', value: 'pending' },
    ];    
    const { data, mixinFuncs, queryFilter, loading, pagination } = useListBase({
        apiConfig: apiConfig.transaction,
        options: {
            pageSize: 10,
            objectName: translate.formatMessage({ id: 'transactionName', defaultMessage: 'Transaction' }),
        },
    });

    const columns = [
        {
            title: '#',
            dataIndex: 'index',
            align: 'center',
            width: 50,
            render: (text, record, index) => index + 1,
        },
        {
            title: translate.formatMessage(commonMessage.transactionName),
            dataIndex: 'transactionName',
        },
        {
            title: translate.formatMessage(commonMessage.transactionDate),
            dataIndex: 'transactionDate',
        },
        {
            title: translate.formatMessage(commonMessage.amount),
            dataIndex: 'amount',
            render: (text) => `${text} đ`,
        },
        {
            title: translate.formatMessage({ id: 'category', defaultMessage: 'Category' }), // Nếu không có id, hãy thêm id vào intl.js
            dataIndex: 'category',
        },
        {
            title: translate.formatMessage({ id: 'kind', defaultMessage: 'Kind' }),
            dataIndex: 'kind',
            render: (kind) => {
                const kindLabel = kind === TRANSACTION_KIND_EXPENDITURE ? 'Chi' : 'Thu';
                const backgroundColor = kind === TRANSACTION_KIND_EXPENDITURE ? '#FFD700' : '#008000';
                return (
                    <span style={{ backgroundColor, color: 'white', padding: '2px 6px', borderRadius: '4px' }}>
                        {kindLabel}
                    </span>
                );
            },
        },
        {
            title: 'State',
            dataIndex: 'state',
            width: 80,
            align: 'center',
            render: (dataRow) => {
                const state = dataRow ? stateValues.find(item => item.value === dataRow) : null;
                return dataRow ? (
                    dataRow === 'approved' ? (
                        <CheckOutlined style={{ fontSize: 22, color: 'green' }} />
                    ) : dataRow === 'rejected' ? (
                        <CloseOutlined style={{ fontSize: 22, color: 'red' }} />
                    ) : (
                        <Tag color="orange">{state.label}</Tag>
                    )
                ) : (
                    <Tag>Undefined</Tag>
                );
            },
        },
        mixinFuncs.renderStatusColumn({ width: '120px' }),
        mixinFuncs.renderActionColumn({ edit: true, delete: true }, { width: '120px' }),
    ];

    const searchFields = [
        {
            key: 'transactionName',
            placeholder: translate.formatMessage({ id: 'transactionName', defaultMessage: 'Transaction Name' }),
        },
        {
            key: 'groupTransaction',
            placeholder: translate.formatMessage({ id: 'groupTransaction', defaultMessage: 'Group Transaction' }), 
            type: FieldTypes.SELECT,
            options: statusValues,
        },
        {
            key: 'kind',
            placeholder: translate.formatMessage({ id: 'kind', defaultMessage: 'Kind' }),
            type: FieldTypes.SELECT,
            options: [
                { label: 'Chi', value: TRANSACTION_KIND_EXPENDITURE },
                { label: 'Thu', value: TRANSACTION_KIND_INCOME },
            ],
        },
        {
            key: 'state',
            placeholder: translate.formatMessage({ id: 'state', defaultMessage: 'State' }),
            type: FieldTypes.SELECT,
            options: [
                { label: 'Đã tạo', value: TRANSACTION_STATE_CREATED },
                { label: 'Đã duyệt', value: TRANSACTION_STATE_APPROVE },
                { label: 'Từ chối', value: TRANSACTION_STATE_REJECT },
            ],
        },
        {
            key: 'fromDate',
            placeholder: translate.formatMessage({ id: 'fromDate', defaultMessage: 'From Date' }),
            type: FieldTypes.DATE,
        },
        {
            key: 'endDate',
            placeholder: translate.formatMessage({ id: 'endDate', defaultMessage: 'End Date' }),
            type: FieldTypes.DATE,
        },
    ];

    return (
        <PageWrapper routes={pageOptions.renderBreadcrumbs(commonMessage, translate)}>
            <ListPage
                searchForm={mixinFuncs.renderSearchForm({ fields: searchFields, initialValues: queryFilter })}
                actionBar={mixinFuncs.renderActionBar()}
                baseTable={
                    <BaseTable
                        onChange={mixinFuncs.changePagination}
                        columns={columns}
                        dataSource={data}
                        loading={loading}
                        rowKey={(record) => record.id}
                        pagination={pagination}
                    />
                }
            />
        </PageWrapper>
    );
};

export default TransactionListPage;
