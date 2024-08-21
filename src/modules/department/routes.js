import apiConfig from '@constants/apiConfig';
import { commonMessage } from '@locales/intl';
import DepartmentListPage from './';
import DepartmentSavePage from './DepartmentSavePage';

const paths = {
    departmentListPage: '/department',
    departmentSavePage: '/department/:id',
};
export default {
    departmentListPage: {
        path: paths.departmentListPage,
        auth: true,
        component: DepartmentListPage,
        permission: [apiConfig.department.getList.baseURL],
        pageOptions: {
            objectName: commonMessage.department,
            renderBreadcrumbs: (messages, t, title, options = {}) => {
                return [{ breadcrumbName: t.formatMessage(messages.department) }];
            },
        },
    },
    departmentSavePage: {
        path: paths.departmentSavePage,
        component: DepartmentSavePage,
        separateCheck: true,
        auth: true,
        permission: [apiConfig.department.create.baseURL, apiConfig.department.update.baseURL],
        pageOptions: {
            objectName: commonMessage.department,
            listPageUrl: paths.departmentListPage,
            renderBreadcrumbs: (messages, t, title, options = {}) => {
                return [
                    { breadcrumbName: t.formatMessage(messages.department), path: paths.departmentListPage },
                    { breadcrumbName: title },  
                ];
            },
        },
    },
};
