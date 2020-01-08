export const initialState = {
    todoArray: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: Date.now()
        }
    ],
};

export function reducer (state, action) {
    console.log('action', action);
    switch (action.type) {
        case "ADD_TODO":
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            return {
                ...state,
                todoArray: [...state.todoArray, newTodo]
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todoArray: state.todoArray.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        };
                    } else {
                        return todo;
                    }
                })
            };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todoArray: state.todoArray.filter(todo => !todo.completed)
            };
        default:
            return state;
    }
}