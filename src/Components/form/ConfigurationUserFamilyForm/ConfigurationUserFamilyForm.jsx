import React, { Fragment } from 'react';
import { Button, Form, Input, Select } from 'antd';

import './configurationUserFamilyForm.scss';
import services from '../../../services/configurationUserFamilyServices';

export default function ConfigurationUserFamilyForm() {
  const [form] = Form.useForm();

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 6 },
      lg: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 20,
        offset: 0,
      },
    },
  };

  const onPressEnter = async (event) => {
    if (event.which === 13) {
      event.preventDefault();
    }
    const values = await services.get(event.target.value);

    form.setFieldsValue({
      userName: values.name,
      perfil: values.types[0].type.name,
    });
  };

  const onFinish = (values) => {
    console.log('submitting', values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Fragment>
      <div>Criterios de Busqueda:</div>

      <Form
        className="search-form"
        form={form}
        name="search"
        onFinish={onFinish}
      >
        <Form.Item
          label="Usuario"
          style={{ marginBottom: 0 }}
          {...formItemLayout}
        >
          <Form.Item
            name="user"
            rules={[
              {
                required: true,
                message: 'Usuario requerido',
              },
            ]}
            style={{
              display: 'inline-block',
              width: 'calc(25% - 8px)',
            }}
          >
            <Input
              placeholder="Ingrese Usuario"
              onPressEnter={onPressEnter}
            />
          </Form.Item>
          <Form.Item
            name="userName"
            style={{
              display: 'inline-block',
              width: 'calc(75% - 8px)',
              margin: '0 8px',
            }}
          >
            <Input disabled />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Perfil"
          style={{ marginBottom: 0 }}
          {...formItemLayout}
        >
          <Form.Item
            name="perfil"
            style={{
              display: 'inline-block',
              width: 'calc(100% - 8px)',
            }}
          >
            <Input disabled />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Familias Configuradas"
          style={{ marginBottom: 0 }}
          {...formItemLayout}
        >
          <Form.Item
            name="family"
            rules={[
              {
                required: true,
                message: 'Familia requerida',
              },
            ]}
            style={{
              display: 'inline-block',
              width: 'calc(100% - 8px)',
            }}
          >
            <Select
              placeholder="Seleccione Familia"
              style={{ width: '100%', display: 'block' }}
            >
              <Select.Option value="fam1">
                Familia 1
              </Select.Option>
              <Select.Option value="fam2">
                Familia 2
              </Select.Option>
            </Select>
          </Form.Item>
        </Form.Item>
        <Form.Item
          className="search-form-button"
          {...tailFormItemLayout}
        >
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="primary" htmlType="submit">
            Grabar
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
}
