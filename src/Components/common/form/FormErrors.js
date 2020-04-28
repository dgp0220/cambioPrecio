
const displayableError = (form, fieldName, externalErrorMessage = null) => {

    if (externalErrorMessage || externalErrorMessage === "") {
        return fieldName === 'name' ? "" : externalErrorMessage;
    }

    if (!form.touched[fieldName]) {
        return null;
    }

    const errors = form.errors[fieldName];

    if (!errors) {
        return null;
    }

    if (Array.isArray(errors)) {
        return errors[0];
    }

    return errors;
}

const validateStatus = (form, fieldName, externalErrorMessage = null) => {
    const error = displayableError(form, fieldName, externalErrorMessage);

    if (error || error === "")
        return 'error';

    return 'success';
}

export default {
    displayableError,
    validateStatus
}