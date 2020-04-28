import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'antd';
import { connect } from 'react-redux';
// import { InputFormItem, InputFormItemNotFast } from '../../components/common/form/items';
import { InputFormItem } from '../../components/common/form/items';
import * as yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import actions from '../../actions/authActions';
import './login.scss';

function Login(props) {
    const { user, errorMessage } = props;
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [userName, setUserName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    useEffect(() => {
        if (userName) {
            setShowErrorMessage(true)
            // setIsSubmitting(false)
        }
    }, [userName])

    // const history = useHistory();
    // const dispatch = useDispatch();
    // const getPokemon = (state) => {
    //     dispatch(actions.doLogin(state));
    // };

    const doSignin = (values) => {
        props.getdata(values);
        setUserName(values.name)
        // setIsSubmitting(true);
    }

    return (
        <div className='login-wrapper'>
            <div className='login-wrapper__content'>
                <div className='login-wrapper__logo'>
                    <h1>Login</h1>
                </div>
                <Formik
                    initialValues={{
                        name: userName,
                        password: ''
                    }}
                    validationSchema={schema}
                    onSubmit={doSignin}
                    enableReinitialize
                >
                    {
                        (form) => (
                            <Form onFinish={form.handleSubmit} >
                                <InputFormItem
                                    name={'name'}
                                    placeholder={'Ingrese nombre'}
                                    autoComplete={'off'}
                                    size='large'
                                    autoFocus
                                    layout={null}
                                    form={form}
                                    required
                                    errorMessage={showErrorMessage ? errorMessage : null}
                                    setShowErrorMessage={setShowErrorMessage}
                                    showErrorMessage={showErrorMessage}
                                />

                                <InputFormItem
                                    name={'password'}
                                    placeholder={'Ingrese contraseña'}
                                    autoComplete={'off'}
                                    type='password'
                                    size='large'
                                    layout={null}
                                    form={form}
                                    required
                                    errorMessage={showErrorMessage ? errorMessage : null}
                                    setShowErrorMessage={setShowErrorMessage}
                                    showErrorMessage={showErrorMessage}
                                />
                                <Button
                                    type='primary'
                                    size='large'
                                    block
                                    htmlType='submit'
                                    loading={user.loading}
                                >
                                    {'Ingresar'}
                                </Button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
}

const schema = yup.object().shape({
    name: yup.string().nullable(true).trim()
        .required("Nombre es requerido.").max(100),
    password: yup.string().nullable(true).trim()
        .required("Contraseña es requerida.")
})

const mapStateToProps = state => {
    return { user: state.auth, errorMessage: state.auth.user.errorMessage }
};

const mapDispatchToProps = dispatch => {
    const getdata = values => dispatch(actions.doLogin(values));
    return {
        getdata
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);