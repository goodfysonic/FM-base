import { Card, Col, Form, Row } from 'antd';
import React, { useEffect } from 'react';
import useBasicForm from '@hooks/useBasicForm';
import TextField from '@components/common/form/TextField';
import { defineMessages } from 'react-intl';
import useTranslate from '@hooks/useTranslate';
import { BaseForm } from '@components/common/form/BaseForm';

const message = defineMessages({
    objectName: 'department',
});

const DepartmentForm = (props) => {
    const translate = useTranslate();
    const { formId, actions, dataDetail, onSubmit, setIsChangedFormValues, isEditing } = props;

    const { form, onValuesChange } = useBasicForm({
        onSubmit,
        setIsChangedFormValues,
    });

    useEffect(() => {
        if (dataDetail) {
            form.setFieldsValue({ ...dataDetail });
        }
    }, [dataDetail, form]);

    return (
        <BaseForm id={formId} onFinish={onSubmit} form={form} onValuesChange={onValuesChange}>
            <Card className="card-form" bordered={false}>
                <Row gutter={16}>
                    <Col span={24}>
                        <TextField
                            label={'Danh mục tin tức'}
                            required
                            name="categoryName" 
                        />
                    </Col>
                    <Col span={24}>
                        <TextField
                            label={'Mô tả'} 
                            name="description"
                            type="textarea"
                            required
                        />
                    </Col>
                </Row>

                <div className="footer-card-form">{actions}</div>
            </Card>
        </BaseForm>
    );
};

export default DepartmentForm;
