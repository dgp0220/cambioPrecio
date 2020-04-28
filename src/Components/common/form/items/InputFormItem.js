import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
// import { FastField } from 'formik';
import FormErrors from '../FormErrors';

// export default function InputFormItem(props) {
//     const { name } = props;
//     return (
//         <FastField name={name}>
//             {
//                 ({ form }) => (
//                     <InputFormItemNotFast {...props} form={form} />
//                 )
//             }
//         </FastField>
//     )
// }

export function InputFormItem(props) {
    let {
        label,
        name,
        form,
        hint,
        layout,
        size,
        type,
        placeholder,
        autoFocus,
        autoComplete,
        prefix,
        formItemProps,
        inputProps,
        errorMessage,
        required,
        setShowErrorMessage,
        showErrorMessage
    } = props;

    const formValue = form.values[name];

    useEffect(() => {
        // console.log(showErrorMessage, formValue, setShowErrorMessage);

        if (showErrorMessage && formValue === '')
            setShowErrorMessage(true);
        else
            setShowErrorMessage(false);
    }, [formValue, showErrorMessage, setShowErrorMessage])

    return (
        <Form.Item
            {...layout}
            label={label}
            required={required}
            validateStatus={FormErrors.validateStatus(form, name, errorMessage)}
            help={FormErrors.displayableError(form, name, errorMessage) || hint}
            {...formItemProps}
        >
            <Input
                id={name}
                type={type}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values[name]}
                size={size || undefined}
                placeholder={placeholder || undefined}
                autoFocus={autoFocus || false}
                autoComplete={autoComplete || undefined}
                prefix={prefix || undefined}
                {...inputProps}
            />
        </Form.Item>
    );
}

InputFormItem.defaultProps = {
    layout: {
        labelCol: {
            md: { span: 6 },
            lg: { span: 4 },
        },
        wrapperCol: {
            md: { span: 18 },
            lg: { span: 12 },
        },
    },
    type: 'text',
    required: false,
};

InputFormItem.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    type: PropTypes.string,
    label: PropTypes.string,
    hint: PropTypes.string,
    autoFocus: PropTypes.bool,
    size: PropTypes.string,
    prefix: PropTypes.string,
    placeholder: PropTypes.string,
    layout: PropTypes.object,
    errorMessage: PropTypes.string,
    formItemProps: PropTypes.object,
    inputProps: PropTypes.object,
};
