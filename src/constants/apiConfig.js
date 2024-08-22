import { AppConstants, apiUrl, apiTenantUrl } from '.';

const baseHeader = {
    'Content-Type': 'application/json',
};

const multipartFormHeader = {
    'Content-Type': 'multipart/form-data',
};

const apiConfig = {
    account: {
        login: {
            baseURL: `${apiUrl}v1/account/login`,
            method: 'POST',
            headers: baseHeader,
        },
        loginBasic: {
            baseURL: `${apiUrl}api/token`,
            method: 'POST',
            headers: baseHeader,
        },
        getProfile: {
            baseURL: `${apiUrl}v1/account/profile`,
            method: 'GET',
            headers: baseHeader,
        },
        updateProfile: {
            baseURL: `${apiUrl}v1/account/update-profile-admin`,
            method: 'PUT',
            headers: baseHeader,
        },
        getById: {
            baseURL: `${apiUrl}v1/account/get/:id`,
            method: 'GET',
            headers: baseHeader,
        },
        refreshToken: {
            baseURL: `${apiUrl}v1/account/refresh_token`,
            method: 'POST',
            headers: baseHeader,
        },
        logout: {
            baseURL: `${apiUrl}v1/account/logout`,
            method: 'GET',
            headers: baseHeader,
        },
    },
    user: {
        getList: {
            baseURL: `${apiUrl}v1/account/list`,
            method: `GET`,
            headers: baseHeader,
        },
        autocomplete: {
            baseURL: `${apiUrl}v1/account/auto-complete`,
            method: `GET`,
            headers: baseHeader,
        },
        getById: {
            baseURL: `${apiUrl}v1/account/get/:id`,
            method: `GET`,
            headers: baseHeader,
        },
        create: {
            baseURL: `${apiUrl}v1/account/create-admin`,
            method: `POST`,
            headers: baseHeader,
        },
        update: {
            baseURL: `${apiUrl}v1/account/update-admin`,
            method: `PUT`,
            headers: baseHeader,
        },
        delete: {
            baseURL: `${apiUrl}v1/account/delete/:id`,
            method: `DELETE`,
            headers: baseHeader,
        },
    },
    post: {
        getList: {
            baseURL: `${apiUrl}api/posts/list`,
            method: `GET`,
            headers: baseHeader,
        },
        getById: {
            baseURL: `${apiUrl}api/posts/get/:id`,
            method: `GET`,
            headers: baseHeader,
        },
        create: {
            baseURL: `${apiUrl}api/posts/create`,
            method: `POST`,
            headers: baseHeader,
        },
        update: {
            baseURL: `${apiUrl}api/posts/update`,
            method: `PUT`,
            headers: baseHeader,
        },
        delete: {
            baseURL: `${apiUrl}api/posts/:id`,
            method: `DELETE`,
            headers: baseHeader,
        },
        autocomplete: {
            baseURL: `${apiUrl}api/posts/auto-complete`,
            method: `GET`,
            headers: baseHeader,
        },
    },
    file: {
        upload: {
            path: `${AppConstants.mediaRootUrl}v1/file/upload`,
            method: 'POST',
            headers: multipartFormHeader,
        },
        image: {
            path: `${AppConstants.mediaRootUrl}admin/v1/image/upload`,
            method: 'POST',
            headers: multipartFormHeader,
        },
        video: {
            path: `${AppConstants.mediaRootUrl}admin/v1/video/upload`,
            method: 'POST',
            headers: multipartFormHeader,
        },
    },
    category: {
        getList: {
            baseURL: `${apiUrl}api/category/list`,
            method: 'GET',
            headers: baseHeader,
        },
        getById: {
            baseURL: `${apiUrl}api/category/get/:id`,
            method: 'GET',
            headers: baseHeader,
        },
        create: {
            baseURL: `${apiUrl}api/category/create`,
            method: 'POST',
            headers: baseHeader,
        },
        update: {
            baseURL: `${apiUrl}api/category/update`,
            method: 'PUT',
            headers: baseHeader,
        },
        delete: {
            baseURL: `${apiUrl}api/category/delete/:id`,
            method: 'DELETE',
            headers: baseHeader,
        },
        autocomplete: {
            baseURL: `${apiUrl}api/category/auto-complete`,
            method: 'GET',
            headers: baseHeader,
        },
    },
    languages: {
        getList: {
            baseURL: `${apiUrl}admin/api/languages`,
            method: 'GET',
            headers: baseHeader,
        },
    },
    groupPermission: {
        getGroupList: {
            baseURL: `${apiUrl}v1/group/list`,
            method: 'GET',
            headers: baseHeader,
        },
        getList: {
            baseURL: `${apiUrl}v1/group/list`,
            method: 'GET',
            headers: baseHeader,
        },
        getPemissionList: {
            baseURL: `${apiUrl}v1/permission/list`,
            method: 'GET',
            headers: baseHeader,
        },
        getById: {
            baseURL: `${apiUrl}v1/group/get/:id`,
            method: 'GET',
            headers: baseHeader,
        },
        create: {
            baseURL: `${apiUrl}v1/group/create`,
            method: 'POST',
            headers: baseHeader,
        },
        update: {
            baseURL: `${apiUrl}v1/group/update`,
            method: 'PUT',
            headers: baseHeader,
        },
        delete: {
            baseURL: `${apiUrl}v1/group/delete/:id`,
            method: 'DELETE',
            headers: baseHeader,
        },
        getGroupListCombobox: {
            baseURL: `${apiUrl}v1/group/list-combobox`,
            method: 'GET',
            headers: baseHeader,
        },
    },
    branchs: {
        getListCombobox: {
            baseURL: `${apiUrl}api/branch/list-combobox`,
            method: 'GET',
            headers: baseHeader,
        },
    },
    news: {
        getList: {
            baseURL: `${apiUrl}api/news/list`,
            method: 'GET',
            headers: baseHeader,
        },
        getById: {
            baseURL: `${apiUrl}api/news/get/:id`,
            method: 'GET',
            headers: baseHeader,
        },
        create: {
            baseURL: `${apiUrl}api/news/create`,
            method: 'POST',
            headers: baseHeader,
        },
        update: {
            baseURL: `${apiUrl}api/news/update`,
            method: 'PUT',
            headers: baseHeader,
        },
        delete: {
            baseURL: `${apiUrl}api/news/delete/:id`,
            method: 'DELETE',
            headers: baseHeader,
        },
    },
    address: {
        getList: {
            baseURL: `${apiUrl}api/address/list`,
            method: 'GET',
            headers: baseHeader,
        },
        getById: {
            baseURL: `${apiUrl}api/address/get/:id`,
            method: 'GET',
            headers: baseHeader,
        },
        create: {
            baseURL: `${apiUrl}api/address/create`,
            method: 'POST',
            headers: baseHeader,
        },
        update: {
            baseURL: `${apiUrl}api/address/update`,
            method: 'PUT',
            headers: baseHeader,
        },
        delete: {
            baseURL: `${apiUrl}api/address/delete/:id`,
            method: 'DELETE',
            headers: baseHeader,
        },
    },
    nation: {
        getList: {
            baseURL: `${apiUrl}api/nation/list`,
            method: 'GET',
            headers: baseHeader,
        },
        getById: {
            baseURL: `${apiUrl}api/nation/get/:id`,
            method: 'GET',
            headers: baseHeader,
        },
        create: {
            baseURL: `${apiUrl}api/nation/create`,
            method: 'POST',
            headers: baseHeader,
        },
        update: {
            baseURL: `${apiUrl}api/nation/update`,
            method: 'PUT',
            headers: baseHeader,
        },
        delete: {
            baseURL: `${apiUrl}api/nation/delete/:id`,
            method: 'DELETE',
            headers: baseHeader,
        },
        autocomplete: {
            baseURL: `${apiUrl}api/nation/auto-complete`,
            method: 'GET',
            headers: baseHeader,
        },
    },
    
    settings: {
        getList: {
            baseURL: `${apiTenantUrl}v1/setting/list`,
            method: 'GET',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        getById: {
            baseURL: `${apiTenantUrl}v1/setting/get/:id`,
            method: 'GET',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        create: {
            baseURL: `${apiTenantUrl}v1/setting/create`,
            method: 'POST',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        update: {
            baseURL: `${apiTenantUrl}v1/setting/update`,
            method: 'PUT',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        delete: {
            baseURL: `${apiTenantUrl}v1/setting/delete/:id`,
            method: 'DELETE',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        autocomplete: {
            baseURL: `${apiTenantUrl}v1/setting/auto-complete`,
            method: 'GET',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        settings: {
            baseURL: `${apiTenantUrl}v1/setting/settings`,
            method: 'GET',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
    },

    department: {
        getList: {
            baseURL: `${apiUrl}v1/department/list`,
            method: 'GET',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        getById: {
            baseURL: `${apiUrl}v1/department/get/:id`,
            method: 'GET',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        create: {
            baseURL: `${apiUrl}v1/department/create`,
            method: 'POST',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        update: {
            baseURL: `${apiUrl}v1/department/update`,
            method: 'PUT',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        delete: {
            baseURL: `${apiUrl}v1/department/delete/:id`,
            method: 'DELETE',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        autocomplete: {
            baseURL: `${apiUrl}v1/department/auto-complete`,
            method: 'GET',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
    },

    // transaction: {
    //     getList: {
    //         baseURL: `${apiUrl}v1/transaction/list`,
    //         method: 'GET',
    //         headers: baseHeader,
    //         isRequiredTenantId: true,
    //     },
    //     getById: {
    //         baseURL: `${apiUrl}v1/transaction/get/:id`,
    //         method: 'GET',
    //         headers: baseHeader,
    //         isRequiredTenantId: true,
    //     },
    //     create: {
    //         baseURL: `${apiUrl}v1/transaction/create`,
    //         method: 'POST',
    //         headers: baseHeader,
    //         isRequiredTenantId: true,
    //     },
    //     update: {
    //         baseURL: `${apiUrl}v1/transaction/update`,
    //         method: 'PUT',
    //         headers: baseHeader,
    //         isRequiredTenantId: true,
    //     },
    //     delete: {
    //         baseURL: `${apiUrl}v1/transaction/delete/:id`,
    //         method: 'DELETE',
    //         headers: baseHeader,
    //         isRequiredTenantId: true,
    //     },
    //     autocomplete: {
    //         baseURL: `${apiUrl}v1/transaction/auto-complete`,
    //         method: 'GET',
    //         headers: baseHeader,
    //         isRequiredTenantId: true,
    //     },
    //     approve: {
    //         baseURL: `${apiUrl}v1/transaction/approve`,
    //         method: 'PUT',
    //         headers: baseHeader,
    //         isRequiredTenantId: true,
    //     },
    //     my_transaction: {
    //         baseURL: `${apiUrl}v1/transaction/my-transaction`,
    //         method: 'GET',
    //         headers: baseHeader,
    //         isRequiredTenantId: true,
    //     },
    //     reject: {
    //         baseURL: `${apiUrl}v1/transaction/reject`,
    //         method: 'PUT',
    //         headers: baseHeader,
    //         isRequiredTenantId: true,
    //     },
    // },
    
    transaction: {
        getList: {
            baseURL: `${apiUrl}v1/transaction/list`,
            method: 'GET',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        getById: {
            baseURL: `${apiUrl}v1/transaction/get/{id}`, 
            method: 'GET',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        create: {
            baseURL: `${apiUrl}v1/transaction/create`,
            method: 'POST',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        update: {
            baseURL: `${apiUrl}v1/transaction/update`,
            method: 'PUT',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        delete: {
            baseURL: `${apiUrl}v1/transaction/delete/{id}`, 
            method: 'DELETE',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        autocomplete: {
            baseURL: `${apiUrl}v1/transaction/auto-complete`,
            method: 'GET',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        approve: {
            baseURL: `${apiUrl}v1/transaction/approve`,
            method: 'PUT',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        my_transaction: {
            baseURL: `${apiUrl}v1/transaction/my-transaction`,
            method: 'GET',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        reject: {
            baseURL: `${apiUrl}v1/transaction/reject`,
            method: 'PUT',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        importExcel: {
            baseURL: `${apiUrl}v1/transaction/import-excel`,
            method: 'POST',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        exportToExcel: {
            baseURL: `${apiUrl}v1/transaction/export-to-excel`,
            method: 'GET',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        myStatistic: {
            baseURL: `${apiUrl}v1/transaction/my-statistic`,
            method: 'GET',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
    },
    

    transactionGroup: {
        getList: {
            baseURL: `${apiUrl}v1/transaction-group/list`,
            method: 'GET',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        getById: {
            baseURL: `${apiUrl}v1/transaction-group/get/:id`,
            method: 'GET',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        create: {
            baseURL: `${apiUrl}v1/transaction-group/create`,
            method: 'POST',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        update: {
            baseURL: `${apiUrl}v1/transaction-group/update`,
            method: 'PUT',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        delete: {
            baseURL: `${apiUrl}v1/transaction-group/delete/:id`,
            method: 'DELETE',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
        autocomplete: {
            baseURL: `${apiUrl}v1/transaction-group/auto-complete`,
            method: 'GET',
            headers: baseHeader,
            isRequiredTenantId: true,
        },
    },
};

export default apiConfig;
