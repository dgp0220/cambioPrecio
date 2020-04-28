// import http from '../httpCommon';

const dummy = [
    {
        userName: 'user1',
        data: {
            userName: 'user1',
            name: 'Nombre_1 Apellido_1'
        }
    },
    {
        userName: 'user1',
        data: {
            userName: 'user1',
            name: 'Nombre_1 Apellido_1'
        }
    }
];

const login = async (name) => {
    let result = dummy.find(u => u.userName === name);

    if (result === undefined) {
        result = {
            data: {
                errorMessage: "Los datos ingresados no son correctos."
            }
        }
    }

    if (result.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(result.data));
    }

    return result.data;
}

const logout = localStorage.removeItem('user');

const getCurrentUser = JSON.parse(localStorage.getItem('user'));

export default {
    login,
    logout,
    getCurrentUser
}