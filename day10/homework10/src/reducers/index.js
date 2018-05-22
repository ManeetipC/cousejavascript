import { ADDTOCART } from '../actions/actionadd';
// import todos from './todos';
// import counter from './counter';
const intiialstate = { data: [{ id: 1, img: '123', price: 50 }, { id: 2, img: '123', price: 70 }, { id: 3, img: '123', price: 25 }] }
function rootReducer(state = intiialstate, action) {
    switch (action.type) {
        // case ADDTOCART:
        //     return { ...state, count: state.count + action.amount };
        default:
            return state;
    }
}

export default rootReducer;

// export default combineReducers({
//   todos, // มีค่าเท่ากับ todos: todos
//   count: counter
//  });
