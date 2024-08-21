import { Card, Col, Form, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import useBasicForm from '@hooks/useBasicForm';
import TextField from '@components/common/form/TextField';
import CropImageField from '@components/common/form/CropImageField';
import { AppConstants, DATE_FORMAT_VALUE, DEFAULT_FORMAT, groupPermissionKindsOptions } from '@constants';
import useFetch from '@hooks/useFetch';
import apiConfig from '@constants/apiConfig';
import { defineMessages } from 'react-intl';
import useTranslate from '@hooks/useTranslate';
import { commonMessage } from '@locales/intl';
import { BaseForm } from '@components/common/form/BaseForm';
import SelectField from '@components/common/form/SelectField';
import DatePickerField from '@components/common/form/DatePickerField';
import dayjs from 'dayjs';
import { formatDateString } from '@utils';
import PropTypes from 'prop-types';
import AutoCompleteField from '@components/common/form/AutoCompleteField';

const message = defineMessages({
    objectName: 'group permission',
});

const UserForm = (props) => {
    const translate = useTranslate();
    const { formId, actions, dataDetail, onSubmit, setIsChangedFormValues, groups, branchs, isEditing } = props;
    const { execute: executeUpFile } = useFetch(apiConfig.file.upload);
    const [imageUrl, setImageUrl] = useState(null);

    const { form, mixinFuncs, onValuesChange } = useBasicForm({
        onSubmit,
        setIsChangedFormValues,
    });

    const uploadFile = (file, onSuccess, onError) => {
        executeUpFile({
            data: {
                type: 'AVATAR',
                file: file,
            },
            onCompleted: (response) => {
                if (response.result === true) {
                    onSuccess();
                    setImageUrl(response.data.filePath);  
                    setIsChangedFormValues(true);
                }
            },
            onError: (error) => {
                onError();
            },
        });
    };
    

    const handleSubmit = (values) => {
        values.birthDate = formatDateString(values?.birthDate, DATE_FORMAT_VALUE) + ' 00:00:00';
        const groupId = 15;
        return mixinFuncs.handleSubmit({ ...values, groupId, avatar: imageUrl });
    };

    const validateDate = (_, value) => {
        const date = dayjs(formatDateString(new Date(), DEFAULT_FORMAT), DATE_FORMAT_VALUE);
        if (date && value && value.isAfter(date)) {
            return Promise.reject('Ngày sinh phải nhỏ hơn ngày hiện tại');
        }
        return Promise.resolve();
    };

    useEffect(() => {
        if (dataDetail) {
            form.setFieldsValue({
                ...dataDetail,
                username: dataDetail.username,
                fullName: dataDetail.fullName,
                phone: dataDetail.phone,
                email: dataDetail.email,
                address: dataDetail.address,
                birthDate: dataDetail.birthDate, 
                departmentId: dataDetail.departmentId,
                groupId: dataDetail.groupId,
                avatar: dataDetail.avatar,
            });
            setImageUrl(dataDetail.avatar);
        }
    }, [dataDetail, form]);
    

    return (
        <BaseForm id={formId} onFinish={handleSubmit} form={form} onValuesChange={onValuesChange}>
            <Card className="card-form" bordered={false}>
                <Row gutter={16}>
                    <Col span={12}>
                        <CropImageField
                            label={translate.formatMessage(commonMessage.avatar)}
                            name="avatarPath"
                            imageUrl={imageUrl && `${AppConstants.contentRootUrl}${imageUrl}`}
                            aspect={1 / 1}
                            uploadFile={uploadFile}
                        />
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <TextField
                            label={translate.formatMessage(commonMessage.username)}
                            required
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                                // {
                                //     validator: checkUsernameUnique,
                                // },
                            ]}
                        />
                    </Col>
                    <Col span={12}>
                        <TextField label={translate.formatMessage(commonMessage.fullName)} required name="fullName" />
                    </Col>
                    <Col span={12}>
                        <TextField label={translate.formatMessage(commonMessage.address)} required name="address" />
                    </Col>

                    <Col span={12}>
                        <DatePickerField
                            disabled={isEditing}
                            name="birthDate"
                            placeholder="Ngày sinh"
                            style={{ width: '100%' }}
                            label={translate.formatMessage(commonMessage.birthDate)}
                            format={DATE_FORMAT_VALUE}
                            required={isEditing ? false : true}
                            rules={[
                                {
                                    validator: validateDate,
                                },
                            ]}
                        />
                    </Col>
                    <Col span={12}>
                        <TextField
                            label={translate.formatMessage(commonMessage.email)}
                            name="email"
                            type="email"
                            required={!isEditing}
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                                // {
                                //     validator: checkEmailUnique,
                                // },
                            ]}
                        />
                    </Col>
                    <Col span={12}>
                        <TextField
                            label={translate.formatMessage(commonMessage.phone)}
                            type="number"
                            name="phone"
                            required
                        />
                    </Col>
                    <Col span={12}>
                        <AutoCompleteField
                            label={translate.formatMessage(commonMessage.department)}
                            name="departmentId"
                            apiConfig={apiConfig.department.autocomplete}
                            mappingOptions={(item) => ({ value: item.id, label: item.name })}
                            initialSearchParams={{ kind: 1 }}
                            searchParams={(text) => ({ name: text, kind: 1 })}
                            required
                        />
                    </Col>
                    <Col span={12}>
                        <SelectField
                            label={translate.formatMessage(commonMessage.group)}
                            name="kind"
                            options={groupPermissionKindsOptions}
                        />
                    </Col>
                    <Col span={12}>
                        <TextField
                            label={translate.formatMessage(commonMessage.password)}
                            required={!isEditing}
                            name="password"
                            type="password"
                            rules={[
                                {
                                    validator: async () => {
                                        const isTouched = form.isFieldTouched('password');
                                        if (isTouched) {
                                            const value = form.getFieldValue('password');
                                            if (value.length < 6) {
                                                throw new Error(
                                                    translate.formatMessage(commonMessage.validatePassword),
                                                );
                                            }
                                        }
                                    },
                                },
                            ]}
                        />
                    </Col>
                </Row>
                <div className="footer-card-form">{actions}</div>
            </Card>
        </BaseForm>
    );
};

// Xác thực prop với PropTypes
UserForm.propTypes = {
    formId: PropTypes.string.isRequired,
    actions: PropTypes.node,
    dataDetail: PropTypes.shape({
        phone: PropTypes.string,
        fullName: PropTypes.string,
        email: PropTypes.string,
        birthDate: PropTypes.instanceOf(dayjs),
        avatar: PropTypes.string,
        account: PropTypes.shape({
            phone: PropTypes.string,
            fullName: PropTypes.string,
            email: PropTypes.string,
        }),
    }).isRequired,
    onSubmit: PropTypes.func.isRequired,
    setIsChangedFormValues: PropTypes.func.isRequired,
    groups: PropTypes.array,
    branchs: PropTypes.array,
    isEditing: PropTypes.bool,
};

export default UserForm;
