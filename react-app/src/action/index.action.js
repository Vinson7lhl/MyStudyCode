export const ADD_NUM = 'ADD_NUM';

export const setAddNum = (num) => {
    return {
        type: ADD_NUM,
        id: '001',
        num: num,
        isShow: false
    }
}