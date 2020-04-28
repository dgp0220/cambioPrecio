import http from '../httpCommon';

const getAll = () => {

}


const get = async (id) => {
    const result = await http.get(`pokemon/${id}`);
    return result.data;
}

const create = data => {

}

const update = (id, data) => {

}

const remove = id => {

}

export default {
    getAll,
    get,
    create,
    update,
    remove
}