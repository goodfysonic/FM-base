import React from 'react';
import { UsergroupAddOutlined, ControlOutlined, InboxOutlined, BookOutlined } from '@ant-design/icons';
import routes from '@routes';
import { FormattedMessage } from 'react-intl';
import apiConfig from './apiConfig';
import { IconSettings } from '@tabler/icons-react';

export const navMenuConfig = [
    {
        label: <FormattedMessage defaultMessage="Quản lí Transaction" />,
        key: 'quan-ly-giao-dich',
        icon: <IconSettings size={16} />,
        children: [
            {
                label: <FormattedMessage defaultMessage="Transaction" />,
                key: 'transaction',
                path: routes.transactionListPage.path,
                permission: apiConfig.transaction.getList.baseURL,
            },
        ],
    },
    {
        label: <FormattedMessage defaultMessage="Quản lý hệ thống" />,
        key: 'quan-ly-he-thong',
        icon: <IconSettings size={16} />,
        // permission: apiConfig.category.getList.baseURL,
        children: [
            {
                label: <FormattedMessage defaultMessage="Cài đặt" />,
                key: 'setting',
                path: routes.settingsPage.path,
            },
        ],
    },
    {
        label: <FormattedMessage defaultMessage="Quản lý người dùng" />,
        key: 'course-management',
        icon: <BookOutlined size={16} />,
        children: [
            {
                label: <FormattedMessage defaultMessage="User" />,
                key: 'user-management',
                path: routes.userListPage.path,
                permission: apiConfig.user.getList.baseURL,
            },
                
            {
                label: <FormattedMessage defaultMessage="Department" />,
                key: 'department-manangemennt',
                path: routes.departmentListPage.path,
                // permission: apiConfig.department.getList.baseURL,
            },

            {
                label: <FormattedMessage defaultMessage="Quyền hạn" />,
                key: 'groups-permissions',
                path: routes.groupPermissionPage.path,
                // permission: apiConfig.department.getList.baseURL,
            },

            // {
            //     label: <FormattedMessage defaultMessage="Quản lý khóa học" />,
            //     key: 'course-manangemennt',
            //     path: routes.courseListPage.path,
            //     permission: apiConfig.course.getList.baseURL,
            // },
        ],
    },
];
