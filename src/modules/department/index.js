import React from 'react';
import { Button, Avatar } from 'antd';
import { AppConstants, DEFAULT_TABLE_ITEM_SIZE } from '@constants';
import apiConfig from '@constants/apiConfig';
import useListBase from '@hooks/useListBase';
import BaseTable from '@components/common/table/BaseTable';
import PageWrapper from '@components/common/layout/PageWrapper';
import ListPage from '@components/common/layout/ListPage';
import { useNavigate } from 'react-router-dom';
import { defineMessages, FormattedMessage } from 'react-intl';
import useTranslate from '@hooks/useTranslate';
import { commonMessage } from '@locales/intl';
import { HomeOutlined } from '@ant-design/icons';

const message = defineMessages({
    objectName: 'department',
});

const DepartmentListPage = ({ pageOptions }) => {
    const translate = useTranslate();
    const navigate = useNavigate();
    const { data, mixinFuncs, queryFilter, loading, pagination } = useListBase({
        apiConfig: apiConfig.department, 
        options: {
            pageSize: DEFAULT_TABLE_ITEM_SIZE,
            objectName: translate.formatMessage(pageOptions.objectName),
        },
    });

    const columns = [
        {
            title: '#',
            dataIndex: 'id',
            key: 'id',
            width: 50,
            render: text => <span>{text}</span>,
        },
        {
            title: translate.formatMessage(commonMessage.departmentName),
            dataIndex: 'name',
            key: 'name',
        },
        mixinFuncs.renderStatusColumn({ width: '120px' }),
        mixinFuncs.renderActionColumn(
            { edit: true, delete: true },
            { width: '120px' },
        ),
    ];

    const searchFields = [
        {
            key: 'name',
            placeholder: translate.formatMessage(commonMessage.searchByName),
        },
    ];

    return (
        <PageWrapper items={pageOptions.renderBreadcrumbs(commonMessage, translate)}>
            <ListPage
                searchForm={mixinFuncs.renderSearchForm({ fields: searchFields, initialValues: queryFilter })}
                actionBar={mixinFuncs.renderActionBar({ createActionLabel: translate.formatMessage(commonMessage.addNew) })}
                baseTable={
                    <BaseTable
                        columns={columns}
                        dataSource={data}
                        loading={loading}
                        pagination={pagination}
                        onChange={mixinFuncs.changePagination}
                    />
                }
            />
        </PageWrapper>
    );
    
};

export default DepartmentListPage;
