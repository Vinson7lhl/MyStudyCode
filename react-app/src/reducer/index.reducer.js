const addNum = (state = {num:0}, action) => {
    switch (action.type) {
        case 'ADD_NUM':
            return Object.assign({}, state, {
                num: action.num
              })
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        default:
            return state
    }
}
export default addNum